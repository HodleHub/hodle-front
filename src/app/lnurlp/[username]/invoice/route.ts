import { type NextRequest, NextResponse } from 'next/server'

const LNURL_BACKEND = 'https://lnurl.hodle.com.br'

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> },
): Promise<NextResponse> => {
  const { username } = await params
  const search = request.nextUrl.search

  const response = await fetch(
    `${LNURL_BACKEND}/lnurlp/${username}/invoice${search}`,
  )
  const data = await response.json()

  return NextResponse.json(data, { status: response.status })
}
