const typography = [
  'text-[15px] leading-[1.75] text-gray-600',

  '[&_p]:mb-6',

  '[&_h2]:text-[15px] [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:leading-[1.5] [&_h2]:mt-11 [&_h2]:mb-4 [&_h2]:scroll-mt-24',
  '[&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:scroll-mt-24',
  '[&_h4]:text-[15px] [&_h4]:font-medium [&_h4]:text-foreground [&_h4]:mt-8 [&_h4]:mb-3',

  '[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-gray-300 hover:[&_a]:decoration-foreground',
  '[&_strong]:font-semibold [&_strong]:text-foreground',

  '[&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:list-none',
  '[&_ul>li]:relative [&_ul>li]:pl-5',
  '[&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.68em] [&_ul>li]:before:h-1 [&_ul>li]:before:w-1 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-gray-300',
  '[&_ol]:mb-6 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5',
  '[&_ol>li]:pl-1 [&_ol>li]:marker:text-gray-400',

  '[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-foreground [&_blockquote]:pl-5 [&_blockquote]:text-foreground [&_blockquote]:text-[17px] [&_blockquote]:leading-[1.6]',
  '[&_blockquote>p]:mb-0',

  '[&_code]:font-[family-name:var(--font-geist-mono)] [&_code]:text-[13px] [&_code]:text-foreground [&_code]:bg-gray-100 [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5',
  '[&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-[#0a0a0a] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-[1.7]',
  '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-gray-200',

  '[&_img]:my-8 [&_img]:w-full [&_img]:rounded-xl',
  '[&_hr]:my-10 [&_hr]:border-gray-200',

  '[&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[13.5px]',
  '[&_th]:border-b [&_th]:border-gray-200 [&_th]:py-2.5 [&_th]:pr-4 [&_th]:text-left [&_th]:font-medium [&_th]:text-foreground',
  '[&_td]:border-b [&_td]:border-gray-100 [&_td]:py-2.5 [&_td]:pr-4 [&_td]:align-top',

  '[&>*:last-child]:mb-0',
].join(' ')

/**
 * The reading column. Everything the MDX pipeline emits is styled here so an
 * article body stays plain markdown.
 */
export default function ArticleBody({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={typography}>{children}</div>
}
