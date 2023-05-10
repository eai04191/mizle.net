import ListScraps from "./components/_server/ListScraps";

const Home = async () => {
    return (
        <main className="flex flex-col gap-4 px-2">
            {/* @ts-expect-error Async Server Component */}
            <ListScraps />
        </main>
    );
};

export default Home;
