import {Card, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import React, {useEffect} from "react";
import {Skeleton, Tooltip} from "@nextui-org/react";
import Link from "next/link";
import {formatVersions, McVersion, ModrinthMod, PistonMeta} from "@/system/utils";

export const config = {runtime: 'edge'};

//versions is usually with the older versions first, so we need to reverse it, pistonmeta is used to know which versions are stable, it has the newest versions first, if pistonmeta is null we fallback to the latest version on version list
function getLatestStable(versions: string[], pistonMeta: PistonMeta): string {
    if (!pistonMeta) return versions[versions.length - 1];
    versions = versions.reverse();
    for (const version of versions) {
        const pistonVersion = pistonMeta.versions.find((pistonVersion: McVersion) => pistonVersion.id === version);
        if (pistonVersion && pistonVersion.type === "release") {
            return version;
        }
    }
    return versions[versions.length - 1];
}

export async function getData(mod: ModrinthMod) {
    const res = await fetch('https://api.modrinth.com/v2/project/' + mod.slug + '/version');
    const versions = await res.json();
    // get latest stable version, if there is none, get latest version
    let version = versions.find((version: any) => {
        return version.version_type === "release";
    });
    if (!version) {
        version = versions[0];
    }
    return version;
}

export default function ModCard({mod, pistonMeta}: {mod: ModrinthMod, pistonMeta: PistonMeta}) {
    const [data, setData]: [any, any] = React.useState<ModrinthMod>(mod);
    useEffect(() => {
        getData(mod).then((data) => {
            setData(data);
        });
    }, [mod]);

    if (!data) return (
        <Skeleton className={"rounded-xl"}>
            <div className="w-[200px] h-[100px]">NextUI</div>
        </Skeleton>
    );

    const latest: string = getLatestStable([...mod.game_versions], pistonMeta);
    const versions = formatVersions(mod.game_versions, pistonMeta);

    return (
        <Card className={"bg-white dark:bg-[#26292f] border-none hover:scale-[1.01]"} as={Link} href={"https://modrinth.com/mod/" + mod.slug} target={"_blank"}>
            <CardBody className={"w-full p-3"}>
                <div className={"flex w-full h-full"}>
                    <div className={"mr-4"}>
                        <Image className={"min-w-[6rem] min-h-[6rem] w-[6rem] h-[6rem]"} src={mod.icon_url ? mod.icon_url : "https://cdn-raw.modrinth.com/placeholder.svg"}/>
                    </div>
                    <div className={"flex flex-col justify-between mod-card-descver h-full"}>
                        <div className={"h-fit font-bold text-[1.5rem] leading-5 mb-[4px]"}>{mod.title}</div>
                        <div className={"h-full leading-5 mb-[6px] opacity-70"}>{mod.description}</div>
                        <div className={"h-6 flex gap-2 mt-auto"}>
                            <div className={"bg-brand-modrinth leading-6 rounded-[0.5rem] px-2"}>{data.version_number}</div>
                            <Tooltip content={versions.toString()} placement={"top"} showArrow className={"break-normal max-w-[25rem]"}>
                                <div className={"bg-brand-modrinth leading-6 rounded-[0.5rem] px-2 flex"}>
                                    {latest}
                                    <sup className={"leading-4 top-0"}>
                                        {mod.game_versions.length > 1 ? " +" + (mod.game_versions.length - 1) : ""}
                                    </sup>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}