# Sample NextJS

Built with Next.js and TailwindCSS

## Getting Started

1. Clone this repository. 
2. Install dependencies by running `yarn` in the terminal. (You must have Node.js and Yarn installed)
3. Run `yarn run dev` to run the Next.js app.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy

We use GitHub Action to deploy this Next app on Vercel. 
You need to add these variables as GitHub Secret to this repository.

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

You need to make a Vercel account to get a token. Use a personal account (not a team one).
Follow the guideline [here](https://vercel.com/guides/how-do-i-use-a-vercel-api-access-token).

To get Org and Project ID, you must install [Vercel CLI](https://vercel.com/docs/cli) on your computer and use it to create a new Vercel project. Follow the instructions [here](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel#configuring-github-actions-for-vercel)

The `deploy.yml` will deploy the app on Vercel when on every push to the `main` branch.

The `preview.yml` will build a preview build on Vercel for every pull request  targeting the `main` branch