import AnimatedSection from '../AnimatedSection'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const USE_CASES = [
  {
    title: 'Contas em BRL com liquidação on-chain instantânea',
    desc: 'Saldo em Real que se move na velocidade da blockchain, sem D+1.',
  },
  {
    title: 'Contas com rendimento automático',
    desc: 'O saldo em BRS parado rende sozinho, sem produto financeiro à parte.',
  },
  {
    title: 'Folha de pagamento e pagamentos recorrentes',
    desc: 'Salários e assinaturas liquidados automaticamente, no dia certo.',
  },
  {
    title: 'Escrow programável e pagamentos por marcos',
    desc: 'Fundos retidos por contrato até a entrega ser confirmada.',
  },
  {
    title: 'Tesouraria em BRS para empresas globais',
    desc: 'Caixa em Real acessível de qualquer lugar, 24 horas por dia.',
  },
  {
    title: 'FX automatizado entre BRS, USDC e USDT',
    desc: 'Câmbio programático entre moedas digitais, liquidado em segundos.',
  },
] as const

export const BrsUseCases = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.05}>
          <div className="max-w-[680px] mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              Real programável
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15]`}
            >
              O que dá para construir com o Real programável
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {USE_CASES.map((useCase, i) => (
            <AnimatedSection
              key={useCase.title}
              delay={(i % 2) * 0.08}
              direction="up"
            >
              <div className="border-t border-gray-200 py-6 flex gap-5">
                <p
                  className={`${heading} text-sm font-semibold text-[#009c3b] shrink-0`}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p
            className={`${heading} text-center text-xl lg:text-2xl font-light text-foreground mt-14 max-w-[640px] mx-auto leading-relaxed text-pretty`}
          >
            Não é só colocar o Real on-chain.{' '}
            <span className="text-[#009c3b]">
              É transformar dinheiro em software.
            </span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
