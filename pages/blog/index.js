import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";

export async function getStaticProps() {
	const postsDirectory = path.join(process.cwd(), "posts");
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data, content } = matter(fileContents);
		return {
			slug: filename.replace(/\.mdx$/, ""),
			frontMatter: data,
			content,
		};
	});

	return {
		props: {
			posts,
		},
	};
}

export default function BlogIndex({ posts }) {
	return (
		<>
			<main className="max-w-3xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold mb-10">📚 Blog</h1>

				{posts.map(({ slug, frontMatter, content }) => (
					<article key={slug} className="mb-12 border-b pb-8">
						{frontMatter.image && (
							<div className="mb-4">
								<Image
									src={frontMatter.image}
									alt={frontMatter.title}
									width={800}
									height={400}
									className="rounded-lg w-full object-cover"
								/>
							</div>
						)}

						<h2 className="text-2xl font-semibold mb-1">
							<Link href={`/blog/${slug}`} className="hover:underline">
								{frontMatter.title}
							</Link>
						</h2>
						<p className="text-sm text-gray-500 mb-3">
							{formatDate(frontMatter.date)}
						</p>
						<p className="text-gray-700 mb-3">{content.slice(0, 200)}...</p>
						<Link
							href={`/blog/${slug}`}
							className="text-blue-600 hover:underline font-medium"
						>
							Read more →
						</Link>
					</article>
				))}
			</main>
		</>
	);
}
