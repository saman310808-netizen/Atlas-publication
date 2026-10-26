# Atlas editorial dashboard

The editor lives at /admin/ once this branch is merged and deployed.

## One-time authentication setup (site owner)
This site uses Decap CMS with the **GitHub** backend, not Netlify Git Gateway.
GitHub OAuth authentication needs to be configured in Netlify:
1. In GitHub, go to Settings → Developer settings → OAuth Apps → New OAuth App.
2. Set the homepage URL to the production Netlify site URL.
3. Set the callback URL to https://api.netlify.com/auth/done.
4. Copy the OAuth Client ID and create a client secret. Never commit the secret to GitHub.
5. In Netlify, open your site → Project configuration → Access & security → OAuth → Authentication providers. Install the GitHub provider with the Client ID and secret.
6. Grant editors GitHub collaborator **write** access to this repository. They must accept the invite and sign into /admin/ with GitHub.
7. Use /admin/ → Articles → All Articles or Editorial Board → Team Profiles.
8. Save drafts and publish after review using Decap's Editorial Workflow.

Changes made through the CMS create branches/pull requests until published. The website reads src/content/articles.json and src/content/editorial-board.json at build time.

For photographs, use the CMS image uploader, which saves images in public/uploads.
