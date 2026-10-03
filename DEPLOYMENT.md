# Deployment guide

## 1. Local check

Use Node.js 24.

```bash
npm install
npm run typecheck
npm run build
```

## 2. GitHub

Create an empty GitHub repository, then from this project folder:

```bash
git init
git add .
git commit -m "Initial Appnix IT website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

Do not commit `.env.local`. It is already ignored.

## 3. Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: **Next.js** (normally auto-detected).
3. Node.js runtime: the repository pins **24.x** through `package.json`.
4. Add environment variables before production deployment.
5. Deploy. No `vercel.json` is required for this Next.js app.

## 4. Required production environment

Set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SHOW_DEV_CONTENT=false
```

For the contact form, configure one delivery method:

### Resend

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

### Or webhook

```text
CONTACT_WEBHOOK_URL=
```

Optional:

```text
NEXT_PUBLIC_GA_ID=
TURNSTILE_SECRET_KEY=
```

Without Resend or a webhook, the contact form intentionally returns a temporary-unavailable response in production.

## 5. Before public launch

Replace placeholder branding/content called out in `README.md`, especially the logo/icons, contact/social information, statistics, draft insights, and legal copy.
