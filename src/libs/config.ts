const envKeys = [
    "MICROCMS_SERVICE_DOMAIN",
    "MICROCMS_API_KEY",
    "REVALIDATE_SECRET",
    "DRAFT_SECRET",
] as const;

type Env = {
    [key in (typeof envKeys)[number]]: string;
};

const env = envKeys.reduce((env, key) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is missing`);
    }
    env[key] = value;
    return env;
}, {} as Env);

export const config = {
    env,
};
