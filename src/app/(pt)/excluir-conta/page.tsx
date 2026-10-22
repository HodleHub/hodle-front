import type { Metadata } from 'next'
import Link from 'next/link'

const heading = 'font-[family-name:var(--font-space-grotesk)]'
const SUPPORT_EMAIL = 'contato@inbox.hodle.com.br'
const linkClass =
  'text-foreground underline underline-offset-2 hover:text-gray-600'

export const metadata: Metadata = {
  title: 'Excluir sua conta',
  description:
    'Como excluir sua conta Hodle pelo app ou por e-mail, quais dados são apagados e quais guardamos por obrigação legal.',
  alternates: {
    canonical: 'https://hodle.com.br/excluir-conta',
  },
  openGraph: {
    title: 'Excluir sua conta | Hodle',
    description:
      'Como excluir sua conta Hodle e o que acontece com seus dados.',
    url: 'https://hodle.com.br/excluir-conta',
    images: ['/og-image-v2.png'],
  },
}

const sections = [
  {
    title: 'Pelo app Hodle',
    content: (
      <ol className="list-decimal pl-6 space-y-1 text-gray-600">
        <li>Abra o app e entre na sua conta.</li>
        <li>
          Toque em <strong>Conta</strong> e depois em{' '}
          <strong>Excluir conta</strong>.
        </li>
        <li>
          Digite <strong>EXCLUIR</strong> e toque em{' '}
          <strong>Excluir minha conta</strong>.
        </li>
      </ol>
    ),
  },
  {
    title: 'Sem o app, por e-mail',
    content: (
      <p className="text-gray-600">
        Envie um e-mail para{' '}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Excluir%20minha%20conta`} className={linkClass}>
          {SUPPORT_EMAIL}
        </a>{' '}
        a partir do e-mail cadastrado na Hodle, com o assunto &ldquo;Excluir
        minha conta&rdquo;. Confirmamos sua identidade e concluímos o pedido em
        até 15 dias.
      </p>
    ),
  },
  {
    title: 'Antes de excluir',
    content: (
      <p className="text-gray-600">
        A carteira do app é sua, com chaves que só você controla. Transfira seu
        saldo antes de excluir a conta e guarde sua frase de recuperação, se
        quiser continuar usando a carteira em outro app. Não conseguimos
        excluir a conta enquanto houver um depósito, saque, estorno ou troca em
        andamento.
      </p>
    ),
  },
  {
    title: 'O que apagamos',
    content: (
      <ul className="list-disc pl-6 space-y-1 text-gray-600">
        <li>Nome, e-mail, telefone e demais dados do seu perfil.</li>
        <li>Senha, passkeys e todas as sessões abertas.</li>
        <li>Seu acesso à conta, que deixa de funcionar na hora.</li>
      </ul>
    ),
  },
  {
    title: 'O que guardamos por obrigação legal',
    content: (
      <p className="text-gray-600">
        Os registros de verificação de identidade (KYC) e o histórico de
        transações ficam guardados por 5 anos, como exige a Lei nº 9.613/1998
        (prevenção à lavagem de dinheiro). Eles não são usados para nenhuma
        outra finalidade. Mais detalhes na{' '}
        <Link href="/privacidade" className={linkClass}>
          Política de Privacidade
        </Link>
        .
      </p>
    ),
  },
]

export default function DeleteAccountPage() {
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
            Excluir sua conta
          </h1>
          <p className="text-sm text-gray-400">
            Última atualização: outubro de 2026
          </p>
        </div>

        <p className="text-[15px] text-gray-600 leading-relaxed mb-12">
          Você pode excluir sua conta Hodle a qualquer momento, pelo app ou por
          e-mail.
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
