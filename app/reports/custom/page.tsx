
'use client';
import { useState } from 'react';
export default function CustomReport(){
  const [from,setFrom]=useState('2025-01-01');
  const [to,setTo]=useState('2025-12-31');
  async function gen(){ const res = await fetch(`/api/ads?from=${from}&to=${to}`); const j=await res.json(); alert(JSON.stringify(j,null,2)); }
  return (<main style={{padding:20}}><h1>Custom Report</h1>
    <label>From<input value={from} onChange={e=>setFrom(e.target.value)} /></label>
    <label>To<input value={to} onChange={e=>setTo(e.target.value)} /></label>
    <button onClick={gen}>Generate</button>
  </main>);
}
