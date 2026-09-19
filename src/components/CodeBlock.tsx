import type { ReactElement } from 'react'
import Link from 'next/link'
import { sandboxQuote } from '../content/sandboxQuote'

/** Displays a documented sandbox request without executing it in the browser. */
export const CodeBlock = (): ReactElement => (
  <figure className="min-w-0 overflow-hidden rounded-2xl border border-gray-800 bg-[#111] shadow-lg">
    <figcaption className="border-b border-white/10 px-5 py-4 text-xs text-gray-300">
      {sandboxQuote.label}
    </figcaption>
    <pre className="overflow-x-auto p-5 text-xs leading-7 text-gray-200 sm:p-7">
      <code>{sandboxQuote.snippet}</code>
    </pre>
    <p className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-gray-300">
      Requer cadastro e chave de sandbox. A cotação é indicativa e não trava o câmbio.{' '}
      <Link
        href="https://docs.hodle.com.br/docs/quote"
        className="text-white underline underline-offset-4"
      >
        Ver contrato da API
      </Link>
    </p>
  </figure>
)
