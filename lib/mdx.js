import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { formatDate } from "./formatDate.js"; // asegúrate de que esto exista

const postsDirectory = path.join(process.cwd(), "posts");

// ✅ Devuelve todos los slugs (para generar rutas dinámicas)
export function getAllPostSlugs() {
	return fs
		.readdirSync(postsDirectory)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx$/, ""));
}

// ✅ Devuelve los datos de un solo post a partir del slug
export async function getPostBySlug(slug) {
	const filePath = path.join(postsDirectory, `${slug}.mdx`);
	const source = fs.readFileSync(filePath, "utf8");

	const { data, content } = matter(source);
	const mdxSource = await serialize(content);

	return {
		frontMatter: {
			...data,
			date: formatDate(data.date),
		},
		mdxSource,
	};
}

// ✅ Devuelve todos los posts para la vista /blog
export function getAllPosts() {
	const fileNames = fs.readdirSync(postsDirectory);

	const posts = fileNames
		.filter((file) => file.endsWith(".mdx"))
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, "utf8");
			const { data: frontMatter, content } = matter(fileContents);

			return {
				slug,
				frontMatter: {
					...frontMatter,
					date: formatDate(frontMatter.date),
				},
				content,
			};
		});

	// Ordenar por fecha descendente
	return posts.sort(
		(a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
	);
}
