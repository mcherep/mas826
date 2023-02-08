/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

let assetPrefix = "/";
let basePath = "";

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    assetPrefix: isProd ? assetPrefix : undefined,
    basePath: isProd ? basePath : undefined,
    swcMinify: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.ya?ml$/,
            use: "js-yaml-loader"
        });
        config.module.rules.push({
            test: /\.(tex|bib|md)$/,
            use: "raw-loader"
        });
        return config;
    },
    async rewrites() {
        return [
            {
                source: "/soundcloud-oembed",
                destination: "https://soundcloud.com/oembed"
            },
            {
                source: "/nsingh1",
                destination: "https://media.mit.edu/~nsingh1"
            }
        ]
    }
}

module.exports = nextConfig
