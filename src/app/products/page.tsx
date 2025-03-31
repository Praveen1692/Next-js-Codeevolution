"use client";

import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Home GO");
    router.push("/");
  };
  return (
    <div className="bg-gray-200 p-4">
      <h1 className=" text-2xl font-bold mb-4">Product List</h1>
      <ul className="list-disc pl-4">
        <li id="1" className=" text-lg font-medium mb-2">
          Product 1
        </li>
        <li id="2" className=" text-lg font-medium mb-2">
          Product 2
        </li>
        <li id="3" className=" text-lg font-medium mb-2">
          Product 3
        </li>
      </ul>

      <button onClick={handleClick}>Click me for Home</button>
    </div>
  );
}
