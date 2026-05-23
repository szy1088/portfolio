Sanity + Vercel deployment notes

1. Sanity (Studio & dataset)
- Create a project at https://www.sanity.io/manage and note the projectId and dataset.
- Add those values to the repository secrets or .env as NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.
- To run studio locally: cd studio && npm install && npm run start
- To deploy studio: follow Sanity hosting docs or host as a Vercel project under /studio.

2. Vercel
- Create a Vercel account and import the GitHub repository.
- Set environment variables in Vercel for NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN (for preview), CONTACT_WEBHOOK_URL (optional), and any analytics keys.
- Vercel will auto-deploy preview and production builds on push.

3. Contact form
- Configure CONTACT_WEBHOOK_URL to point to a webhook (Zapier, IFTTT, or your email service) or implement SMTP in the /app/api/contact route.

4. Notes
- This repo includes Sanity schema files under /studio/schemas. You still need to create the dataset in Sanity and import the schemas or run `sanity deploy`.
