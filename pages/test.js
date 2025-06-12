import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export async function getStaticProps() {
	const post = await getPostBySlug("first-post"); // slug sin .mdx
	return {
		props: {
			post,
		},
	};
}

export default function TestPage({ post }) {
	return (
		<>
			<Navbar />

			<main className="max-w-2xl mx-auto px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">{post.frontMatter.title}</h1>
				<p className="text-sm text-gray-500 mb-8">{post.frontMatter.date}</p>

				<article className="prose prose-lg">
					<MDXRemote {...post.mdxSource} components={{ Image }} />
				</article>

				<div className="mt-10">
					<a
						href="/blog"
						className="inline-block text-blue-600 underline hover:text-blue-800 transition"
					>
						← Back to Blog
					</a>
				</div>
			</main>
		</>
	);
}
