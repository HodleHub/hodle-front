import type { ReactElement } from 'react'
import { brsCopy } from './brsCopy'
import { brsDepositExample } from './brsDepositExample'

const snippet: string = [
  'curl --request POST \\',
  `  --url ${brsDepositExample.endpoint} \\`,
  '  --header "Authorization: Bearer $HODLE_API_KEY" \\',
  '  --header "Content-Type: application/json" \\',
  `  --data '${JSON.stringify(brsDepositExample.body, null, 2)}'`,
].join('\n')

type BrsCodeBlockProps = { comment?: string }

/** Shows the documented purchase contract without relying on an unpublished SDK. */
export const BrsCodeBlock = ({ comment = brsCopy.pt.codeComment }: BrsCodeBlockProps): ReactElement => (
  <div className="min-w-0 bg-[#111] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-800/40">
    <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-white/10 text-xs text-white/70">
      <span>{comment}</span><span>cURL</span>
    </div>
    <pre className="p-5 font-mono text-[12px] leading-6 overflow-x-auto text-gray-300"><code>{snippet}</code></pre>
  </div>
)
