/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["placekitten.com"],
	},
};

const createMDX = await import("@next/mdx");
const withMDX = createMDX.default({
	extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
