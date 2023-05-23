/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /license$/,
            use: 'raw-loader',
        });
        config.module.rules.push({
            test: /\.txt$/,
            use: 'raw-loader',
        });
        return config;
    }
}

module.exports = nextConfig
