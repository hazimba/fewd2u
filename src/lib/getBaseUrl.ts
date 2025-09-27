// lib/getBaseUrl.ts
export function getBaseUrl() {
  // Running in the browser → relative path works
  if (typeof window !== "undefined") return "";

  // Running on Vercel → auto injects VERCEL_URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Running locally (dev)
  return "http://localhost:3000";
}
