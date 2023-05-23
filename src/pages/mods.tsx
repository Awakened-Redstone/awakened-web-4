import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React from "react";
import ModCard from "@/components/ModCard";
import {ModrinthMod, PistonMeta} from "@/system/utils";

export const config = {runtime: 'edge'};

export async function getServerSideProps(context: any) {
    const modsRes = await fetch("https://api.modrinth.com/v2/user/awakened-redstone/projects")
    const postonMetaRes = await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
    const mods = await modsRes.json()
    const pistonMeta = await postonMetaRes.json()
    return {
        props: {mods, pistonMeta}
    }
}

export default function Mods({mods, pistonMeta}: {mods: ModrinthMod[], pistonMeta: PistonMeta}) {
    return (
        <>
            <Head>
                <title>Mods - Awakened Redstone</title>
            </Head>
            <main className={styles.main}>
                <div className={"grid gap-2 mod-cards max-w-[1380px] mx-auto"}>
                    {mods.map((mod: ModrinthMod) => <ModCard mod={mod} pistonMeta={pistonMeta} key={mod.id}/>)}
                </div>
            </main>
        </>
    )
}
