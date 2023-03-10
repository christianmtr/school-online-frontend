/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  webpack5: true, // Need to make it true for some versions of Next JS
  distDir: "build", // Defined build directory
  webpack: (config, options) => {
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "courses",
        filename: "courses.js", // remote file name which will used later
        remoteType: "var",
        exposes: {
          // expose all component here.
          "./": "./components/content",
        },
        remotes: {
            'courses_list': options.isServer ? path.resolve('../courses-list/build/courses-list.js') : 'courses_list',
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
