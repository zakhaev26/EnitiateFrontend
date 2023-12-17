# NextJS Frontend
- Made with NextJS 14 App Directory Structure
- Animations using by Framer Motion
- Google OAuth Sign-In and LogOut using Firebase Auth SDK 
- Utilizes Server Side Components (SSR)
- Zustand User State Management [ On the process , although firebase provides custom hooks to access user properites , but <a href= "./zustand/store/store.js">here</a>
 is a full configured example of a zustand store implementing a minimalistic approach,just in case]
- Using JSON PlaceHolder API to fetch `ALL` posts as well as `Individual` Posts 
- Implements Pagination and Caching using `useMemo()` Hook to Boost Performance.
- Tailwind + Custom CSS for Styling certain areas of codebase 
- HOC(Higher Order Components designed to Secure Routes using Firebase auth details)
- Validation and Error Handling using Alerts 
- Created Docker File for the ease of running Application in containers
- Majorly written in Typescript
- Best Practices using Next.js built-in features `Image` , `Link` , `Fonts`.

# Todo :
[] Responsive Design
[] Proper implementation of Zustand Stores 

# References :
- Main Source present at `src/` directory.
- `/posts` : lists all posts in a paginated way 
- `/posts/postID` : lists specific post with the given postID withing range of 1 - 100


### Note: 
> Make sure to create a `.env` file similar to `.env.example` to setup environment variables.

```.env
#.env

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_API_JSON_PLACEHOLDER_ALL_POSTS=https://jsonplaceholder.typicode.com/posts

```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install Dependencies:

```bash
npm install 
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
