
import { NextResponse } from 'next/server';

export async function GET(req: Request){
  // Mock: return sample aggregated data. Replace with Google Sheets logic.
  const items = [{
    id:'AD-1', campaign:'Ulthera', platform:'TikTok', ad_name:'UL-A1',
    spend_thb:1200, impressions:48000, clicks:840, leads:24, bookings:5, revenue_thb:29500, date:'2025-08-20'
  }];
  return NextResponse.json({ ok:true, items, options:{ platforms:['TikTok','Facebook'], campaigns:['Ulthera'] } });
}
