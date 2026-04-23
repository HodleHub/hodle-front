import { NextResponse } from 'next/server'

const API_URL = 'https://api.hodle.com.br'

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ username: string }> },
): Promise<NextResponse> => {
  const { username } = await params

  const response = await fetch(`${API_URL}/.well-known/lnurlp/${username}`)
  const data = await response.json()

  return NextResponse.json(data, { status: response.status })
}
