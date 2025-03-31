import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next js Project</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact</Link>
      <br />
      <Link href="/">Home Page</Link>
    </div>
  );
}
