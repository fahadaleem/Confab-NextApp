import "../styles/globals.css"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import ConfabContextProvider from "../context/confabContext"

import { useRouter } from "next/router";

const publicPages = ['/', '/signin/[[...index]]', '/signup/[[...index]]'];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ConfabContextProvider>
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API} navigate={(to) => router.push(to)}>
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
    </ConfabContextProvider>
  );
}

export default MyApp;
