import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- AÑADE ESTE BLOQUE ---
  async rewrites() {
    return [
      {
        source: '/api/availability/:path*',
        destination: 'https://promedia.mx/api/availability/:path*',
      },
      {
        source: '/api/appointments/:path*',
        destination: 'https://promedia.mx/api/appointments/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sfsjdyuwttrcgchbsxim.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/albatros/**',
      },
    ],
  },
};

export default nextConfig;
