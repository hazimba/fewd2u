import { NextResponse } from "next/server";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  getDocFromCache,
  getDocsFromCache,
} from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { Employee } from "@/types";

export async function fetchUsers() {
  try {
    const res = await fetch(`/api/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GET() {
  try {
    // const cache = await getDocsFromCache(collection(db, "Users"));
    // if (cache && !cache.empty) {
    //   const cachedUsers = cache.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   })) as Employee[];
    //   // somehow console log showing but still make an api call and page still loading
    //   console.log("Serving users from cache");
    //   return NextResponse.json(cachedUsers);
    // }

    const snapshot = await getDocs(collection(db, "Users"));
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Employee[];
    console.log("Serving users from server");
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data for update:", data);

    const { id, ...updateData } = data;
    console.log("Updating user with ID:", id, "with data:", updateData);
    const docRef = doc(db, "Users", id);
    await updateDoc(docRef, updateData);

    return NextResponse.json(
      { message: `User with ID ${id} updated successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received data:", data);

    const existingUsersEmail = await getDocs(collection(db, "Users"));
    const emailExists = existingUsersEmail.docs.some(
      (doc) => doc.data().email === data.email
    );

    if (emailExists) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const newUser = await addDoc(collection(db, "Users"), data);

    return NextResponse.json(
      {
        message: "User created successfully",
        data: { id: newUser.id, ...data },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    console.log("Received ID for deletion:", id);

    const docRef = doc(db, "Users", id);
    await deleteDoc(docRef);

    return NextResponse.json(
      { message: `User with ID ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
