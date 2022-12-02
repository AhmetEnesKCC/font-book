import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...props } }) {
  return (
    <SessionProvider>
      <Component {...props} />
    </SessionProvider>
  );
}

export default MyApp;
