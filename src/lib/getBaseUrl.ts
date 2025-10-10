// NEXT_PUBLIC_BASE_URL will be https://fewd2u.vercel.app default setting by Vercel, localhost is there for local dev
export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Client-side (browser)
    return "";
  }
  // Server-side
  return process.env.NEXT_PUBLIC_BASE_URL || "https://fewd2u.vercel.app";
}
