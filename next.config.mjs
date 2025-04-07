/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.js

const nextConfig = {
    experimental: {
        serverActions: true, // agar use kar rahe ho
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Access-Control-Allow-Credentials",
                        value: "true",
                    },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:3000",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Origin, X-Requested-With, Content-Type, Accept",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;