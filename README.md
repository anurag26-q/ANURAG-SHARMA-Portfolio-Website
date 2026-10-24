# Anurag Sharma — Portfolio (Blueprint edition)

Personal portfolio of **Anurag Sharma, AI/ML Engineer**, designed as an engineering drawing set:
title sheet, specification, bill of materials (skills), animated system drawings of production
projects, an archive of earlier builds, revision history (experience) and a sign-off sheet (contact).
Includes **JARVIS**, a Gemini-powered assistant that answers questions about Anurag's work.

Built with React 19 + Vite + TypeScript. No CSS framework — all styling is in `index.css`.

## Edit content
Everything (profile, skills, jobs, system diagrams, archive) lives in **`data.ts`**.
System diagrams are drawn from compact item lists — see the comment at the top of `systems`.
The resume download is `public/resume.pdf`.

## Run locally
```bash
npm install
echo "GEMINI_API_KEY=your-key" > .env.local   # optional, for JARVIS
npm run dev
```

## Deploy
See [DEPLOYMENT.md](DEPLOYMENT.md) (Render static site).
