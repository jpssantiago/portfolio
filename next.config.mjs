/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "bucket.portfolio.joaosantiago.com.br"
            }, {
                hostname: "cdn.prod.website-files.com"
            }
        ]
    }
};

export default nextConfig;
