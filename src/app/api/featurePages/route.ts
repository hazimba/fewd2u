import { z } from "zod";

import { db } from "@/app/firebase/config";
import { baseUrl } from "@/lib/getBaseUrl";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { FeaturePage } from "@/types";

export const featurePageFormSchema = z.object({
  id: z.any().optional(),
  bgImageUrl: z.string().optional(),
  displayImageUrl: z.string().optional(),
  isActive: z.boolean(),
  mainTitle: z.string(),
  subtitle: z.string(),
  title: z.string(),
});

export async function GET() {
  try {
    // get all feature pages
    const snapshot = await getDocs(collection(db, "FeaturePages"));

    //   filter which field to return
    let featurePages: FeaturePage[] = snapshot.docs.map((doc) => ({
      displayImageUrl: doc.data().displayImageUrl,
      bgImageUrl: doc.data().bgImageUrl,
      title: doc.data().title,
      mainTitle: doc.data().mainTitle,
      subtitle: doc.data().subtitle,
      isActive: doc.data().isActive,
      id: doc.id,
    })) as FeaturePage[];

    if (featurePages.length === 0) {
      return new Response(JSON.stringify(null), { status: 200 });
    }

    return new Response(JSON.stringify(featurePages), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  // create a new feature page
  const body = await request.json();

  const { bgImageUrl, displayImageUrl, isActive, mainTitle, subtitle, title } =
    featurePageFormSchema.parse(body);

  const docRef = await addDoc(collection(db, "FeaturePage"), {
    bgImageUrl,
    displayImageUrl,
    isActive,
    mainTitle,
    subtitle,
    title,
  });

  return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
}

export async function PUT(request: Request) {
  // update a feature page
  const body = await request.json();

  const {
    id,
    bgImageUrl,
    displayImageUrl,
    isActive,
    mainTitle,
    subtitle,
    title,
  } = featurePageFormSchema.parse(body);

  const docRef = doc(db, "FeaturePage", id);

  await updateDoc(docRef, {
    bgImageUrl,
    displayImageUrl,
    isActive,
    mainTitle,
    subtitle,
    title,
  });

  return new Response(null, { status: 204 });
}

export async function DELETE(request: Request) {
  // delete a feature page
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  const docRef = doc(db, "FeaturePage", id);
  await deleteDoc(docRef);

  return new Response(null, { status: 204 });
}
