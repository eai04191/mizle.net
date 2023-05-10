import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 mx-auto flex max-w-7xl justify-between gap-4 bg-white/80 p-2 py-4 backdrop-blur-sm">
            <Link href="/">mizle.net</Link>
            <div>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/scraps">Scraps</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
