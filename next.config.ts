import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, // Expose to frontend
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,// Expose to frontend
    NEXT_PUBLIC_SIGNING_SECRET:process.env.NEXT_PUBLIC_SIGNING_SECRET, // Expose to frontend
    NEXT_PUBLIC_MONGODB_URI:process.env.NEXT_PUBLIC_MONGODB_URI, // Expose to frontend
  },
};

export default nextConfig;
