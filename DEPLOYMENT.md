# Deploying to Render

This repo already contains `render.yaml` (static site, `npm install && npm run build`, publishes `dist`).

## First-time setup
1. Go to https://dashboard.render.com → **New +** → **Static Site** (or **Blueprint**, which reads `render.yaml`).
2. Connect the GitHub repo `anurag26-q/ANURAG-SHARMA-Portfolio-Website`, branch `main`.
3. Settings (if not using the Blueprint option):
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Environment** tab → add:
   ```
   GEMINI_API_KEY=<a NEW key from https://aistudio.google.com/apikey>
   GEMINI_MODEL=gemini-2.5-flash
   NODE_VERSION=20
   ```
5. Click **Create Static Site**. Every push to `main` redeploys automatically.

## Security note
Never commit `.env` files (they are now in `.gitignore`). Because this is a static site, the Gemini
key is embedded in the browser bundle — restrict it in Google Cloud Console
(APIs & Services → Credentials → *Application restrictions: HTTP referrers* → your Render URL)
so it can only be used from your site.

If the key is missing, the site still works — JARVIS just shows a "can't reach my model" message.
