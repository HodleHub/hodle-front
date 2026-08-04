const sitemapUrl = 'https://hodle.com.br/sitemap.xml'
const indexNowUrl = 'https://api.indexnow.org/indexnow'
const host = 'hodle.com.br'
const key = '96daa2d94429ab41cda710b2bf8174cf'
const keyLocation = `https://${host}/${key}.txt`

const readSitemapUrls = (xml) =>
  [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1])

const main = async () => {
  const sitemapResponse = await fetch(sitemapUrl)

  if (!sitemapResponse.ok) {
    throw new Error(
      `Sitemap request failed: ${sitemapResponse.status} ${sitemapResponse.statusText}`,
    )
  }

  const urls = readSitemapUrls(await sitemapResponse.text())

  if (urls.length === 0) {
    throw new Error('Sitemap did not contain any URLs')
  }

  const response = await fetch(indexNowUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  })

  const responseBody = await response.text()

  if (!response.ok) {
    throw new Error(
      `IndexNow request failed: ${response.status} ${response.statusText}${responseBody ? ` — ${responseBody}` : ''}`,
    )
  }

  console.log(`IndexNow response: ${response.status} ${response.statusText}`)
  console.log(`Submitted ${urls.length} URLs from ${sitemapUrl}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
