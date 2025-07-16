/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Kecbiofuelfinal',    // Required for GitHub Pages routing
  images: {
    unoptimized: true,             // Optional but useful
  },
};

export default nextConfig;
