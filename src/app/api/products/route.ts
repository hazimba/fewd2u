import { db } from "@/app/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request: Request) {
  // Simulate fetching data from a database or external API
  //   const products = [
  //     { id: 1, name: "Product A", price: 29.99 },
  //     { id: 2, name: "Product B", price: 49.99 },
  //     { id: 3, name: "Product C", price: 19.99 },
  //   ];

  const snapshot = await getDocs(collection(db, "Products"));
  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
