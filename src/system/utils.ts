export const defaultClasses = {
    navContent: "font-semibold hover:bg-black dark:hover:bg-[#aaaaaa10] px-[0.5rem] py-[0.15rem] rounded-full",
    link: "relative inline-flex items-center outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-primary data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background data-[focus-visible=true]:dark:ring-offset-background-dark no-underline hover:opacity-80 transition-opacity text-base whitespace-nowrap box-border data-[active=true]:font-semibold",
}

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

export function formatNumber(number: number, abbreviate: boolean = true): string {
    const x = +number
    if (x >= 1000000 && abbreviate) {
        return (x / 1000000).toFixed(2).toString() + 'M'
    } else if (x >= 10000 && abbreviate) {
        return (x / 1000).toFixed(1).toString() + 'k'
    } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
}

export function formatVersions(versionArray: string[], pistonMeta: PistonMeta): string {
    const allVersions = [...pistonMeta.versions].reverse()
    const allReleases = allVersions.filter((x: McVersion) => x.type === 'release')

    const intervals = []
    let currentInterval = 0

    for (let i = 0; i < versionArray.length; i++) {
        const index = allVersions.findIndex((x: McVersion) => x.id === versionArray[i])
        const releaseIndex = allReleases.findIndex((x: McVersion) => x.id === versionArray[i])

        if (i === 0) {
            intervals.push([[versionArray[i], index, releaseIndex]])
        } else {
            const intervalBase = intervals[currentInterval]

            if (
                (index - (intervalBase[intervalBase.length - 1][1] as number) === 1 ||
                    releaseIndex - (intervalBase[intervalBase.length - 1][2] as number) === 1) &&
                (allVersions[intervalBase[0][1] as number].type === 'release' ||
                    allVersions[index].type !== 'release')
            ) {
                intervalBase[1] = [versionArray[i], index, releaseIndex]
            } else {
                currentInterval += 1
                intervals[currentInterval] = [[versionArray[i], index, releaseIndex]]
            }
        }
    }

    const newIntervals = []
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]

        if (interval.length === 2 && interval[0][2] !== -1 && interval[1][2] === -1) {
            let lastSnapshot = null
            for (let j: number = interval[1][1] as number; j > (interval[0][1] as number); j--) {
                if (allVersions[j].type === 'release') {
                    newIntervals.push([
                        interval[0],
                        [
                            allVersions[j].id,
                            j,
                            allReleases.findIndex((x: McVersion) => x.id === allVersions[j].id),
                        ],
                    ])

                    if (lastSnapshot !== null && lastSnapshot !== j + 1) {
                        newIntervals.push([[allVersions[lastSnapshot].id, lastSnapshot, -1], interval[1]])
                    } else {
                        newIntervals.push([interval[1]])
                    }

                    break
                } else {
                    lastSnapshot = j
                }
            }
        } else {
            newIntervals.push(interval)
        }
    }

    const output = []

    for (const interval of newIntervals) {
        if (interval.length === 2) {
            output.push(`${interval[0][0]}—${interval[1][0]}`)
        } else {
            output.push(interval[0][0])
        }
    }

    return (output.length === 0 ? versionArray : output).join(', ')
}
