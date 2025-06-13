import "@/styles/globals.css"; // si ya tienes esto, no lo borres
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
