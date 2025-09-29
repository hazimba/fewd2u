import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config";

export async function loginWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
