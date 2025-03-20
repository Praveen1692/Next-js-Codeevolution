export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Product List</h1>
      <h2>Product Id:{productId}</h2>
    </div>
  );
}
