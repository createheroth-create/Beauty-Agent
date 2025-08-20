
'use client';
import useSWR from 'swr';
const fetcher = (url:string)=>fetch(url).then(r=>r.json());
export default function AdsPage(){
  const { data } = useSWR('/api/ads', fetcher, { refreshInterval: 60000 });
  return (
    <main style={{padding:20}}>
      <h1>Ads Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
