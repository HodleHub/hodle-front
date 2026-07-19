import type { Metadata } from 'next'
import Link from 'next/link'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Política de cookies da Hodle. Saiba como usamos cookies e tecnologias similares em nossa plataforma, em conformidade com a LGPD e o Marco Civil da Internet.',
  alternates: {
    canonical: 'https://hodle.com.br/cookies',
  },
  openGraph: {
    title: 'Política de Cookies | Hodle',
    description:
      'Saiba como a Hodle utiliza cookies e tecnologias de rastreamento em sua plataforma.',
    url: 'https://hodle.com.br/cookies',
  },
}

const sections = [
  {
    title: '1. O que são Cookies?',
    content: (
      <>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu navegador
          quando você visita um site. Eles permitem que o site reconheça seu
          dispositivo, lembre de suas preferências e ofereça uma experiência
          personalizada.
        </p>
        <p className="mt-4">
          Além dos cookies, utilizamos tecnologias similares como
          armazenamento local (localStorage), identificadores de dispositivo e
          pixels de rastreamento para as finalidades descritas nesta política.
        </p>
      </>
    ),
  },
  {
    title: '2. Tipos de Cookies que Utilizamos',
    content: (
      <>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          Cookies Essenciais (Necessários)
        </h4>
        <p className="text-gray-600 mb-3">
          Estes cookies são indispensáveis para o funcionamento da plataforma.
          Sem eles, funcionalidades básicas como navegação entre páginas e
          acesso a áreas seguras não funcionariam corretamente.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
          <li>Gerenciamento de sessão do usuário</li>
          <li>Autenticação e segurança da conta</li>
          <li>Lembrar preferências de cookies</li>
          <li>Balanceamento de carga e desempenho</li>
        </ul>

        <h4 className="font-semibold text-foreground mb-2">
          Cookies Analíticos
        </h4>
        <p className="text-gray-600 mb-3">
          Coletam informações anônimas sobre como você utiliza a plataforma —
          quais páginas visita, quanto tempo permanece e se encontra erros.
          Esses dados nos ajudam a melhorar continuamente a experiência.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
          <li>Contagem de visitas e tráfego por página</li>
          <li>Identificação de erros de navegação</li>
          <li>Tempo médio de sessão e taxa de rejeição</li>
          <li>Origens de tráfego (campanhas, redes sociais, busca orgânica)</li>
        </ul>

        <h4 className="font-semibold text-foreground mb-2">
          Cookies de Funcionalidade
        </h4>
        <p className="text-gray-600 mb-3">
          Permitem que a plataforma lembre escolhas que você faz (como idioma
          ou região) e ofereça recursos aprimorados e mais personalizados.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
          <li>Preferência de idioma (pt-BR)</li>
          <li>Configurações de exibição da plataforma</li>
          <li>Dados de formulários preenchidos parcialmente</li>
        </ul>

        <h4 className="font-semibold text-foreground mb-2">
          Cookies de Marketing
        </h4>
        <p className="text-gray-600 mb-3">
          Utilizados para exibir anúncios relevantes para você e medir a
          eficácia de campanhas publicitárias. Esses cookies podem rastrear sua
          visita em outros sites.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Segmentação de anúncios baseada em interesses</li>
          <li>Medição de conversão de campanhas</li>
          <li>Remarketing para visitantes anteriores</li>
          <li>Integração com plataformas de anúncios</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Cookies de Terceiros',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Alguns cookies em nossa plataforma são definidos por serviços de
          terceiros confiáveis. Estes serviços podem incluir:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Analytics:</strong> Vercel Analytics (dados anônimos de uso)
          </li>
          <li>
            <strong>Redes Sociais:</strong> botões de compartilhamento e
            incorporação de conteúdo
          </li>
          <li>
            <strong>CDN e Hospedagem:</strong> Cloudflare (cookies de
            segurança e desempenho)
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          Recomendamos consultar as políticas de privacidade desses terceiros
          para entender como eles tratam seus dados.
        </p>
      </>
    ),
  },
  {
    title: '4. Base Legal',
    content: (
      <p className="text-gray-600">
        Em conformidade com a LGPD (Lei nº 13.709/2018) e o Marco Civil da
        Internet (Lei nº 12.965/2014), os cookies essenciais são utilizados com
        base no legítimo interesse e na execução do contrato de prestação de
        serviços. Para cookies não essenciais (analíticos e de marketing),
        solicitamos seu consentimento prévio e expresso, podendo ser revogado a
        qualquer momento.
      </p>
    ),
  },
  {
    title: '5. Gerenciamento de Cookies',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Você pode controlar e gerenciar os cookies de diversas formas:
        </p>
        <h4 className="font-semibold text-foreground mb-2">
          Configurações do Navegador
        </h4>
        <p className="text-gray-600 mb-4">
          A maioria dos navegadores permite bloquear ou excluir cookies através
          das configurações de privacidade. Consulte a documentação do seu
          navegador:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-site"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p className="text-gray-600">
          Ao desabilitar cookies essenciais, algumas funcionalidades da
          plataforma podem não funcionar corretamente.
        </p>
      </>
    ),
  },
  {
    title: '6. Período de Retenção',
    content: (
      <p className="text-gray-600">
        Os cookies podem ser de sessão (excluídos quando você fecha o navegador)
        ou persistentes (permanecem por um período determinado). O prazo de
        retenção varia conforme a finalidade: cookies analíticos são mantidos
        por até 12 meses, cookies de preferência por até 6 meses, e cookies de
        marketing por até 3 meses. Você pode excluí-los a qualquer momento
        através das configurações do navegador.
      </p>
    ),
  },
  {
    title: '7. Seus Direitos',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Em relação ao tratamento de dados via cookies, você tem o direito de:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Ser informado sobre quais cookies são utilizados</li>
          <li>Recusar cookies não essenciais</li>
          <li>Revogar seu consentimento a qualquer momento</li>
          <li>Solicitar a exclusão dos dados coletados por cookies</li>
          <li>
            Configurar seu navegador para rejeitar cookies de terceiros
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Alterações a Esta Política',
    content: (
      <p className="text-gray-600">
        Esta Política de Cookies pode ser atualizada periodicamente para
        refletir mudanças nas tecnologias utilizadas ou na legislação aplicável.
        Recomendamos a revisão periódica desta página. Alterações significativas
        serão comunicadas por aviso na plataforma.
      </p>
    ),
  },
  {
    title: '9. Contato',
    content: (
      <div className="space-y-2 text-gray-600">
        <p>
          Em caso de dúvidas sobre esta Política de Cookies, entre em contato:
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a
            href="mailto:contato@hodle.com.br"
            className="text-foreground underline underline-offset-2 hover:text-gray-600"
          >
            contato@hodle.com.br
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a
            href="https://api.whatsapp.com/send?phone=5511960000445"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-gray-600"
          >
            (11) 96000-0445
          </a>
        </p>
      </div>
    ),
  },
]

export default function CookiesPage() {
  const cookiesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Cookies - Hodle',
    description:
      'Política de cookies da Hodle em conformidade com a LGPD.',
    inLanguage: 'pt-BR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Hodle',
      url: 'https://hodle.com.br',
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiesJsonLd) }}
      />
      <article className="max-w-[720px] mx-auto px-6 py-20 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Legal
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Política de Cookies
          </h1>
          <p className="text-sm text-gray-400">
            Última atualização: julho de 2026
          </p>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className={`${heading} text-xl font-medium text-foreground mb-4`}
              >
                {section.title}
              </h2>
              <div className="text-[15px] leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/privacidade"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/faq"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </article>
    </div>
  )
}
