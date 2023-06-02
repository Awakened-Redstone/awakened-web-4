import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import ModrinthLogo from '@/components/ModrinthLogo'
import FabricLogo from "@/components/FabricLogo";
import Logo from "@/components/Logo";
import {SiJetbrains, SiKofi, SiModrinth} from "react-icons/si";
import {FaGithub, FaJava, FaRegCopyright} from "react-icons/fa";
import {
    TbAlertCircle,
    TbBrandCss3, TbBrandFigma, TbBrandGit,
    TbBrandHtml5, TbBrandJavascript,
    TbBrandNextjs, TbBrandReact,
    TbBrandTypescript, TbTools
} from "react-icons/tb";
import {HiExternalLink, HiCode} from "react-icons/hi";
import {BsGithub} from "react-icons/bs";
import Link from "next/link";
import React from "react";
import {defaultClasses, formatNumber, ModrinthMod} from "@/system/utils";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Perspective } from "@egjs/flicking-plugins";

import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
import {Tooltip} from "@nextui-org/react";

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link}`
}

export async function getServerSideProps(context: any) {
    const modsRes = await fetch("https://api.modrinth.com/v2/user/awakened-redstone/projects");
    const mods = await modsRes.json();
    return {
        props: {mods, navless: true, borderless: true}
    }
}

function calculateDownloads(mods: ModrinthMod[]) {
    let downloads = 0;
    mods.forEach(mod => {
        downloads += mod.downloads;
    })
    return downloads;
}

export default function Home({mods}: {mods: ModrinthMod[]} ) {
    const _plugins = [
        new Arrow(),
        new Perspective({ rotate: -0.5, scale: 0.5, perspective: 1000 })
    ];

    return (
        <>
            <Head>
                <title>Awakened Redstone</title>
            </Head>
            <main className={`${styles.main} max-w-[1400px] mx-auto`}>
                <div className={"mx-auto w-fit mb-[3rem] mt-6"}>
                    <Logo width={"auto"} height={"3rem"}/>
                    <div className={"justify-center flex"}>
                        <Link href={"/mods"} className={`${classes.navLinkContent} text-xl`}>
                            <FabricLogo width={18.57145833333333} height={20}/>&nbsp;Mods
                        </Link>
                        <a className={`${classes.navLinkContent} text-brand-modrinth text-xl`} href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                            <SiModrinth/>&nbsp;Modrinth&nbsp;<HiExternalLink/>
                        </a>
                        <a className={`${classes.navLinkContent} text-xl`} href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                            <FaGithub/>&nbsp;Github&nbsp;<HiExternalLink/>
                        </a>
                        <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                            <div className={`${defaultClasses.link} px-[0.5rem] py-[0.15rem] opacity-50 hover:opacity-50 cursor-no-drop text-xl`}>
                                <FaRegCopyright/>&nbsp;License
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className={"mt-[-2rem] mb-[2rem] w-[50%] flex items-center text-left mx-auto whitespace-break-spaces text-amber-600 font-semibold"}>
                    <TbAlertCircle className={"text-4xl"}/>
                    <div className={"pl-2"}>
                        This is an early dev version of the website, the site may not behave properly on all devices and browsers.
                    </div>
                </div>
                <div className={"mt-[-40px]"}>
                    <Flicking
                        cameraClass={"flex flex-row gap-2 items-center px-2 mx-auto min-h-[360px] relative"}
                        plugins={_plugins}
                        deceleration={0.03}
                        circular={false}
                    >
                        <Link className={"relative w-[260px] h-[300px] bg-[#05CE45] rounded-2xl bg-opacity-50 flex flex-col hover:scale-[1.01] motion-reduce:transition-none"} draggable={false} href={"/mods"}>
                            <div className={"h-full flex"}>
                                <div className={"mt-auto w-full h-fit"}>
                                    <ModrinthLogo width={"auto"} height={"8rem"} className={"dropShadow mx-auto"}/>
                                </div>
                            </div>
                            <div className={"h-full font-semibold text-center flex"}>
                                <div className={"m-auto h-fit"}>
                                    <div className={"text-2xl"}>Downloads</div>
                                    <div className={"text-5xl"}>{formatNumber(calculateDownloads(mods))}</div>
                                </div>
                            </div>
                        </Link>
                        <a className={"relative w-[260px] h-[300px] bg-[#6E5494] rounded-2xl bg-opacity-50 flex flex-col hover:scale-[1.01] motion-reduce:transition-none"} draggable={false} href={"https://github.com/Awakened-Redstone?tab=repositories"} target="_blank">
                            <div className={"h-full flex"}>
                                <div className={"mt-auto w-full h-fit"}>
                                    <BsGithub className={"dropShadow text-[8rem] mx-auto"}/>
                                </div>
                            </div>
                            <div className={"h-full font-semibold text-center flex"}>
                                <div className={"m-auto h-fit"}>
                                    <div className={"text-2xl"}>GitHub</div>
                                    <div className={"text-4xl inline-flex items-center align-middle"}>Repositories</div>
                                    <div className={"text-2xl absolute top-2 right-2"}><HiExternalLink/></div>
                                </div>
                            </div>
                        </a>
                        <div className={"relative w-[260px] h-[300px] bg-[#AE6565] rounded-2xl bg-opacity-50 flex flex-col hover:scale-[1.01] motion-reduce:transition-none cursor-default"}>
                            <div className={"h-full flex"}>
                                <div className={"mt-auto w-full h-fit"}>
                                    <HiCode className={"dropShadow text-[8rem] mx-auto"}/>
                                </div>
                            </div>
                            <div className={"h-full font-semibold text-center flex"}>
                                <div className={"m-auto h-fit"}>
                                    <div className={"text-2xl"}>Languages</div>
                                    <div className={"text-3xl w-full inline-flex justify-center items-center align-middle"}>
                                        <FaJava/>&nbsp;
                                        <TbBrandJavascript/>&nbsp;
                                        <TbBrandTypescript/>&nbsp;
                                        <TbBrandHtml5/>&nbsp;
                                    </div>
                                    <div className={"text-3xl w-full inline-flex justify-center items-center align-middle"}>
                                        <TbBrandCss3/>&nbsp;
                                        <TbBrandReact/>&nbsp;
                                        <TbBrandNextjs/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"relative w-[260px] h-[300px] bg-[#BBBB0B] rounded-2xl bg-opacity-50 flex flex-col hover:scale-[1.01] motion-reduce:transition-none cursor-default"}>
                            <div className={"h-full flex"}>
                                <div className={"mt-auto w-full h-fit"}>
                                    <TbTools className={"dropShadow text-[8rem] mx-auto"}/>
                                </div>
                            </div>
                            <div className={"h-full font-semibold text-center flex"}>
                                <div className={"m-auto h-fit"}>
                                    <div className={"text-2xl"}>Tools</div>
                                    <div className={"text-3xl w-full inline-flex justify-center items-center align-middle"}>
                                        <TbBrandFigma/>&nbsp;
                                        <TbBrandGit/>&nbsp;
                                        <SiJetbrains className={"text-[minmax(50px), 1.875rem]"}/>&nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className={"relative w-[260px] h-[300px] bg-[#13C3FF] rounded-2xl flex flex-col hover:scale-[1.01] motion-reduce:transition-none kofi-glow"} draggable={false} href={"https://ko-fi.com/AwakenedRedstone"} target={"_blank"}>
                            <div className={"h-full flex"}>
                                <div className={"mt-auto w-full h-fit"}>
                                    <SiKofi className={"dropShadow text-[8rem] mx-auto"}/>
                                </div>
                            </div>
                            <div className={"h-full font-semibold text-center flex"}>
                                <div className={"m-auto h-fit"}>
                                    <div className={"text-2xl"}>Buy me a coffee</div>
                                    <div className={"text-3xl w-full inline-flex justify-center items-center align-middle"}>
                                        Donate
                                        <div className={"text-2xl absolute top-2 right-2"}><HiExternalLink/></div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <ViewportSlot>
                            <span className="flicking-arrow-prev"></span>
                            <span className="flicking-arrow-next"></span>
                        </ViewportSlot>
                    </Flicking>
                </div>
            </main>
        </>
    )
}
