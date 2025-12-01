# Deploying to Render

This guide will help you deploy your portfolio website to Render as a static site.

## Prerequisites

- A [Render account](https://render.com) (free tier available)
- Your code pushed to a GitHub repository
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Create a New Static Site on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **"New +"** → **"Static Site"**
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**
   - In the Render dashboard, go to your static site
   - Navigate to **"Environment"** tab
   - Add the following environment variable:
     - **Key**: `GEMINI_API_KEY`
     - **Value**: Your Gemini API key from Google AI Studio

4. **Deploy**
   - Click **"Create Static Site"**
   - Render will automatically build and deploy your site
   - Your site will be live at: `https://your-site-name.onrender.com`

### Option 2: Manual Configuration

If you prefer not to use `render.yaml`:

1. **Create New Static Site**
   - Go to Render Dashboard → **"New +"** → **"Static Site"**
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

3. **Add Environment Variables**
   - Add `GEMINI_API_KEY` with your API key value

4. **Deploy**
   - Click **"Create Static Site"**

## Post-Deployment

### Verify Deployment
- Visit your Render URL
- Test all features, especially the AI chat functionality
- Check browser console for any errors

### Custom Domain (Optional)
1. Go to your static site settings on Render
2. Navigate to **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Follow the instructions to configure your DNS settings

### Automatic Deployments
Render automatically deploys your site when you push to your main branch. To disable this:
1. Go to **"Settings"** → **"Build & Deploy"**
2. Toggle **"Auto-Deploy"** off

## Environment Variables

Your app requires the following environment variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### API Key Not Working
- Ensure `GEMINI_API_KEY` is set in Render environment variables
- Check that the variable name matches what's in `vite.config.ts`
- Redeploy after adding environment variables

### 404 Errors on Routes
- Render static sites handle routing automatically for SPAs
- If issues persist, check your Vite configuration

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` is set to `'/'`
- Check the browser console for CORS or path errors

## Monitoring

- View deployment logs in Render dashboard
- Monitor site performance in the **"Metrics"** tab
- Set up notifications for deployment failures

## Costs

- Render offers a **free tier** for static sites
- Free tier includes:
  - 100 GB bandwidth/month
  - Automatic SSL certificates
  - Global CDN
  - Continuous deployment from Git

## Support

For issues specific to Render, check:
- [Render Documentation](https://render.com/docs/static-sites)
- [Render Community](https://community.render.com/)
- [Render Status](https://status.render.com/)
