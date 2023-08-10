export type PistonMeta = {
    latest: {
        release: string,
        snapshot: string
    },
    versions: McVersion[]
}

export type McVersion = {
    id: string,
    type: "release" | "snapshot",
    url: string,
    time: string,
    releaseTime: string
    sha1: string,
    complianceLevel: number
}

export type ModrinthMod = {
    slug: string,
    title: string,
    description: string,
    categories: string[],
    client_side: "required" | "optional" | "unsupported",
    server_side: "required" | "optional" | "unsupported",
    body: string,
    additional_categories?: string[],
    issues_url?: string,
    source_url?: string,
    wiki_url?: string,
    discord_url?: string,
    donation_urls?: {
        id: string,
        platform: string,
        url: string,
    }[],
    project_type: "mod" | "modpack" | "resourcepack" | "shader",
    downloads: number,
    icon_url?: string,
    color?: number,
    id: string,
    team: string,
    moderator_message?: {
        message: string,
        body?: string,
    },
    published: string,
    updated: string,
    approved?: string,
    followers: number,
    status: "approved" | "rejected" | "draft" | "unlisted" | "archived" | "processing" | "unknown",
    license: {
        id: string,
        name: string,
        url?: string,
    },
    versions: string[],
    game_versions: string[],
    loaders: string[],
    gallery?: {
        url: string,
        featured: boolean,
        title?: string,
        description?: string,
        created: string,
        ordering: number,
    }[]
}