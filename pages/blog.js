import { useState } from "react";
import { blogPosts } from "@/content/blogPosts";
import { formatDate } from "@/lib/formatDate";

export default function BlogPage() {
	const [visibleCount, setVisibleCount] = useState(6); // 👀 número inicial de posts visibles

	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + 6); // 🔁 carga 6 más por clic
	};

	return (
		<div className="max-w-2xl mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-8">📓 Blog Feed</h1>

			{blogPosts.slice(0, visibleCount).map((post, index) => (
				<div key={index} className="mb-10 border-b border-gray-200 pb-6">
					<p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
					{post.image && (
						<img
							src={post.image}
							alt="Post visual"
							className="w-full h-auto rounded-md mb-3"
						/>
					)}
					<p className="text-lg text-gray-800">{post.content}</p>
					<div className="flex flex-wrap gap-2 mt-3">
						{post.tags.map((tag, i) => (
							<span
								key={i}
								className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			))}

			{visibleCount < blogPosts.length && (
				<div className="text-center">
					<button
						onClick={handleLoadMore}
						className="mt-6 px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded hover:bg-blue-50 transition"
					>
						Load more posts ↓
					</button>
				</div>
			)}
		</div>
	);
}
