
import { NextResponse } from 'next/server';
import crypto from 'crypto';
const SECRET = process.env.WEBHOOK_HMAC_SECRET || 'dev_secret';
const TOKEN = process.env.WEBHOOK_TOKEN || 'dev_token';
export async function POST(req: Request){
  const token = req.headers.get('x-webhook-token');
  if(token !== TOKEN) return NextResponse.json({ ok:false, error:'invalid_token' }, { status:401 });
  const raw = await req.text();
  const sig = req.headers.get('x-signature') || '';
  const expected = 'sha256=' + crypto.createHmac('sha256', SECRET).update(raw).digest('hex');
  if(sig !== expected) return NextResponse.json({ ok:false, error:'invalid_hmac' }, { status:401 });
  // Mock append
  return NextResponse.json({ ok:true, received: JSON.parse(raw) });
}
