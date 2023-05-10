import ScrapWarning from "@/app/components/ScrapWarning";
import { createClient, createCustomFetch } from "@/libs/cmsClient";
import { formatDate } from "@/libs/time";

// ここで取得されたpostは明示的にrevalidatePathが叩かれるまでずっとキャッシュされる
async function getPost(slug: string) {
    const client = createClient({});
    const posts = await client.getListDetail({
        contentId: slug,
        endpoint: "scraps",
        queries: {
            fields: ["id", "title", "updatedAt", "content"],
        },
    });

    return posts;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const { id, title, updatedAt, content } = await getPost(slug);

    return (
        <main className="mx-auto my-9 flex max-w-6xl flex-col gap-4 px-2">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-4xl">{title}</h1>
                <div className="text-sm text-opacity-70">
                    <time dateTime={updatedAt} title={formatDate(updatedAt)}>
                        {formatDate(updatedAt)}
                    </time>
                </div>
            </div>
            <hr className="m-4" />
            <ScrapWarning className="mx-auto max-w-3xl" />
            <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="prose mx-auto max-w-3xl md:prose-lg"
            />
        </main>
    );
}
