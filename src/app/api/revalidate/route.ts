import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const secret = request.nextUrl.searchParams.get("secret");
        if (secret !== process.env.REVALIDATE_SECRET) {
            throw new Error("secret is not correct");
        }

        const tag = request.nextUrl.searchParams.get("tag");
        if (!tag) {
            throw new Error("tag is not specified");
        }
        revalidateTag(tag);

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (error) {
        return NextResponse.json(
            {
                error: (error as Error).message,
                revalidated: false,
                now: Date.now(),
            },
            {
                status: 400,
            }
        );
    }
}
