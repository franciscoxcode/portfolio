import Navbar from "@/components/Navbar";

export default function BlogPage() {
	return (
		<>
			<Navbar />
			<main className="max-w-2xl mx-auto px-4 py-12">
				<h1 className="text-3xl font-bold mb-8">📓 Blog</h1>
				<p className="text-gray-600">
					Coming soon: real articles powered by Markdown.
				</p>
			</main>
		</>
	);
}
