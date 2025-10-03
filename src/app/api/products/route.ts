import { supabase } from "@/lib/supabaseClient";
import { z } from "zod";

import { db } from "@/app/firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { deleteFile } from "./deleteFile";

export const formSchemaProduct = z.object({
  id: z.any().optional(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  origin: z.string().optional(),
  price: z
    .string()
    .min(0, {
      message: "Price must be a positive number.",
    })
    .optional(),
  mainImageUrl: z.any().optional(),
  available: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  isFeature: z.boolean().optional(),
});

export async function fetchProducts(searchTerm: string): Promise<any[]> {
  const response = await fetch(`/api/products?search=${searchTerm}`);
  const data = await response.json();
  return data;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";

  const snapshot = await getDocs(collection(db, "Products"));

  if (search) {
    // Filter products based on the search term (case-insensitive)
    const filteredProducts = snapshot.docs
      .map((doc) => ({ id: doc.id, name: doc.data().name, ...doc.data() }))
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    console.log("Filtered products:", filteredProducts);
    return new Response(JSON.stringify(filteredProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Received data for new product:", data);

  try {
    // Add a new document with a generated id.
    const docRef = await getDocs(collection(db, "Products"));
    const existingProduct = docRef.docs.find(
      (doc) => doc.data().name === data.name
    );
    if (existingProduct) {
      return new Response(
        JSON.stringify({ error: "Product with this name already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newProduct = await addDoc(collection(db, "Products"), {
      name: data.name,
      description: data.description,
      category: data.category,
      origin: data.origin,
      price: data.price,
      mainImageUrl: data.mainImageUrl,
      // later to add
      // available: data.available || true,
      // tags: data.tags || [],
      // createdAt: serverTimestamp(),
      // updatedAt: serverTimestamp(),
    });

    return new Response(
      JSON.stringify({
        id: newProduct.id,
        message: "Product created successfully",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PATCH(request: Request) {
  // to get from url query param can use Next.js 13 way
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  // to get from request body
  try {
    const data = await request.json();
    console.log("Received data for update:", data);

    if (!data.id) {
      return new Response(
        JSON.stringify({ error: "Product ID is required for update" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { id, ...updateData } = data;
    console.log("Updating product with ID:", id, "with data:", updateData);
    const docRef = doc(db, "Products", id);
    await updateDoc(docRef, updateData);

    return new Response(
      JSON.stringify({ message: `Product with ID ${id} updated successfully` }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error updating document: ", e);
    return new Response(JSON.stringify({ error: "Failed to update product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  const data = await request.json();
  const id = data.id;
  const img = data.mainImageUrl;
  console.log("mainImageUrl", img);
  console.log("Received request to delete product with ID:", id);

  if (!id) {
    return new Response(
      JSON.stringify({ error: "Product ID is required for deletion" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    if (img) {
      await deleteFile(img);
    }

    const docRef = doc(db, "Products", id);
    await deleteDoc(docRef);

    return new Response(
      JSON.stringify({ message: `Product with ID ${id} deleted successfully` }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Error deleting document: ", e);
    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
