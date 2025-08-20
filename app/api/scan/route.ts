
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request){
  const form = await req.formData();
  const file = form.get('photo') as any;
  if(!file) return NextResponse.json({ ok:false, error:'no_file' }, { status:400 });
  // Save temp
  const buf = Buffer.from(await file.arrayBuffer());
  const tmp = path.join(process.cwd(), 'tmp');
  if(!fs.existsSync(tmp)) fs.mkdirSync(tmp);
  const filename = 'scan-' + Date.now() + '.jpg';
  fs.writeFileSync(path.join(tmp, filename), buf);
  // Mock analysis result
  const result = { ok:true, report_url:'/reports/sample-report.pdf', findings:[{name:'sagging', score:0.7}], recommended:['Ulthera'] };
  return NextResponse.json(result);
}
