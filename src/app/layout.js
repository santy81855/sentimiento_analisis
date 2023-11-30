import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AS Research Análisis ",
    description: "Pagina web para analizar datos sobre el suroeste antioqueño",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
