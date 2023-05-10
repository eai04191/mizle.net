import Image from "next/image";

import { createClient, createCustomFetch } from "@/libs/cmsClient";

import ScrapCard from "./components/ScrapCard";

async function getPosts() {
    const client = createClient({
        customFetch: createCustomFetch({ tags: ["collection"] }),
    });
    const posts = await client.getList({
        endpoint: "scraps",
        queries: {
            fields: ["id", "title", "content", "updatedAt"],
        },
    });

    return posts;
}

const Home = async () => {
    const posts = await getPosts();
    return (
        <main className="flex flex-col items-center justify-between p-24">
            mizle.net
            <div className="flex flex-col gap-2">
                {posts.contents.map((post) => (
                    <ScrapCard key={post.id} scrap={post} />
                ))}
            </div>
        </main>
    );
};

export default Home;
