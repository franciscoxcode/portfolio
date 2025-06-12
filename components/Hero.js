import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Hero() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
			{/* Panel izquierdo: foto + nombre + redes */}
			<div className="bg-gray-100 p-8 rounded-xl text-center shadow-sm">
				<div className="mb-6">
					<Image
						src="https://placekitten.com/200/200"
						alt="Francisco Profile"
						width={128}
						height={128}
						className="rounded-full object-cover mx-auto border border-gray-300"
					/>{" "}
				</div>

				<h2 className="text-xl font-bold leading-tight">
					Francisco
					<br />
					Casillas
				</h2>
				<p className="text-sm text-gray-500 mt-2">iOS App Development</p>

				<div className="flex justify-center gap-5 mt-6 border-t pt-4 border-gray-300">
					<a
						href="https://github.com/franciscoxcode"
						target="_blank"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaGithub />
					</a>
					<a
						href="https://tiktok.com/@franciscoxcode"
						target="_blank"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaTiktok />
					</a>
					<a
						href="https://youtube.com/@franciscoxcode"
						target="_blank"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaYoutube />
					</a>
					<a
						href="https://instagram.com/franciscoxcode"
						target="_blank"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaInstagram />
					</a>
				</div>
			</div>

			{/* Panel derecho: intro + botón */}
			<div>
				<h1 className="text-5xl font-bold mb-6">I’m Francisco</h1>
				<p className="text-gray-700 text-lg leading-relaxed mb-6">
					Welcome to my developer portfolio — a space to share what I build and
					learn as I grow. I’m a future iOS Developer currently finishing my
					degree and building apps using SwiftUI, UIKit, and other Apple
					technologies.
				</p>
				<p className="text-gray-600 mb-8">
					I’m excited for you to explore my work. Tap below to see my projects!
				</p>

				<Link
					href="#projects" // o puedes cambiarlo por /blog o /#work
					className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-black transition"
				>
					Projects
				</Link>
			</div>
		</section>
	);
}
