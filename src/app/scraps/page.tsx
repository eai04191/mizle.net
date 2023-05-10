import ListScraps from "../components/_server/ListScraps";

export default function Page() {
    return (
        <main className="flex flex-col gap-4 p-12">
            <h1 className="text-4xl">Scraps</h1>
            {/* @ts-expect-error Async Server Component */}
            <ListScraps />
        </main>
    );
}
