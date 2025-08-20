
# Beauty AI Starter Full MVP (mock)

This starter includes pages and API routes for a Beauty & Anti-Aging AI Agent MVP.

## Run locally
- Install: npm install
- Dev: npm run dev
- Env: see .env.example

## Pages
- / - landing
- /ads - Ads Dashboard (SWR refresh)
- /scan - Upload photo and scan (mock)
- /offer-builder - create offer templates
- /reports/weekly, /reports/custom - reports pages

## API endpoints (mock)
- GET /api/ads
- POST /api/webhook/ads
- POST /api/webhook/crm
- POST /api/scan
- GET  /api/cron/ads-sync?token=...

## .env.example provided
