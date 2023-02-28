import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>All Posts</h1>
        <ul>
          <li>
            <Link href={"/blog/1"}>Post 1</Link>
          </li>
          <li>
            <Link href={"/blog/2"}>Post 2</Link>
          </li>
          <li>
            <Link href={"/blog/3"}>Post 3</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
