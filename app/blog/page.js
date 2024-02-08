import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>BLOGGYBLOG</h1>
      <p>
        <Link href="/blog/post1">post1</Link>
      </p>
      <p>
        <Link href="/blog/post2">post2</Link>
      </p>
    </main>
  );
}
