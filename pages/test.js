import { getPostBySlug } from "@/lib/mdx";

export async function getStaticProps() {
	const post = await getPostBySlug("first-post"); // usa el nombre de tu archivo .mdx sin la extensión
	return {
		props: {
			post,
		},
	};
}

export default function TestPage({ post }) {
	return (
		<div className="max-w-2xl mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-6">{post.frontMatter.title}</h1>
			<p className="text-gray-500 text-sm mb-8">{post.frontMatter.date}</p>
			<article className="prose prose-lg">{post.content}</article>
		</div>
	);
}
