import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://rasamalaysia.com/wp-content/uploads/2024/05/nasi-lemak.jpg"
      ),
      {
        protocol: "https",
        // allow any project subdomain on supabase.co
        hostname: "**.supabase.co",
        port: "",
        // match Supabase public storage path
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
