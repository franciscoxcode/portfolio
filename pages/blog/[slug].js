import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/formatDate";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

export async function getStaticPaths() {
	const slugs = getAllPostSlugs();
	const paths = slugs.map((slug) => ({ params: { slug } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const post = await getPostBySlug(params.slug);
	return {
		props: {
			post,
		},
	};
}

export default function BlogPostPage({ post }) {
	return (
		<>
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
