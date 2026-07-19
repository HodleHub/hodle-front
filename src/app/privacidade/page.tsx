import type { Metadata } from 'next'
import Link from 'next/link'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade da Hodle. Saiba como tratamos seus dados pessoais em conformidade com a LGPD (Lei Geral de Proteção de Dados).',
  alternates: {
    canonical: 'https://hodle.com.br/privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | Hodle',
    description:
      'Saiba como a Hodle trata seus dados pessoais em conformidade com a LGPD.',
    url: 'https://hodle.com.br/privacidade',
  },
}

const sections = [
  {
    title: 'Cláusula 1 - Natureza da Plataforma',
    content: (
      <>
        <p className="uppercase font-medium text-gray-600">
          A Hodle é uma plataforma tecnológica que facilita a interação do
          usuário com redes blockchain, incluindo Bitcoin, Lightning Network e
          Liquid Network. Ao utilizar a Hodle, você reconhece que somos
          fornecedores de tecnologia que viabilizam sua interação com a
          blockchain. Devido à natureza descentralizada das carteiras digitais,
          a Hodle não possui capacidade técnica de impedir o acesso do usuário à
          sua própria carteira e aos ativos nela contidos.
        </p>
        <p className="uppercase font-medium text-gray-600 mt-3">
          Esta Política deve ser lida em conjunto com os{' '}
          <Link
            href="/termos"
            className="text-foreground underline underline-offset-2 hover:text-gray-600"
          >
            Termos de Uso
          </Link>{' '}
          da Hodle. Ao aceitar esta Política, você consente com o processamento
          de dados necessário para a operação tecnológica da plataforma e
          reconhece a aceitação automática das políticas de privacidade de
          nossos parceiros de infraestrutura.
        </p>
      </>
    ),
  },
  {
    title: 'Cláusula 2 - Legislação Aplicável',
    content: (
      <p className="text-gray-600">
        O tratamento de seus dados pessoais será regido prioritariamente pela
        Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) da República
        Federativa do Brasil. Comprometemo-nos a respeitar os princípios de
        proteção de dados aplicáveis, garantindo transparência, segurança e
        finalidade no tratamento das informações coletadas.
      </p>
    ),
  },
  {
    title: 'Cláusula 3 - Dados Coletados',
    content: (
      <>
        <p className="text-gray-600">
          Para o funcionamento da plataforma, coletamos as seguintes categorias
          de dados:
        </p>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          3.1. Dados coletados diretamente pela Hodle
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>
            <strong>Dados Cadastrais:</strong> e-mail, telefone e senha
            (armazenada de forma criptografada).
          </li>
          <li>
            <strong>Identificadores On-chain:</strong> endereços de carteira
            pública nas redes Bitcoin, Lightning Network e Liquid Network.
          </li>
          <li>
            <strong>Dados de Segurança:</strong> PIN de acesso (utilizado para
            criptografia local de chaves privadas).
          </li>
        </ul>
        <p className="text-gray-600 mt-3">
          <strong>Finalidade:</strong> identificação básica do usuário,
          comunicação de suporte, segurança da conta, criptografia de chaves
          privadas e viabilização técnica da plataforma para leitura de saldos e
          histórico nas redes blockchain.
        </p>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          3.2. Dados coletados por/para Parceiros de Infraestrutura
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>
            <strong>Dados de KYC/Compliance:</strong> nome completo, documentos
            de identificação (RG/CPF/CNH), comprovante de residência e biometria
            facial (selfie).
          </li>
        </ul>
        <p className="text-gray-600 mt-3">
          <strong>Finalidade:</strong> cumprimento de obrigações legais de
          &ldquo;Conheça seu Cliente&rdquo; (KYC), prevenção à lavagem de
          dinheiro (AML) e combate ao financiamento do terrorismo, conforme
          exigido por parceiros de infraestrutura responsáveis pelas rampas de
          entrada e saída de moeda fiduciária (Pix).
        </p>
        <h4 className="font-semibold text-foreground mt-6 mb-2">
          3.3. Dados Técnicos e de Navegação
        </h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-600">
          <li>
            <strong>Dados de Log:</strong> endereço IP (processado
            temporariamente para segurança), tipo de dispositivo, versão do
            navegador e sistema operacional.
          </li>
        </ul>
        <p className="text-gray-600 mt-3">
          <strong>Finalidade:</strong> otimização de performance, depuração de
          erros e segurança da plataforma.
        </p>
      </>
    ),
  },
  {
    title: 'Cláusula 4 - Uso dos Dados',
    content: (
      <>
        <p className="text-gray-600 mb-4">Usamos os dados coletados para:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            <strong>Fornecimento dos serviços:</strong> manter, customizar e
            melhorar a plataforma e seus serviços, incluindo a integração com
            redes Bitcoin, Lightning Network e Liquid Network.
          </li>
          <li>
            <strong>Segurança e proteção:</strong> investigar e impedir
            atividades fraudulentas, ilícitas ou não autorizadas.
          </li>
          <li>
            <strong>Conformidade legal:</strong> cumprir obrigações legais,
            solicitações governamentais e normas de Prevenção à Lavagem de
            Dinheiro (AML).
          </li>
          <li>
            <strong>Comunicações:</strong> enviar notificações legais,
            atualizações de termos, alertas de segurança e suporte técnico por
            meios eletrônicos.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cláusula 5 - Compartilhamento com Parceiros',
    content: (
      <p className="text-gray-600">
        O Usuário declara ciência e aceitação de que o compartilhamento de dados
        pessoais e transacionais entre a Hodle e seus parceiros é estritamente
        necessário para a viabilização dos produtos escolhidos (como rampas de
        entrada e saída de moeda fiduciária via Pix). Ao utilizar esses
        serviços, você fornece dados que serão tratados pelos parceiros como
        controladores independentes.
      </p>
    ),
  },
  {
    title: 'Cláusula 6 - Dados em Blockchain',
    content: (
      <p className="text-gray-600">
        O Usuário declara estar ciente de que as transações realizadas através
        da Hodle são registradas em blockchains públicas (Bitcoin, Lightning
        Network e Liquid Network). Por design tecnológico, os dados gravados na
        blockchain (incluindo endereços de carteira e valores de transferência)
        são imutáveis, transparentes e públicos por natureza. O exercício de
        direitos de privacidade, como exclusão ou retificação, não é
        tecnicamente possível em registros on-chain.
      </p>
    ),
  },
  {
    title: 'Cláusula 7 - Hipóteses de Compartilhamento',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Podemos compartilhar dados nas seguintes circunstâncias:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            Compartilhamos endereços de carteira com provedores de
            infraestrutura e análise de blockchain para detectar e mitigar
            crimes financeiros, em caso de fundado receio de crime envolvendo
            alguma carteira ou usuário específicos.
          </li>
          <li>
            O compartilhamento de dados pessoais e transacionais é estritamente
            necessário para viabilizar a conversão de moeda fiduciária via Pix e
            demais operações oferecidas pela plataforma.
          </li>
          <li>
            A fim de prevenir danos à Empresa ou aos usuários, ou em caso de
            solicitação fundamentada por parte de algum dos nossos parceiros
            regulados.
          </li>
          <li>
            Em caso de fusão, aquisição ou venda de ativos, os dados podem ser
            transferidos sob os mesmos padrões de privacidade aqui
            estabelecidos.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cláusula 8 - Segurança dos Dados',
    content: (
      <>
        <p className="text-gray-600 mb-4">
          A Hodle utiliza protocolos de segurança rigorosos para garantir a
          integridade e o sigilo dos dados durante a comunicação com parceiros
          externos. Nossa arquitetura de segurança inclui:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            Para a maioria dos serviços, a comunicação ocorre exclusivamente
            entre o backend da Hodle e os parceiros, de forma que o navegador ou
            aplicativo do usuário não interage diretamente com esses serviços.
            Toda a transmissão é protegida por criptografia de transporte (TLS).
          </li>
          <li>
            As chaves privadas do usuário são criptografadas localmente
            utilizando o PIN do usuário e nunca são transmitidas em texto
            aberto. A Hodle não possui acesso às chaves privadas
            descriptografadas do usuário.
          </li>
          <li>
            Senhas são armazenadas utilizando funções de hash criptográficas
            irreversíveis (Argon2id), garantindo que mesmo em caso de vazamento
            de dados, as senhas originais não possam ser recuperadas.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cláusula 9 - Direitos do Usuário',
    content: (
      <p className="text-gray-600">
        Garantimos aos usuários o direito de solicitar acesso aos dados pessoais
        que a Empresa possa deter. Conforme a legislação aplicável, o usuário
        possui direito de confirmação, correção e, quando legalmente permitido,
        anonimização ou exclusão de dados desnecessários. As solicitações devem
        ser feitas para{' '}
        <a
          href="mailto:contato@hodle.com.br"
          className="text-foreground underline underline-offset-2 hover:text-gray-600"
        >
          contato@hodle.com.br
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Cláusula 10 - Direitos sob a LGPD (Lei nº 13.709/2018)',
    content: (
      <>
        <p className="text-gray-600">
          Nós realizamos o tratamento de seus dados pessoais com base nas
          seguintes hipóteses legais: (i) mediante o seu consentimento (ex: para
          comunicações de marketing); (ii) para a execução de contrato ou
          procedimentos preliminares (ex: para viabilizar o uso da plataforma);
          (iii) para o cumprimento de obrigação legal (ex: normas de KYC e
          Prevenção à Lavagem de Dinheiro de nossos parceiros); e (iv) para
          atender aos nossos interesses legítimos ou de terceiros, desde que
          seus direitos e liberdades fundamentais sejam respeitados.
        </p>
        <p className="text-gray-600 mt-4">
          Nos termos da LGPD, você possui os seguintes direitos:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
          <li>
            <strong>Confirmação e Acesso:</strong> direito de confirmar a
            existência de tratamento e acessar seus dados.
          </li>
          <li>
            <strong>Correção:</strong> direito de solicitar a correção de dados
            incompletos, inexatos ou desatualizados.
          </li>
          <li>
            <strong>Anonimização ou Eliminação:</strong> direito de solicitar a
            anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei.
          </li>
          <li>
            <strong>Portabilidade:</strong> direito de solicitar a portabilidade
            dos dados a outro fornecedor de serviço, observada a regulamentação
            da ANPD.
          </li>
          <li>
            <strong>Revogação do Consentimento:</strong> direito de revogar o
            seu consentimento a qualquer momento e ser informado sobre as
            consequências da negativa.
          </li>
        </ul>
        <p className="text-gray-600 mt-4">
          <strong>Nota sobre Blockchain:</strong> o Usuário reconhece que,
          devido à natureza imutável da tecnologia blockchain, dados registrados
          on-chain (como histórico de transações e endereços de carteira) não
          podem ser excluídos, retificados ou alterados pela Empresa, o que
          limita o exercício de certos direitos de exclusão sobre registros
          públicos e distribuídos.
        </p>
      </>
    ),
  },
  {
    title: 'Cláusula 11 - Comunicações Eletrônicas',
    content: (
      <p className="text-gray-600">
        O usuário concorda expressamente em receber todas as comunicações,
        contratos e notificações legais por meios eletrônicos, incluindo
        atualizações de termos, alertas de segurança e informes de suporte.
      </p>
    ),
  },
  {
    title: 'Cláusula 12 - Transferência de Dados',
    content: (
      <p className="text-gray-600">
        Em caso de fusão, aquisição ou venda de ativos da Hodle, os dados podem
        ser transferidos para a nova entidade sob os mesmos padrões de
        privacidade aqui estabelecidos. Esta Política pode ser atualizada
        periodicamente; o uso continuado da plataforma após atualizações
        constitui aceitação dos novos termos.
      </p>
    ),
  },
  {
    title: 'Cláusula 13 - Alterações desta Política',
    content: (
      <p className="text-gray-600">
        Se realizarmos alterações materiais a esta Política, iremos notificá-lo
        através da plataforma. No entanto, o seu uso continuado dos serviços
        reflete a sua revisão periódica desta Política e de outros termos da
        Empresa, e indica o seu consentimento com os mesmos.
      </p>
    ),
  },
  {
    title: 'Cláusula 14 - Contato',
    content: (
      <p className="text-gray-600">
        Se você tiver qualquer dúvida sobre esta Política ou sobre como
        coletamos, usamos ou compartilhamos suas informações, entre em contato
        conosco através do e-mail{' '}
        <a
          href="mailto:contato@hodle.com.br"
          className="text-foreground underline underline-offset-2 hover:text-gray-600"
        >
          contato@hodle.com.br
        </a>
        .
      </p>
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

        <p className="text-[15px] text-gray-600 leading-relaxed mb-12">
          A presente Política de Privacidade (&ldquo;Política&rdquo;) descreve os
          termos e condições sob os quais a Hodle (&ldquo;Nós&rdquo;,
          &ldquo;Empresa&rdquo;), pessoa jurídica inscrita no CNPJ sob o nº
          63.673.264/0001-26, com sede na República Federativa do Brasil, trata
          informações e dados em relação à plataforma Hodle, acessível através do
          domínio hodle.com.br.
        </p>

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
