
import { NextResponse } from 'next/server';
export async function GET(req: Request){
  const token = new URL(req.url).searchParams.get('token') || '';
  if(token !== process.env.CRON_TOKEN) return NextResponse.json({ ok:false, error:'invalid_token' }, { status:401 });
  // Mock sync: in production call FB/TikTok APIs and append to sheet
  return NextResponse.json({ ok:true, message:'mock sync complete' });
}
