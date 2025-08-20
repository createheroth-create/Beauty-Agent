
'use client';
import { useState } from 'react';
export default function OfferBuilder(){
  const [title, setTitle] = useState('Ulthera Prime');
  const [price, setPrice] = useState(15000);
  return (<main style={{padding:20}}>
    <h1>Offer Builder</h1>
    <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} /></label>
    <label>Price<input value={price} onChange={e=>setPrice(Number(e.target.value))} /></label>
    <h3>Preview</h3>
    <pre>{`Package: ${title}\nPrice: ฿${price}`}</pre>
  </main>);
}
