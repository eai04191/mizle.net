import "./globals.css";

import clsx from "clsx";
import { Inter } from "next/font/google";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "mizle.net",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <div className="mx-auto w-full min-w-[20rem] max-w-7xl">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
