import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="w-full border-t py-3 mt-20 relative">
			<div className="w-full max-w-none px-6 relative h-6">
				{/* Contenedor de los extremos */}
				<div className="flex justify-between items-center w-full">
					{/* Izquierda */}
					<div className="text-sm text-gray-500">© 2025 Francisco Casillas</div>

					{/* Derecha */}
					<div className="text-xs text-gray-500">
						Built with Next.js & Tailwind — Crafted with care 💻
					</div>
				</div>

				{/* Centro absoluto */}
				<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
					<div className="flex gap-4 text-base text-gray-500 pointer-events-auto">
						<a
							href="https://github.com/franciscoxcode"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-black"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/franciscoxcode"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-black"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://x.com/franciscoxcode"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-black"
						>
							<FaXTwitter />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
