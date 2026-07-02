import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME)

  if (!signature || !secret) {
    return NextResponse.json({ message: 'Missing signature or secret' }, { status: 401 })
  }

  const body = await req.text()

  if (!(await isValidSignature(body, signature, secret))) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
  }

  const { _type } = JSON.parse(body)

  if (_type === 'machines' || _type === 'solutions') {
    revalidateTag(_type, '')
  }

  return NextResponse.json({ message: `Revalidated ${_type}` })
}
