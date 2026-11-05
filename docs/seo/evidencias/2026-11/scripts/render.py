"""Pillow para composição; HTML escapado para dados reais, sem dependências novas."""
import sys, json, re, html
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
E=lambda x:html.escape(str(x))
def save(im,dest):
    im.convert('RGB').quantize(colors=256).save(dest,optimize=True)
    if Path(dest).stat().st_size>=500000:
        im.convert('RGB').quantize(colors=128).save(dest,optimize=True)
    assert Path(dest).stat().st_size<500000, dest
if sys.argv[1]=='compress':
    save(Image.open(sys.argv[2]),sys.argv[3]);sys.exit()
if sys.argv[1]=='pair':
    a,b=map(Image.open,sys.argv[2:4]); route=sys.argv[5]
    im=Image.new('RGB',(2560,max(a.height,b.height)+92),'#e9edf2');d=ImageDraw.Draw(im)
    f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',23)
    for x,p,label,port in [(0,a,'main',3200),(1280,b,'branch seo/auditoria-geo-fixes',3201)]:
        d.rectangle((x,0,x+1279,91),fill='#132338');d.text((x+24,10),label,font=f,fill='white');d.text((x+24,47),f'http://localhost:{port}{route}',font=f,fill='#cde3ff');im.paste(p,(x,92))
    d.line((1280,0,1280,im.height),fill='#6d7c90',width=2);save(im,sys.argv[4]);sys.exit()
tmp,out=map(Path,sys.argv[2:]);data=json.loads((tmp/'data.json').read_text());reports=[]
css='''body{margin:0;padding:28px;font:17px Arial,sans-serif;color:#172234;background:#f3f6fa}h1{font-size:27px;margin:0 0 12px}h2{font-size:22px}p{line-height:1.45}table{border-collapse:collapse;width:100%;table-layout:fixed;background:white}th,td{border:1px solid #cbd5e1;padding:12px;text-align:left;vertical-align:top;overflow-wrap:anywhere;line-height:1.45}th{background:#17324f;color:white}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:16px/1.5 monospace;background:#142033;color:#e2efff;padding:18px;border-radius:6px}mark{background:#fee2b3;color:#7c2400;padding:2px 5px}.ok{color:#106336;font-weight:bold}.muted{color:#526174}'''
def report(name,title,body,source,description=None,extra=''):
    (tmp/(name+'.html')).write_text(f'<!doctype html><meta charset="utf-8"><style>{css}{extra}</style><h1>{E(title)}</h1><p class="muted">{E(source)}</p>'+body)
    reports.append(dict(name=name,source=source,description=description or title))
for index,start in enumerate(range(0,17,4)):
    routes=list(dict.fromkeys(p['route'] for p in data['pages']))[start:start+4];rows=''
    for route in routes:
        cells=[]
        for port in [3200,3201]:
            p=next(p for p in data['pages'] if p['route']==route and p['port']==port)
            t,desc=p['title'],p['description'];tc=len(t);dc=len(desc)
            cells.append(f'<b>title · <{ "mark" if tc<30 or tc>60 else "span"}>{tc} caracteres</{ "mark" if tc<30 or tc>60 else "span"}></b><p>{E(t)}</p><b>description · <{ "mark" if dc>160 else "span"}>{dc} caracteres</{ "mark" if dc>160 else "span"}></b><p>{E(desc)}</p>')
        rows+=f'<tr><td style="width:22%">{E(route)}</td><td>{cells[0]}</td><td>{cells[1]}</td></tr>'
    report(f'{9+index:02}-metadados-parte-{index+1}',f'Title e description — antes / depois ({index+1}/5)','<p>Destaque: title &lt;30 ou &gt;60; description &gt;160 caracteres.</p><table><tr><th>URL (mesmo caminho)</th><th>main · :3200</th><th>branch seo/auditoria-geo-fixes · :3201</th></tr>'+rows+'</table>','HTTP: http://localhost:3200 e http://localhost:3201; title e meta[name=description].')
def flatten(obj):
    if isinstance(obj,dict):
        yield obj
        for v in obj.values():yield from flatten(v)
    elif isinstance(obj,list):
        for v in obj:yield from flatten(v)
rows=''
for port in [3200,3201]:
    nodes=list(flatten(data['schemas'][str(port)]));org=next(n for n in nodes if n.get('@type')=='Organization' and 'sameAs'in n);blog=next(n for n in nodes if n.get('@type')=='BlogPosting')
    snippets=[{'@type':'Organization','sameAs':org['sameAs']},{'@type':'BlogPosting','image':blog.get('image'),'author':blog.get('author')}]
    rows+='<td>'+''.join('<pre>'+E(json.dumps(s,ensure_ascii=False,indent=2))+'</pre>' for s in snippets)+'</td>'
report('14-json-ld','JSON-LD real — sameAs, image e author','<p>Campos selecionados do JSON-LD; author preservado como Organization.</p><table><tr><th>main · :3200</th><th>branch seo/auditoria-geo-fixes · :3201</th></tr><tr>'+rows+'</tr></table>','HTTP /articles/conciliacao-pix-api nos dois servidores; scripts application/ld+json.')
def sections(text):return {m.group(1).strip():m.group(2).strip() for m in re.finditer(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)',text,re.M|re.S)}
heads=list(dict.fromkeys(h for port in ['3200','3201'] for h in sections(data['llms'][port]['llms.txt'])))
rows=''
for h in heads:
    cells=[]
    for port in ['3200','3201']:
        short=sections(data['llms'][port]['llms.txt']);full=sections(data['llms'][port]['llms-full.txt']);ok=h in full and short.get(h,'') in full[h]
        cells.append('<td>'+('— ausente no short' if h not in short else ('<span class="ok">H2 + corpo cobertos</span>' if ok else 'H2 presente; corpo diverge' if h in full else '<mark>H2 ausente no full</mark>'))+'</td>')
    rows+='<tr><td>'+E(h)+'</td>'+''.join(cells)+'</tr>'
network=''
for port in ['3200','3201']:
    network+='<h2>'+('main' if port=='3200' else 'branch seo/auditoria-geo-fixes')+'</h2>'
    for file,text in data['llms'][port].items():
        sec=sections(text);block=next((v for k,v in sec.items() if 'Supported Networks' in k),'[seção ausente]')
        solana='\n'.join(line for line in text.splitlines() if 'Solana' in line and ('USDT' in line or 'USDC' in line))
        network+='<b>'+E(file)+' — Supported Networks + linhas USDT/USDC com Solana</b><pre>'+E(block+'\n'+solana)+'</pre>'
report('15-llms-cobertura','llms.txt → llms-full.txt: cobertura por H2','<p>Coberto = H2 exato e corpo completo da seção short contido na seção full.</p><table><tr><th>H2 de llms.txt (união das versões)</th><th>main · :3200</th><th>branch · :3201</th></tr>'+rows+'</table>','HTTP /llms.txt e /llms-full.txt nos servidores :3200 e :3201.')
report('16-llms-redes','Redes suportadas — trechos reais',network,'HTTP /llms.txt e /llms-full.txt nos servidores :3200 e :3201.')
report('17-cookies-href-microsoft','Cookies — href Microsoft extraído do HTML','<table><tr><th>main · :3200/cookies</th><th>branch · :3201/cookies</th></tr><tr>'+''.join('<td><pre>'+E('\n'.join(data['cookies'][str(p)]))+'</pre></td>' for p in [3200,3201])+'</tr></table>','HTTP http://localhost:3200/cookies e http://localhost:3201/cookies; outerHTML do link Microsoft.')
for i,log in enumerate(['lint','typecheck','test','build','test-seo'],18):
    source='/workspace/seo/evidence-logs/'+log+'.log';text=Path(source).read_text();text=re.sub(r'\x1b\[[0-9;]*[A-Za-z]','',text);lines=text.splitlines()
    if len(lines)>85:lines=lines[:28]+[f'[… {len(lines)-65} linhas omitidas …]']+lines[-37:]
    report(f'{i:02}-log-{log}',f'Log real — {"test:seo" if log=="test-seo" else log}','<pre>'+E('\n'.join(lines))+'</pre>',source,extra='body{background:#0e1725;color:#e3efff}.muted{color:#b5c9e0}pre{font-size:16px;background:#0e1725;padding:0}')
(tmp/'reports.json').write_text(json.dumps(reports))
