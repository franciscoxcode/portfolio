import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Hero() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
			{/* Panel izquierdo: foto + nombre + redes */}
			<div className="bg-gray-100 p-8 rounded-xl text-center shadow-sm">
				<div className="mb-6">
					<Image
						src="/images/me.jpeg"
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
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/franciscoxcode"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://x.com/franciscoxcode"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaTwitter />
					</a>
					<a
						href="mailto:fxcasillas.dev@gmail.com"
						className="text-gray-600 hover:text-black text-xl"
					>
						<FaEnvelope />
					</a>
				</div>
			</div>

			{/* Panel derecho: intro + botón */}
			<div>
				<h1 className="text-2xl font-bold mb-6">About Me</h1>
				<p className="text-gray-700 text-md leading-relaxed mb-6">
					I’m Francisco, an iOS developer from Mexico City with a background in
					Audiovisual Communication, currently studying Computer Systems
					Engineering and specializing in iOS development.
				</p>
				<p className="text-gray-600 mb-8">
					Curious about my work? Check out my latest projects below.{" "}
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
