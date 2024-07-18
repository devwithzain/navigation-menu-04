import "@/styles/globals.css";
import { Home } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Navigation Menu Component 04",
	description: "Navigation Component by devwithzain",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Home />
				{children}
			</body>
		</html>
	);
}
