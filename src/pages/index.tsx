import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Card, CardBody} from "@nextui-org/card";
import FabricLogo from "@/components/FabricLogo";
import {SiCss3, SiKofi, SiModrinth, SiTypescript} from "react-icons/si";
import {FaGithub, FaHtml5, FaReact} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb";
import {GrJava} from "react-icons/gr";
import Link from "next/link";
import React from "react";

export const config = {runtime: 'edge'};

export default function Home() {
    return (
        <>
            <Head>
                <title>Awakened Redstone</title>
            </Head>

            <main className={`${styles.main} max-w-[1400px] mx-auto`}>
                <div className={"grid gap-2 grid-cols-2 lg:grid-cols-3"}>
                    <Card className={"col-span-2"}>
                        <CardBody className={"bg-primary bg-opacity-20 h-full"}>
                            <p>
                                Hello, I&apos;m&nbsp;
                                <span className={"font-semibold"}>Awakened Redstone</span>
                                , a Minecraft mod developer.
                            </p>
                            <br/>
                            <p className={"inline-block items-center align-middle"}>
                                I work mainly with&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><GrJava className={"stroke-fix"}/>&nbsp;Java</Link>
                                , but also work with&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><TbBrandJavascript/>&nbsp;JavaScript</Link>
                                ,&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><SiTypescript/>&nbsp;TypeScript</Link>
                                ,&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><FaReact/>&nbsp;React</Link>
                                ,&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><FaHtml5/>&nbsp;HTML</Link>
                                &nbsp;and&nbsp;
                                <Link href={""} className={"inline-flex items-center font-semibold align-middle"}><SiCss3/>&nbsp;CSS</Link>
                                .
                            </p>
                            <p className={"inline-block items-center align-middle"}>
                                A list of my Minecraft mods can be found on my&nbsp;
                                <a href={"/mods"} className={"font-semibold inline-flex items-center align-middle"}>
                                    <FabricLogo width={16.285715} height={18}/>&nbsp;Mods
                                </a>
                                &nbsp;page or on my&nbsp;
                                <a href={"https://modrinth.com/user/awakened-redstone"} className={"text-brand-modrinth font-semibold inline-flex items-center align-middle"} target={"_blank"}>
                                    <SiModrinth/>&nbsp;Modrinth
                                </a>
                                &nbsp;page.
                            </p>
                            <p className={"inline-block items-center align-middle"}>
                                All my projects can be found on my&nbsp;
                                <a href={"https://github.com/Awakened-Redstone"} className={"font-semibold inline-flex items-center align-middle"} target={"_blank"}>
                                    <FaGithub/>&nbsp;Github
                                </a>
                            </p>
                            <p className={"inline-block items-center align-middle mt-auto"}>
                                Please consider donating to me on&nbsp;
                                <a href={"https://ko-fi.com/awakened_redstone"} className={"font-semibold inline-flex items-center align-middle"} target={"_blank"}>
                                    <SiKofi/>&nbsp;Ko-fi
                                </a>
                                &nbsp;it helps a lot!
                            </p>
                        </CardBody>
                    </Card>
                    <Card className={"col-span-1 hidden lg:block aspect-square"}>
                        <CardBody>
                            Image
                        </CardBody>
                    </Card>
                    <Card as={Link} href={"https://github.com/Awakened-Redstone"} className={"hover:scale-[1.01]"}>
                        <CardBody className={"aspect-square overflow-hidden"}>
                            <div className={"flex items-center h-[calc(100%-2rem)]"}>
                                <FaGithub size={"90%"} className={"aspect-square w-full"}/>
                            </div>
                            <div className={"mx-auto font-semibold text-[1.5rem]"}>Check my Github!</div>
                        </CardBody>
                    </Card>
                    <Card as={Link} href={"https://github.com/Awakened-Redstone"} className={"hover:scale-[1.01]"}>
                        <CardBody className={"aspect-square overflow-hidden text-brand-modrinth"}>
                            <div className={"flex items-center h-[calc(100%-2rem)]"}>
                                <SiModrinth size={"80%"} className={"aspect-square w-full"}/>
                            </div>
                            <div className={"mx-auto font-semibold text-[1.5rem]"}>Check my Modrinth!</div>
                        </CardBody>
                    </Card>
                    <Card as={Link} href={"https://github.com/Awakened-Redstone"} className={"hover:scale-[1.01]"}>
                        <CardBody className={"aspect-square overflow-hidden"}>
                            <div className={"flex items-center h-[calc(100%-2rem)]"}>
                                <SiKofi size={"90%"} className={"w-full"}/>
                            </div>
                            <div className={"mx-auto font-semibold text-[1.5rem]"}>Buy me a coffee!</div>
                        </CardBody>
                    </Card>
                </div>
            </main>
        </>
    )
}
