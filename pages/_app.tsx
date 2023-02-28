import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href={"/"}>All Posts</Link>
      </nav>
      <p>
        If <b>minutes</b> are <b>even</b> (e.g. 08:10, 08:12). Post Page should
        return <b>404 Page</b>, but returns it self.
      </p>
      <Component {...pageProps} />
    </div>
  );
}
