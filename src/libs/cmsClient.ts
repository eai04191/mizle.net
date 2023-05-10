import {
    createClient as SDKcreateClient,
    MicroCMSSchemaInfer,
} from "microcms-ts-sdk";

import { config } from "./config";

type Content = {
    title: string;
    content: string;
};

interface Endpoints {
    list: {
        scraps: Content;
    };
}

export type Schema = MicroCMSSchemaInfer<ReturnType<typeof createClient>>;

export function createCustomFetch({ tags }: { tags: string[] }): typeof fetch {
    return (input, init) => {
        const customInit: typeof init = {
            ...init,
            next: { tags },
        };

        return fetch(input, customInit);
    };
}

export function createClient({
    customFetch = fetch,
}: {
    customFetch?: typeof fetch;
}) {
    return SDKcreateClient<Endpoints>({
        serviceDomain: config.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: config.env.MICROCMS_API_KEY,
        customFetch,
    });
}
