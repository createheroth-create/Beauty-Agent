
'use client';
import { useState } from 'react';
export default function ScanPage(){
  const [file, setFile] = useState<File|null>(null);
  const [report, setReport] = useState(null);
  async function submit(){
    if(!file) return alert('upload');
    const fd = new FormData(); fd.append('photo', file);
    const res = await fetch('/api/scan', { method:'POST', body: fd });
    const json = await res.json();
    setReport(json);
  }
  return (<main style={{padding:20}}>
    <h1>Scan</h1>
    <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?e.target.files[0]:null)} />
    <button onClick={submit}>Scan</button>
    <pre>{JSON.stringify(report,null,2)}</pre>
  </main>);
}
