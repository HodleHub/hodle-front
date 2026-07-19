import type { Metadata } from 'next'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade da Hodle. Saiba como tratamos seus dados pessoais em conformidade com a LGPD (Lei Geral de Proteção de Dados).',
  openGraph: {
    title: 'Política de Privacidade | Hodle',
    description:
      'Saiba como a Hodle trata seus dados pessoais em conformidade com a LGPD.',
  },
}

const sections = [
  {
    title: '1. Introdução',
    content: (
      <>
        <p>
          A Hodle Tecnologia Ltda. (&ldquo;Hodle&rdquo;, &ldquo;nós&rdquo; ou
          &ldquo;nosso&rdquo;) está comprometida com a proteção da sua
          privacidade. Esta Política de Privacidade descreve como coletamos,
          usamos, compartilhamos e protegemos as informações pessoais dos
          usuários de nossa plataforma de infraestrutura cripto, em
          conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD -
          Lei nº 13.709/2018).
        </p>
        <p>
          Ao utilizar a plataforma Hodle, você concorda com as práticas
          descritas nesta política. Se você não concordar com algum termo,
          pedimos que não utilize nossos serviços.
        </p>
      </>
    ),
  },
  {
    title: '2. Dados que Coletamos',
    content: (
      <>
        <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          Dados de Identificação
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Nome completo</li>
          <li>CPF/CNPJ</li>
          <li>Endereço residencial ou comercial</li>
          <li>Data de nascimento</li>
          <li>Documentos de identidade (RG, CNH, passaporte)</li>
        </ul>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          Dados de Contato
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Endereço de e-mail</li>
          <li>Número de telefone</li>
        </ul>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          Dados de Navegação e Uso
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Endereço IP</li>
          <li>Tipo de navegador e dispositivo</li>
          <li>Páginas visitadas e interações na plataforma</li>
          <li>Cookies e tecnologias similares</li>
        </ul>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          Dados Financeiros e Transacionais
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>Dados bancários para operações PIX e TED</li>
          <li>Histórico de transações com ativos digitais</li>
          <li>Endereços de carteiras blockchain</li>
          <li>Informações de KYC/AML conforme exigido por regulação</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Como Usamos Seus Dados',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <strong>Prestação de serviços:</strong> processar transações,
          gerenciar sua conta e fornecer suporte.
        </li>
        <li>
          <strong>Compliance e regulação:</strong> realizar verificações KYC
          (Know Your Customer) e AML (Anti-Money Laundering) exigidas por lei.
        </li>
        <li>
          <strong>Segurança:</strong> prevenir fraudes, acessos não
          autorizados e atividades ilícitas.
        </li>
        <li>
          <strong>Melhoria dos serviços:</strong> analisar uso da plataforma
          para aprimorar funcionalidades e experiência do usuário.
        </li>
        <li>
          <strong>Comunicação:</strong> enviar notificações sobre sua conta,
          atualizações de serviços e comunicados legais.
        </li>
        <li>
          <strong>Marketing (com consentimento):</strong> enviar ofertas e
          novidades, quando autorizado por você.
        </li>
      </ul>
    ),
  },
  {
    title: '4. Base Legal para o Tratamento',
    content: (
      <p className="text-gray-600">
        Tratamos seus dados pessoais com base nas seguintes hipóteses legais
        previstas na LGPD: cumprimento de obrigação legal ou regulatória
        (art. 7º, II), execução de contrato (art. 7º, V), exercício regular
        de direitos (art. 7º, VI), proteção ao crédito (art. 7º, X) e
        legítimo interesse (art. 7º, IX). Quando necessário, solicitaremos
        seu consentimento específico (art. 7º, I).
      </p>
    ),
  },
  {
    title: '5. Compartilhamento de Dados',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Podemos compartilhar seus dados com:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Parceiros regulados:</strong> instituições financeiras
            parceiras para operações bancárias e PIX.
          </li>
          <li>
            <strong>Provedores de serviços:</strong> serviços de hospedagem,
            análise de dados, processamento de pagamentos e verificação de
            identidade.
          </li>
          <li>
            <strong>Autoridades regulatórias:</strong> quando exigido por lei,
            ordem judicial ou requisição de órgãos reguladores (BACEN, CVM,
            COAF).
          </li>
          <li>
            <strong>Consultores profissionais:</strong> advogados,
            contadores e auditores no exercício de suas funções.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          Não vendemos seus dados pessoais a terceiros.
        </p>
      </>
    ),
  },
  {
    title: '6. Cookies e Tecnologias de Rastreamento',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Utilizamos cookies e tecnologias similares para melhorar sua
          experiência, analisar o uso da plataforma e oferecer conteúdo
          relevante. Você pode gerenciar as preferências de cookies nas
          configurações do seu navegador.
        </p>
        <p className="text-gray-600">
          Cookies essenciais são necessários para o funcionamento da
          plataforma. Cookies analíticos nos ajudam a entender como você
          interage com o site. Para cookies de marketing, solicitamos seu
          consentimento prévio.
        </p>
      </>
    ),
  },
  {
    title: '7. Segurança dos Dados',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Adotamos medidas técnicas e organizacionais para proteger seus dados
          pessoais contra acesso não autorizado, destruição, perda ou
          alteração, incluindo:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Criptografia em trânsito (TLS 1.3) e em repouso (AES-256)</li>
          <li>Controles de acesso rigorosos com princípio de privilégio mínimo</li>
          <li>Monitoramento contínuo de segurança e detecção de intrusões</li>
          <li>
            Auditorias periódicas de segurança e testes de penetração
          </li>
          <li>
            Conformidade com padrões de segurança do setor financeiro
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          Importante: por se tratar de uma plataforma com wallets
          auto-custodiais, as chaves privadas são armazenadas localmente no
          dispositivo do usuário e não são acessíveis à Hodle.
        </p>
      </>
    ),
  },
  {
    title: '8. Retenção e Eliminação de Dados',
    content: (
      <p className="text-gray-600">
        Mantemos seus dados pessoais pelo período necessário para cumprir as
        finalidades descritas nesta política, ou pelo prazo exigido por lei
        (em especial, as obrigações de guarda de registros do setor
        financeiro por 5 anos após o término da relação contratual).
        Após esse período, os dados são eliminados de forma segura ou
        anonimizados.
      </p>
    ),
  },
  {
    title: '9. Seus Direitos (LGPD)',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Como titular de dados pessoais, você tem os seguintes direitos,
          garantidos pela LGPD:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Confirmação da existência de tratamento</li>
          <li>Acesso aos seus dados</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço</li>
          <li>
            Eliminação dos dados tratados com consentimento
          </li>
          <li>Informação sobre compartilhamento com terceiros</li>
          <li>
            Revogação do consentimento a qualquer momento
          </li>
          <li>Oposição ao tratamento</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Para exercer seus direitos, entre em contato pelo e-mail{' '}
          <a
            href="mailto:contato@hodle.com.br"
            className="text-foreground underline underline-offset-2 hover:text-gray-600"
          >
            contato@hodle.com.br
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: '10. Encaminhamento de Dados Internacionalmente',
    content: (
      <p className="text-gray-600">
        Podemos transferir seus dados para países com nível de proteção
        adequado reconhecido pela ANPD, ou com garantias contratuais
        apropriadas (cláusulas-padrão, normas corporativas globais), sempre
        em conformidade com a LGPD.
      </p>
    ),
  },
  {
    title: '11. Encarregado de Proteção de Dados (DPO)',
    content: (
      <p className="text-gray-600">
        Nosso Encarregado de Proteção de Dados (DPO) pode ser contatado para
        esclarecer dúvidas sobre esta política ou sobre o tratamento dos seus
        dados pessoais pelo e-mail{' '}
        <a
          href="mailto:dpo@hodle.com.br"
          className="text-foreground underline underline-offset-2 hover:text-gray-600"
        >
          dpo@hodle.com.br
        </a>
        .
      </p>
    ),
  },
  {
    title: '12. Alterações a Esta Política',
    content: (
      <p className="text-gray-600">
        Esta política pode ser atualizada periodicamente para refletir mudanças
        em nossas práticas ou na legislação aplicável. Notificaremos você sobre
        alterações significativas por e-mail ou por aviso em nossa plataforma.
        Recomendamos a revisão periódica desta página.
      </p>
    ),
  },
  {
    title: '13. Contato',
    content: (
      <div className="space-y-2 text-gray-600">
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade, entre em
          contato conosco:
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

export default function PrivacyPage() {
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
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-400">
            Última atualização: julho de 2026
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
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
