import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200 text-sm px-6 py-4">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
				{/* Left: Name */}
				<div className="text-gray-500 w-full md:w-auto text-center md:text-left">
					© {new Date().getFullYear()} Francisco Casillas
				</div>

				{/* Center: Social Icons */}
				<div className="flex justify-center gap-4 text-gray-500 text-xl">
					<a
						href="https://github.com/franciscoxcode"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/franciscoxcode"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://x.com/franciscoxcode"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter />
					</a>
					<a
						href="mailto:fxcasillas.dev@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaEnvelope />
					</a>
				</div>

				{/* Right: Built with */}
				<div className="text-gray-500 w-full md:w-auto text-center md:text-right text-md">
					Built with care using Next.js & Tailwind CSS 🧑‍💻
				</div>
			</div>
		</footer>
	);
}
