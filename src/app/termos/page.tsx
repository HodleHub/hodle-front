import type { Metadata } from 'next'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description:
    'Termos e condições de uso da plataforma Hodle. Leia atentamente antes de utilizar nossos serviços de infraestrutura cripto.',
  openGraph: {
    title: 'Termos de Serviço | Hodle',
    description:
      'Termos e condições de uso da plataforma de infraestrutura cripto da Hodle.',
  },
}

const sections = [
  {
    title: '1. Aceitação dos Termos',
    content: (
      <>
        <p>
          Ao acessar ou utilizar a plataforma Hodle (o &ldquo;Serviço&rdquo;),
          você (&ldquo;Usuário&rdquo; ou &ldquo;Cliente&rdquo;) concorda em
          cumprir e ficar vinculado a estes Termos de Serviço
          (&ldquo;Termos&rdquo;). Se você não concordar com qualquer parte
          destes Termos, não utilize o Serviço.
        </p>
        <p className="mt-4">
          A Hodle Tecnologia Ltda., inscrita sob CNPJ a ser informado,
          com sede no Brasil, é a provedora do Serviço. Estes Termos aplicam-se
          a todas as pessoas físicas e jurídicas que utilizam a plataforma.
        </p>
      </>
    ),
  },
  {
    title: '2. Definições',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <strong>Plataforma:</strong> o website hodle.com.br e o aplicativo
          web app.hodle.com.br.
        </li>
        <li>
          <strong>Ativos Digitais:</strong> criptomoedas e tokens, incluindo
          Bitcoin, USDT, USDC e outros ativos suportados.
        </li>
        <li>
          <strong>Wallet Auto-custodial:</strong> carteira digital onde o
          usuário detém o controle exclusivo das chaves privadas.
        </li>
        <li>
          <strong>KYC:</strong> processo de verificação de identidade (Know
          Your Customer).
        </li>
        <li>
          <strong>Parceiro Regulado:</strong> instituição financeira autorizada
          pelo Banco Central do Brasil com quem a Hodle opera em parceria.
        </li>
      </ul>
    ),
  },
  {
    title: '3. Elegibilidade',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Para utilizar o Serviço, você declara que:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            É maior de 18 anos ou legalmente capaz de assumir obrigações
            contratuais.
          </li>
          <li>
            (Pessoa Jurídica) Está devidamente constituída e representada por
            pessoa com poderes legais.
          </li>
          <li>
            Não está em lista de sanções ou restrições de órgãos nacionais ou
            internacionais.
          </li>
          <li>
            As informações fornecidas no cadastro são verdadeiras, precisas e
            completas.
          </li>
          <li>
            Não utiliza o Serviço para atividades ilícitas, incluindo lavagem
            de dinheiro, financiamento ao terrorismo ou fraudes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Cadastro e Conta',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Para acessar funcionalidades da plataforma, é necessário criar uma
          conta. Você é responsável por:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Manter a confidencialidade de suas credenciais de acesso.</li>
          <li>
            Todas as atividades realizadas em sua conta.
          </li>
          <li>
            Manter seus dados cadastrais atualizados.
          </li>
          <li>
            Completar o processo de KYC quando solicitado, conforme exigido
            pela regulação aplicável.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          A Hodle reserva-se o direito de recusar ou encerrar contas a seu
          critério, em conformidade com a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    title: '5. Serviços Oferecidos',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          A Hodle oferece os seguintes serviços, sujeitos à disponibilidade e
          regulação aplicável:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Compra e Venda de Ativos Digitais:</strong> aquisição e
            alienação de criptomoedas com liquidação via PIX.
          </li>
          <li>
            <strong>Wallets Auto-custodiais:</strong> geração e gerenciamento
            de carteiras com chaves privadas sob controle do usuário.
          </li>
          <li>
            <strong>Pagamentos com Stablecoins:</strong> pagamento de QR codes
            PIX utilizando stablecoins como USDT e USDC.
          </li>
          <li>
            <strong>Conta PJ:</strong> conta empresarial em parceria com
            instituições reguladas.
          </li>
          <li>
            <strong>APIs:</strong> interfaces de programação para integração
            dos serviços.
          </li>
          <li>
            <strong>Crossborder Payments:</strong> transferências
            internacionais com stablecoins.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Riscos e Isenções de Responsabilidade',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          O uso de ativos digitais envolve riscos significativos. Ao utilizar
          o Serviço, você reconhece e aceita que:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            O valor dos ativos digitais é volátil e pode resultar em perda
            total do capital investido.
          </li>
          <li>
            Transações em blockchain são irreversíveis. A Hodle não pode
            reverter transações confirmadas.
          </li>
          <li>
            Em wallets auto-custodiais, a Hodle não tem acesso às chaves
            privadas. A perda das chaves implica perda irreversível dos
            ativos.
          </li>
          <li>
            Riscos tecnológicos, incluindo falhas de rede, ataques cibernéticos
            e bugs de software, podem afetar a disponibilidade do Serviço.
          </li>
          <li>
            Mudanças regulatórias podem impactar a legalidade ou viabilidade
            dos serviços oferecidos.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          A Hodle não se responsabiliza por perdas decorrentes de eventos de
          força maior, ações de terceiros, falhas na rede blockchain, ou
          decisões do usuário.
        </p>
      </>
    ),
  },
  {
    title: '7. Taxas e Valores',
    content: (
      <p className="text-gray-600">
        As taxas aplicáveis aos serviços são informadas na plataforma e podem
        ser alteradas mediante aviso prévio. As transações estão sujeitas a
        taxas de rede (network fees) cobradas pelas respectivas blockchains,
        que estão fora do controle da Hodle.
      </p>
    ),
  },
  {
    title: '8. Compliance e Regulação',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          A Hodle opera em conformidade com a legislação brasileira e as
          diretrizes dos órgãos reguladores, incluindo:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            Lei de Prevenção à Lavagem de Dinheiro (Lei nº 9.613/1998)
          </li>
          <li>
            Marco Legal das Criptomoedas (Lei nº 14.478/2022)
          </li>
          <li>
            Instruções e regulamentos do Banco Central do Brasil (BACEN)
          </li>
          <li>
            Diretrizes da Comissão de Valores Mobiliários (CVM)
          </li>
          <li>LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018)</li>
        </ul>
        <p className="text-gray-600 mt-4">
          A Hodle reporta operações suspeitas ao COAF (Conselho de Controle de
          Atividades Financeiras) conforme exigido por lei.
        </p>
      </>
    ),
  },
  {
    title: '9. Propriedade Intelectual',
    content: (
      <p className="text-gray-600">
        Todo o conteúdo, design, logotipos, marcas e software da plataforma
        Hodle são de propriedade exclusiva da Hodle Tecnologia Ltda. ou de
        seus licenciantes. É proibida a reprodução, distribuição ou uso não
        autorizado do conteúdo sem autorização prévia por escrito.
      </p>
    ),
  },
  {
    title: '10. Limitação de Responsabilidade',
    content: (
      <p className="text-gray-600">
        Em nenhuma circunstância a Hodle será responsável por danos
        indiretos, incidentais, especiais, consequenciais ou punitivos,
        incluindo perda de lucros, receitas, dados ou uso, decorrentes do uso
        ou da impossibilidade de uso do Serviço, mesmo que informada sobre a
        possibilidade de tais danos. A responsabilidade total da Hodle por
        qualquer reclamação decorrente destes Termos não excederá o valor total
        das taxas pagas pelo Cliente nos 12 meses anteriores ao evento que
        originou a reclamação.
      </p>
    ),
  },
  {
    title: '11. Suspensão e Cancelamento',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          A Hodle pode suspender ou encerrar sua conta a qualquer momento,
          mediante aviso, nas seguintes hipóteses:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Violação destes Termos de Serviço.</li>
          <li>Atividade suspeita ou fraudulenta.</li>
          <li>
            Descumprimento de obrigações legais ou regulatórias.
          </li>
          <li>
            Solicitação de órgãos reguladores ou judiciais.
          </li>
          <li>Inatividade prolongada da conta.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Você pode encerrar sua conta a qualquer momento, solicitar o resgate
          de ativos e a exclusão de seus dados, sujeito às obrigações legais
          de guarda de registros.
        </p>
      </>
    ),
  },
  {
    title: '12. Disposições Gerais',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <strong>Lei Aplicável:</strong> estes Termos são regidos pelas leis
          da República Federativa do Brasil.
        </li>
        <li>
          <strong>Foro:</strong> as partes elegem o foro da Comarca de São
          Paulo/SP para dirimir quaisquer controvérsias decorrentes destes
          Termos.
        </li>
        <li>
          <strong>Integralidade:</strong> estes Termos constituem o acordo
          integral entre as partes.
        </li>
        <li>
          <strong>Renúncia:</strong> a não exigência de qualquer disposição
          destes Termos não constitui renúncia a direitos.
        </li>
        <li>
          <strong>Cessão:</strong> você não pode ceder seus direitos sem
          consentimento da Hodle.
        </li>
      </ul>
    ),
  },
  {
    title: '13. Contato',
    content: (
      <div className="space-y-2 text-gray-600">
        <p>
          Para dúvidas, reclamações ou comunicação de violações, entre em
          contato:
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-[720px] mx-auto px-6 py-20 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Legal
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Termos de Serviço
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
      </article>
    </div>
  )
}
