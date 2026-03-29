import { type NextRequest, NextResponse } from 'next/server'

const API_URL = 'https://api.hodle.com.br'

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> },
): Promise<NextResponse> => {
  const { username } = await params
  const amount = request.nextUrl.searchParams.get('amount')

  const url = `${API_URL}/lnurlp/${username}/callback?amount=${amount}`
  const response = await fetch(url)
  const data = await response.json()

  return NextResponse.json(data, { status: response.status })
}
