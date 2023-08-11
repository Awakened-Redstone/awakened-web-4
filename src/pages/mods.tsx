import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, {useEffect} from "react";
import ModCard from "@/components/ModCard";
import {ModrinthMod, PistonMeta} from "@/system/types";
import SpinningModrinthLogo from "@/components/SpinningModrinthLogo";
import {cachedFetch} from "@/system/network";

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
            <SpinningModrinthLogo className={"w-[4rem]"}/>
        );
    }

    return (
        <>
            <Head>
                <title>Mods - Awakened Redstone</title>
            </Head>
            <main className={styles.main}>
                <div className={"grid gap-2 mod-cards max-w-[1380px] mx-auto"}>
                    {mods.map((mod: ModrinthMod) => <ModCard mod={{...mod}} pistonMeta={{...pistonMeta}} key={mod.id}/>)}
                </div>
            </main>
        </>
    )
}
