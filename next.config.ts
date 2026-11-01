import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The FamilyFlow sales page is the homepage now; keep old links working.
  async redirects() {
    return [{ source: "/familyflow", destination: "/", permanent: true }];
  },
};

export default nextConfig;
