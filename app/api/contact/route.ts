import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: 'Contact webhook not configured' }, { status: 501 });
  }
  await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  return NextResponse.json({ ok: true });
}
