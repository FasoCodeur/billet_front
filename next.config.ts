import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // / experimental: {
    //     serverActions: true,
    // },
    reactStrictMode: false,
    images: {
        domains: [
            "public.blob.vercel-storage.com",
        ],
    },
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/dashboard",
                permanent: true,
            },
        ];
    },

    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
