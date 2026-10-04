import type { Metadata } from 'next'
import Link from 'next/link'
import { pageUpdatedAt } from '../../../content/pageUpdatedAt'
import {
  volumeTiers,
  assetRows,
  pricingPolicy,
} from '../../../content/pricing/pricingTables'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const siteUrl = 'https://hodle.com.br'
const updatedAt = pageUpdatedAt.precos
const formattedUpdatedAt = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
}).format(new Date(updatedAt))

const pageDescription = pricingPolicy.description

export const metadata: Metadata = {
  title: 'Preços e taxas',
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/precos`,
  },
  openGraph: {
    title: 'Preços e taxas | Hodle',
    description: pageDescription,
    url: `${siteUrl}/precos`,
    images: ['/og-image-v2.png'],
  },
}

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Preços e taxas',
  description: pageDescription,
  url: `${siteUrl}/precos`,
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Hodle',
    url: siteUrl,
  },
  dateModified: updatedAt,
}

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Taxas de serviço da Hodle',
  url: `${siteUrl}/precos`,
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Compra de cripto com Pix (on-ramp)',
        description: 'Ativos, redes e fluxos definidos na condição comercial aplicável',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        description:
          pricingPolicy.volumeScope,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Venda de cripto para Pix (off-ramp)',
        description:
          'Ativos, redes e fluxos definidos na condição comercial aplicável; API payout e Lightning têm regras específicas',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        description:
          pricingPolicy.volumeScope,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Pix para Real on-chain',
        description:
          'Liquidação de Pix recebido em Real tokenizado on-chain, sem conversão cambial',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'BRL',
        description:
          'R$ 0,75 por transação em tickets de até R$ 5.000, valor fixo que não varia com o volume. Em tickets acima de R$ 5.000, 0,10% do valor da transação no lugar dos R$ 0,75, limitado a R$ 50 por transação.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Transferência entre carteiras na mesma rede',
        description:
          'Movimentação de saldo de uma carteira da Hodle para outra carteira da Hodle, dentro da mesma rede, nas redes Polygon, Base e Solana',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: 0,
        priceCurrency: 'BRL',
        description:
          'Sem custo, desde que origem e destino estejam na mesma rede. Não confundir com transferência entre redes, que move um ativo de uma rede para outra, tem custo real e não tem preço publicado.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Setup de contas PJ nominais',
        description:
          'Habilitação da emissão de contas PJ nominais em nome do cliente, sem custo por conta criada',
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: 15000,
        priceCurrency: 'BRL',
        description: 'Valor único de implantação, cobrado uma só vez',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tratamento de contestação (MED)',
        description:
          'Análise e resposta a contestação de Pix aberta pelo pagador',
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: 10,
        priceCurrency: 'BRL',
        unitText: 'contestação',
        description: 'R$ 10,00 por contestação tratada, qualquer que seja o resultado',
      },
    },
  ],
}

export default function PrecosPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <article className="max-w-[720px] mx-auto px-6 py-20 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Preços
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Preços e Taxas
          </h1>
          <p className="text-sm text-gray-400">
            Atualizado em {formattedUpdatedAt}.
          </p>
        </div>

        <div className="text-[15px] text-gray-600 leading-relaxed space-y-6">
          <p>
            Esta página reúne a tabela comercial e orienta como conferir o
            preço de cada operação. API, Lightning e wallet podem ter regras
            próprias. Confira o fluxo habilitado, a condição contratada e a
            cotação apresentada antes de confirmar. Se a cotação divergir do
            contrato, esclareça a diferença com a Hodle antes de executar.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Tabela comercial por volume: on-ramp e off-ramp
          </h2>

          <p>{pricingPolicy.volumeScope}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    Volume mensal
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    Taxa de serviço
                  </th>
                </tr>
              </thead>
              <tbody>
                {volumeTiers.map((tier) => (
                  <tr key={tier.volume} className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-foreground">{tier.volume}</td>
                    <td className="py-3">{tier.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>Quando sua condição comercial adota esta tabela:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              Volume é a soma, em reais, das operações abrangidas pela condição
              comercial, nas duas direções, pelo valor bruto liquidado no mês.
              Operações em Bitcoin incluídas no contrato entram pelo valor em
              reais da liquidação.
            </li>
            <li>
              A faixa vale para o mês inteiro e é definida pelo volume do mês
              fechado anterior. Ela não muda no meio do mês: o volume de agosto
              define a taxa de setembro. A aplicação da faixa depende de a conta
              e o fluxo estarem enquadrados nessa condição comercial.
            </li>
            <li>
              A taxa da faixa é aplicada sobre todo o volume do mês, não em
              fatias.
            </li>
            <li>
              Em cada operação abrangida pela tabela, a taxa é o maior
              valor entre o percentual da faixa e <strong>R$ 0,75</strong>. Esse
              mínimo vale só para essas duas operações — não se soma ao Pix para
              Real on-chain, ao setup nem à contestação.
            </li>
          </ul>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Como calcular a taxa de serviço
          </h2>

          <p>
            Exemplos ilustrativos para operações abrangidas pela tabela comercial,
            não cotações: na faixa de 2%, uma
            operação de R$ 1.000 tem R$ 20 de taxa de serviço. Em uma operação de
            R$ 20, o percentual seria R$ 0,40, mas o mínimo da tabela leva a taxa
            a R$ 0,75. O mínimo substitui o resultado menor; não é somado a ele.
            Esses exemplos não afirmam que qualquer fluxo aceite os tickets usados.
          </p>

          <p>
            A taxa de serviço isolada não informa quanto USDT ou USDC será
            entregue ou debitado. Confira a cotação e o resultado da operação.
            Pela API, <code>/api/quote</code> é uma simulação indicativa, sem
            reserva de câmbio. O payout possui uma cotação própria, vinculada ao
            beneficiário, cujo <code>quoteId</code> pode ser usado na execução.
            Verifique se a condição aplicada à sua conta corresponde ao contrato
            antes de confirmar. Consulte a{' '}
            <a
              href="https://docs.hodle.com.br/docs/quote"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              referência de cotação
            </a>{' '}
            e a{' '}
            <a
              href="https://docs.hodle.com.br/docs/wallet-payout-beneficiary"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              confirmação de beneficiário do payout
            </a>.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Condição negociada
          </h2>

          <p>
            A tabela acima é uma referência comercial. A proposta e o contrato
            definem quais fluxos, ativos e condições se aplicam à sua integração.
            Uma condição específica pode ficar acima ou abaixo dessas faixas.
          </p>

          <p>
            A documentação de um endpoint pode descrever uma tarifa própria.
            Confirme sua aplicação à conta e compare com o contrato e com o
            valor apresentado na operação.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Payout por API e Lightning para Pix
          </h2>

          <p>{pricingPolicy.payout}</p>
          <p>
            Consulte a{' '}
            <a
              href="https://docs.hodle.com.br/docs/wallet-payout#fees"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              documentação de taxas do payout
            </a>.
          </p>
          <p>{pricingPolicy.lightning}</p>
          <p>
            Consulte a{' '}
            <a
              href="https://docs.hodle.com.br/docs/lightning-invoice#fees"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              documentação de taxas da invoice Lightning
            </a>. Referências revisadas em {formattedUpdatedAt}.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Ativos e redes
          </h2>

          <p>
            O catálogo abaixo não determina a tarifa de cada combinação. Ativo,
            rede, operação e condição da conta podem alterar a precificação.
            O Real tokenizado — BRLA e BRS — tem fluxos próprios; a referência
            comercial de Pix para Real on-chain está descrita adiante.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    Ativo
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    Redes suportadas
                  </th>
                </tr>
              </thead>
              <tbody>
                {assetRows.map((row) => (
                  <tr key={row.asset} className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-foreground">{row.asset}</td>
                    <td className="py-3 text-gray-500">{row.networks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Esta é a abrangência do catálogo, não uma matriz de suporte de cada
            endpoint. Uma rede disponível para compra ou transferência pode não
            estar disponível para payout. Confira o ativo, a rede e a operação
            na documentação e nas opções habilitadas para a sua conta.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Transferência entre carteiras
          </h2>

          <p>
            Mover saldo de uma carteira da Hodle para outra carteira da Hodle,{' '}
            <strong>dentro da mesma rede</strong>, é{' '}
            <strong>sem custo</strong>. Vale nas redes Polygon, Base e Solana.
            Não há taxa de serviço nem taxa de rede repassada: em Polygon e Base
            o gas é patrocinado pela Hodle, e a operação não passa por conversão.
          </p>

          <p>
            Isso não é a mesma coisa que transferência entre redes. Sair de uma
            rede e chegar em outra — de Polygon para Solana, por exemplo —
            envolve ponte ou conversão, tem custo real e não tem preço
            publicado. Está na lista do fim desta página. Se a operação muda a
            rede em que o saldo está, ela não é a transferência sem custo
            descrita aqui.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Pix para Real on-chain
          </h2>

          <p>
            Receber um Pix e liquidá-lo em Real tokenizado on-chain não envolve
            conversão cambial, e por isso não é cobrado em percentual:{' '}
            <strong>R$ 0,75 por transação</strong> em tickets de até R$ 5.000. É
            um valor fixo, que não varia com o volume. O Real tokenizado é
            entregue como BRLA na rede Polygon ou como BRS na rede Solana.
          </p>

          <p>
            Este rail tem preço próprio: a tabela de volume de 2% a 0,5% não se
            aplica a ele. BRLA e BRS não entram na tabela de ativos acima porque
            não passam por conversão cambial.
          </p>

          <p>
            Em tickets acima de R$ 5.000, a tarifa passa a ser 0,10% do valor da
            transação <strong>no lugar</strong> dos R$ 0,75 — os dois não se
            somam — e a tarifa total de uma transação nunca passa de{' '}
            <strong>R$ 50,00</strong>.
          </p>

          <p>
            Esse rail é contratado, não self-serve: ele pressupõe integração via
            API e passa pela análise comercial antes de ser habilitado.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Contas PJ nominais
          </h2>

          <p>
            Clientes que precisam emitir contas PJ nominais em nome próprio —
            uma conta por cliente final, com CNPJ e titularidade separados —
            pagam um valor único de implantação de{' '}
            <strong>R$ 15.000</strong>. O valor cobre a habilitação do recurso,
            e não há custo por conta criada depois disso: a quantidade de contas
            emitidas é livre.
          </p>

          <p>
            Quem não vai emitir contas nominais não paga esse valor. Não existe
            taxa de setup para usar o on-ramp, o off-ramp ou o Pix para Real
            on-chain.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            Contestações
          </h2>

          <p>
            Cada contestação de Pix aberta pelo pagador — o MED, mecanismo
            especial de devolução do Banco Central — custa{' '}
            <strong>R$ 10,00</strong> por ocorrência tratada, independentemente
            do resultado da análise. O valor cobre o levantamento das evidências
            de entrega do ativo e a montagem da resposta ao banco do pagador.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            O que está incluído
          </h2>

          <p>
            Nas combinações de ativo e rede suportadas pelos endpoints de
            transferência e payout em Polygon, Base e Solana, a taxa de rede é
            patrocinada pela Hodle. O cliente não precisa manter a moeda nativa
            dessas redes apenas para pagar essa taxa. Esse benefício não elimina
            a taxa de serviço nem amplia a cobertura de redes do endpoint.
          </p>

          <p>
            Confira as combinações aceitas nas referências de{' '}
            <a
              href="https://docs.hodle.com.br/docs/wallet-transfer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              transferência
            </a>{' '}
            e{' '}
            <a
              href="https://docs.hodle.com.br/docs/wallet-payout"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              payout
            </a>. A disponibilidade continua sujeita às permissões da conta.
          </p>

          <h2 className={`${heading} text-xl font-medium text-foreground mb-4`}>
            O que não está nesta página
          </h2>

          <p>
            Duas categorias de taxa não estão publicadas aqui porque dependem do
            par de redes e do modelo de negócio do cliente, e por isso não podem
            ser reduzidas a um número único:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              Taxas de transferência entre redes — mover um ativo de uma rede
              para outra. Transferência entre carteiras dentro da Hodle, na
              mesma rede, é sem custo e está publicada acima.
            </li>
            <li>Taxas de conversão entre ativos.</li>
          </ul>

          <p>
            Para esses casos, o canal correto é conversar diretamente com o time
            comercial pelo{' '}
            <a
              href="https://api.whatsapp.com/send?phone=5511960000445"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              WhatsApp de vendas
            </a>
            , que avalia o volume esperado e retorna uma proposta específica.
            Não publicamos aqui nenhum número para essas duas categorias —
            qualquer valor citado para elas fora deste canal não deve ser
            considerado oficial.
          </p>

          <p>
            Ao comparar preços, identifique a operação, a conta e a condição
            aplicável. As faixas por volume e seu mínimo valem para operações
            abrangidas por essa tabela comercial; não são a tarifa universal de
            API, Lightning ou wallet. Use a documentação específica e a cotação
            da operação para conferir taxa e total. A gratuidade de transferência
            entre carteiras Hodle na mesma rede não se estende a transferências
            entre redes. O preço de Pix para Real on-chain também depende da faixa
            de ticket descrita nesta página.
          </p>

          <p className="text-sm text-gray-400 pt-4 border-t border-gray-200">
            Atualizado em {formattedUpdatedAt}.
          </p>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              FAQ
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5511960000445"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Falar com vendas
            </a>
            <Link
              href="/glossario"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Glossário
            </Link>
          </nav>
        </div>
      </article>
    </div>
  )
}
