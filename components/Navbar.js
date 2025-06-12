import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
			<Link
				href="/"
				className="text-lg font-semibold text-gray-900 hover:text-black transition"
			>
				Francisco Casillas
			</Link>

			<div className="flex space-x-6 text-gray-600 text-sm font-medium">
				<Link href="/" className="hover:text-black transition">
					Home
				</Link>
				<Link href="/blog" className="hover:text-black transition">
					Blog
				</Link>
			</div>
		</nav>
	);
}
