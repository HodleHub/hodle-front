// Node >=22; Chrome CDP em localhost:9333. Nenhuma dependência npm.
import fs from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
const out=path.resolve(import.meta.dirname,'..');
const tmp='/tmp/hodle-seo-evidence'; await fs.mkdir(tmp,{recursive:true});
const target=await (await fetch('http://localhost:9333/json/new?about:blank',{method:'PUT'})).json();
const ws=new WebSocket(target.webSocketDebuggerUrl); await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map();ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result)}};
const cdp=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))});
const evaluate=async expression=>{const r=await cdp('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value};
await cdp('Page.enable');await cdp('Emulation.setDeviceMetricsOverride',{width:1280,height:1000,deviceScaleFactor:1,mobile:false});
async function nav(url){await cdp('Page.navigate',{url});for(let i=0;i<100;i++){await new Promise(r=>setTimeout(r,100));if(await evaluate('document.readyState')==='complete')break;}await evaluate('document.fonts.ready');await new Promise(r=>setTimeout(r,500));}
async function shot(file,clip){const r=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,...(clip?{clip:{...clip,scale:1}}:{})});await fs.writeFile(file,Buffer.from(r.data,'base64'));}
const specs=[
 ['01-faq-definicao','/faq','faq','O que é a Hodle'],
 ['02-faq-payout','/faq','faq','payout'],
 ['03-sobre-payout','/sobre','text','Pagar Pix a partir'],
 ['04-precos-contraste','/precos','text','Atualizado em'],
 ['05-cookies-navegadores','/cookies','link','microsoft'],
 ['06-articles-hub','/articles','hub',''],
 ['07-artigo-conciliacao','/articles/conciliacao-pix-api','article',''],
 ['08-baas-relacionados','/baas','related','']];
const manifest=[];
for(const [name,route,kind,needle] of specs){
 const files=[];
 for(const [label,port] of [['main',3200],['branch',3201]]){
 await nav(`http://localhost:${port}${route}`);
 const region=await evaluate(`(()=>{const kind=${JSON.stringify(kind)}, needle=${JSON.stringify(needle)};let el;
 if(kind==='faq'){el=[...document.querySelectorAll('details')].find(e=>e.querySelector('summary').textContent.toLowerCase().includes(needle.toLowerCase())|| (needle==='payout'&&e.textContent.toLowerCase().includes('payout')));if(el)el.open=true;}
 if(kind==='text')el=[...document.querySelectorAll('li,p,span')].find(e=>e.textContent.toLowerCase().includes(needle.toLowerCase())&&e.textContent.length<1800);
 if(kind==='link')el=[...document.querySelectorAll('a')].find(e=>e.href.toLowerCase().includes(needle))?.closest('ul');
 if(kind==='hub')el=document.querySelector('h1');
 if(kind==='article')el=document.querySelector('h1');
 if(kind==='related')el=[...document.querySelectorAll('h2,h3')].find(e=>/Continue explorando/i.test(e.textContent));
 if(!el)throw Error('Região não encontrada '+kind+' '+needle);
 const r=el.getBoundingClientRect(); const y=Math.max(0,r.top+scrollY-80);return {x:0,y,width:1280,height:kind==='hub'?1250:kind==='article'?700:kind==='related'?650:Math.max(260,Math.min(850,r.height+150))};})()`);
 const f=`${tmp}/${name}-${label}.png`;await shot(f,region);files.push(f);
 }
 execFileSync('python3',[path.join(import.meta.dirname,'render.py'),'pair',...files,path.join(out,name+'.png'),route]);manifest.push({name:name+'.png',description:`Comparação visual de ${route}${needle?' — '+needle:''}.`,source:`http://localhost:3200${route} e http://localhost:3201${route}`});
}
const routes=['/neobank','/legal','/crypto-as-a-service','/faq','/articles','/articles/comparar-api-pix-baas','/articles/auto-custodia-nao-e-detalhe-de-implementacao','/marca','/contato','/sobre','/en/pix-stablecoin-api','/pagar-fornecedores-com-usdc','/articles/conciliacao-pix-api','/articles/integrar-api-pix-nodejs','/articles/validar-webhook-pix-idempotencia','/articles/criar-link-pagamento-pix-api','/articles/psav-regulacao-banco-central'];
const data={pages:[],llms:{},schemas:{},cookies:{}};
for(const port of [3200,3201]){
 for(const route of routes){const url=`http://localhost:${port}${route}`;const response=await fetch(url);if(!response.ok)throw Error(url+' '+response.status);const html=await response.text();const parsed=await evaluate(`(()=>{const d=new DOMParser().parseFromString(${JSON.stringify(html)},'text/html');return {title:d.title,description:d.querySelector('meta[name="description"]')?.content,schemas:[...d.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent))}})()`);data.pages.push({port,route,title:parsed.title,description:parsed.description});if(route==='/articles/conciliacao-pix-api')data.schemas[port]=parsed.schemas;}
 data.llms[port]={};for(const f of ['llms.txt','llms-full.txt'])data.llms[port][f]=await(await fetch(`http://localhost:${port}/${f}`)).text();
 const html=await(await fetch(`http://localhost:${port}/cookies`)).text();data.cookies[port]=await evaluate(`(()=>{const d=new DOMParser().parseFromString(${JSON.stringify(html)},'text/html');return [...d.querySelectorAll('a')].filter(a=>/microsoft/i.test(a.href)).map(a=>a.outerHTML)})()`);
}
await fs.writeFile(tmp+'/data.json',JSON.stringify(data,null,2));
execFileSync('python3',[path.join(import.meta.dirname,'render.py'),'reports',tmp,out]);
const reports=JSON.parse(await fs.readFile(tmp+'/reports.json','utf8'));
for(const report of reports){await nav('file://'+tmp+'/'+report.name+'.html');const height=await evaluate('document.documentElement.scrollHeight');await shot(tmp+'/'+report.name+'.png',{x:0,y:0,width:1280,height});execFileSync('python3',[path.join(import.meta.dirname,'render.py'),'compress',tmp+'/'+report.name+'.png',path.join(out,report.name+'.png')]);manifest.push({name:report.name+'.png',description:report.description,source:report.source});}
await fs.writeFile(path.join(out,'index.md'),'# Evidências visuais — auditoria SEO/GEO, novembro de 2026\n\nMain: http://localhost:3200; branch `seo/auditoria-geo-fixes`: http://localhost:3201. Dados extraídos dos servidores de produção locais e dos logs existentes; nenhuma métrica Lighthouse foi gerada. Captura em desktop de 1280 px; recortes alinhados pelo conteúdo, FAQ aberto via DOM. Pares preservam a escala original. Cores dos PNGs quantizadas para respeitar 500 KB.\n\n'+manifest.map(m=>`- [${m.name}](${m.name}): ${m.description} Fonte: ${m.source}. Ferramenta: ${m.name.match(/^0[1-8]-/)?'Chrome CDP + Pillow (recorte e composição)':'HTTP/arquivos reais → HTML escapado → Chrome CDP + Pillow'}.`).join('\n')+'\n\n## Reprodução\n\nRequer servidores já ativos, Node com WebSocket nativo, Python 3/Pillow e Chrome. Não recompila nem encerra servidores.\n\n```bash\n/usr/bin/google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars --remote-debugging-port=9333 --user-data-dir=/tmp/seo-evidence-chrome about:blank\n# Em outro terminal, na raiz do repositório:\nnode docs/seo/evidencias/2026-11/scripts/generate.mjs\n```\n\nScripts: [generate.mjs](scripts/generate.mjs), [render.py](scripts/render.py). HTMLs e dados intermediários ficam em `/tmp/hodle-seo-evidence`. As faixas 30–60 e ≤160 são apenas critérios visuais solicitados; as contagens usam caracteres Unicode do texto decodificado. A cobertura llms exige tanto o mesmo H2 quanto o corpo completo da seção short dentro de full.\n');
ws.close();
