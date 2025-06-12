import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { formatDate } from "./formatDate.js";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostSlugs() {
	return fs
		.readdirSync(postsDirectory)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug) {
	const filePath = path.join(postsDirectory, `${slug}.mdx`);
	const source = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(source);
	const mdxSource = await serialize(content);

	return {
		frontMatter: {
			...data,
			date: formatDate(data.date), // 👈 se formatea automáticamente aquí
		},
		mdxSource,
	};
}
