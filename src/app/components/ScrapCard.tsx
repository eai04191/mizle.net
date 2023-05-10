"use client";

import { Schema } from "@/libs/cmsClient";

export default function ScrapCard({
    scrap,
}: {
    scrap: Omit<Schema["scraps"], "content">;
}) {
    const { id, title, updatedAt } = scrap;

    const formatedDate = new Intl.DateTimeFormat("ja-JP", {
        dateStyle: "medium",
        timeStyle: "long",
        timeZone: "Asia/Tokyo",
    }).format(new Date(updatedAt));

    return (
        <a
            className="flex flex-col gap-1 rounded border p-4 hover:shadow-sm"
            href={`/scraps/${id}`}
        >
            <time
                dateTime={updatedAt}
                title={formatedDate}
                className="text-sm opacity-70"
            >
                {formatedDate}
            </time>
            {title}
            <br />
        </a>
    );
}
