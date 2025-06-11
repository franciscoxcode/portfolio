import { blogPosts } from "../content/blogPosts";

export default function Blog() {
	return (
		<main className="max-w-2xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-8">Blog</h1>
			<div className="space-y-8">
				{blogPosts.map((post, index) => (
					<div key={index} className="p-5 border rounded-xl shadow-sm bg-white">
						<p className="text-sm text-gray-500">{post.date}</p>
						<p className="text-gray-800 mt-1 whitespace-pre-line">
							{post.content}
						</p>
						{post.image && (
							<img
								src={post.image}
								alt="Post screenshot"
								className="mt-4 rounded-lg border"
							/>
						)}
						<div className="mt-3 flex flex-wrap gap-2">
							{post.tags.map((tag, i) => (
								<span
									key={i}
									className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
								>
									#{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
