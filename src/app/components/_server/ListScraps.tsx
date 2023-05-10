import ScrapCard from "@/app/components/ScrapCard";
import { createClient, createCustomFetch } from "@/libs/cmsClient";

async function getPosts() {
    const client = createClient({
        customFetch: createCustomFetch({ tags: ["collection"] }),
    });
    const posts = await client.getList({
        endpoint: "scraps",
        queries: {
            fields: ["id", "title", "updatedAt"],
        },
    });

    return posts;
}

export default async function ListScraps() {
    const posts = await getPosts();
    return (
        <div className="flex flex-col gap-2">
            {posts.contents.map((post) => (
                <ScrapCard key={post.id} scrap={post} />
            ))}
        </div>
    );
}
