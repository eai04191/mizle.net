import { draftMode } from "next/headers";
import Link from "next/link";

export default function Header() {
    const { isEnabled } = draftMode();
    return (
        <header className="sticky top-0 mx-auto flex max-w-7xl items-center justify-between gap-4 bg-white/80 p-2 py-4 backdrop-blur-sm">
            <Link href="/">mizle.net</Link>
            <p className="rounded border-2 border-black bg-amber-300 p-1 px-2 font-bold uppercase text-black">
                Draft Mode is currently {isEnabled ? "Enabled" : "Disabled"}
            </p>
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
