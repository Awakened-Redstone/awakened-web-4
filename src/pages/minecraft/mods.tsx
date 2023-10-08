import mr from '@/styles/Modrinth.module.scss'
import Head from 'next/head'
import React, {useEffect} from "react";
import ModCard from "@/components/ModCard";
import {ModrinthMod, PistonMeta} from "@/system/types";
import SpinningModrinthLogo from "@/components/SpinningModrinthLogo";
import {cachedFetch} from "@/system/network";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export const config = {runtime: 'experimental-edge'};

async function getData() {
    const modsRes = await cachedFetch("https://api.modrinth.com/v2/user/awakened-redstone/projects")
    const pistonMetaRes = await cachedFetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
    const mods = await modsRes.json()
    const pistonMeta = await pistonMetaRes.json()

    return {mods, pistonMeta};
}

export default function Mods() {
    const [mods, setMods]: [ModrinthMod[], any] = React.useState<ModrinthMod[]>([]);
    const [pistonMeta, setPistonMeta]: [PistonMeta, any] = React.useState<PistonMeta>(null as any);
    useEffect(() => {
        if (mods && pistonMeta) return;
        getData().then((data) => {
            setMods(data.mods);
            setPistonMeta(data.pistonMeta);
        });
    }, [mods, pistonMeta]);

    if (!(mods && pistonMeta)) {
        return (
            <>
                <div>
                    <SpinningModrinthLogo/>
                    <div className={"mx-auto mt-4 w-fit font-semibold text-[1.5rem]"}>Getting mods list</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Mods - Awakened Redstone</title>
                <meta name="description" content="A list with all of Awakened Redstone's mods posted on Modrinth"/>
            </Head>
            <main>
                <div className={`grid gap-2 mod-cards max-w-[1380px] mx-auto mb-4 modrinth dark:modrinth-dark ${mr["display-mode--grid"]}`}>
                    {/*{mods.map((mod: ModrinthMod) => <ModCard mod={{...mod}} pistonMeta={{...pistonMeta}} key={mod.id}/>)}*/}

                    {mods.map((mod: ModrinthMod) => (
                        <Link href={"https://modrinth.com/mod/" + mod.slug} target={"_blank"} key={mod.id + "-link"} className={"transition-transform hover:scale-[1.01]"}>
                            <ProjectCard
                                key={mod.id}
                                author={"Awakened Redstone"}
                                name={mod.title}
                                iconUrl={mod.icon_url}
                                description={mod.description}
                                clientSide={mod.client_side}
                                serverSide={mod.server_side}
                                downloads={mod.downloads}
                                follows={mod.followers}
                                //categories={mod.categories}
                                updatedAt={mod.updated}
                            />
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}
