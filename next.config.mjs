import { createMDX } from 'fumadocs-mdx/next'; 

const withMDX = createMDX(); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // uncomment the following line if the url contains a base path (e.g., https://example.com/base-path/)
  // basePath: '/base-path',
};

export default withMDX(nextConfig);
