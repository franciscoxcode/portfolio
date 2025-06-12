import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/formatDate";

export async function getStaticPaths() {
	const slugs = getAllPostSlugs();
	const paths = slugs.map((slug) => ({ params: { slug } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const post = await getPostBySlug(params.slug);
	return { props: { post } };
}

export default function BlogPostPage({ post }) {
	return (
		<article className="max-w-3xl mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-2">{post.frontMatter.title}</h1>
			<p className="text-gray-500 text-sm mb-6">
				{formatDate(post.frontMatter.date)}
			</p>
			<div className="prose prose-lg">{post.content}</div>
		</article>
	);
}
