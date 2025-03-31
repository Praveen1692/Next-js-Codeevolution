import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 m-4">
      <h1 className="p-4 m-4">Welcome Home</h1>
      <Link className="p-4 m-4" href="/blog" >Blog</Link>

      <Link className="p-4 m-4" href="/products" >prducts</Link>
      <Link className="p-4 m-4" href="/articles/breaking-news-123?lang=en">Read in english</Link>
      <Link className="p-4 m-4" href="/artices/breaking-news-123?lang=hind">Read in Hindi</Link>
      
    </div>
  );
}
