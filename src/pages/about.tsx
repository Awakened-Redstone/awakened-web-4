import Head from 'next/head'
import {FaJava} from "react-icons/fa";
import {
    TbBrandFlutter, TbBrandGolang,
    TbBrandHtml5,
    TbBrandReact, TbBrandRust, TbInfoCircle
} from "react-icons/tb";
import React from "react";

import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/react-flicking/dist/flicking.css";
import {SiElixir} from "react-icons/si";

export const config = {runtime: 'experimental-edge'};

export default function About() {
    const iconLine = "inline-flex items-center flex-wrap";

    return (
        <>
            <Head>
                <title>About - Awakened Redstone</title>
            </Head>
            <main className={"max-w-[1400px] mx-auto"}>
                <div className={"text-7 font-medium"}>
                    <div className={`bg-black/20 mx-auto text-left mt-5 p-4 rounded-xl drop-shadow-md leading-6 ${iconLine} w-full dark:text-red-600 text-red-700`}>
                        <TbInfoCircle className={""}/>&nbsp;This page is still under construction, the formatting and content is not final.
                    </div>
                    <div className={"bg-black/30 mx-auto text-left mt-5 p-4 rounded-xl drop-shadow-md leading-6"}>
                        Hello, I&#39;m <span className={"font-semibold"}>Awakened Redstone</span>, a general purpose
                        programmer who likes learning new languages and frameworks.<br/>
                        <div className={iconLine}>
                            I have been programming for over {new Date().getFullYear() - 2018} years, and am
                            knowledgeable
                            in&nbsp;
                            <FaJava/>&nbsp;Java,&nbsp;
                            <TbBrandHtml5/>&nbsp;Web development,&nbsp;
                            <TbBrandReact/>&nbsp;React and&nbsp;
                            <TbBrandFlutter/>&nbsp;Flutter.
                        </div>
                        <div className={iconLine}>
                            I&#39;m currently looking into/getting into&nbsp;
                            <a href={"https://go.dev/"} target={"_blank"} className={`opacity-100 text-foreground-500 hover:text-current transition-fade fancy-underline ${iconLine}`}>
                                <TbBrandGolang/>&nbsp;Go
                            </a>&nbsp;,&nbsp;
                            <a href={"https://www.rust-lang.org/"} target={"_blank"} className={`opacity-100 text-foreground-500 hover:text-current transition-fade fancy-underline ${iconLine}`}>
                                <TbBrandRust/>&nbsp;Rust
                            </a>&nbsp;and&nbsp;
                            <a href={"https://elixir-lang.org/"} target={"_blank"} className={`opacity-100 text-foreground-500 hover:text-current transition-fade fancy-underline ${iconLine}`}>
                                <SiElixir/>&nbsp;Elixir
                            </a>
                        </div>
                        <br/>
                        I often working on personal projects and sometimes contribute to other ones too.
                        <br/>
                        I was the lead developer of the <a href={"https://twitter.com/CharityPlayroom"}>Playroom Charity event in 2024</a>, working on the custom mod adding a
                        Tiltify integration and a custom item for the event. I have worked with Bawnorton, BlazeFaia, macstevins and nebme to make the mod. 
                    </div>
                </div>
            </main>
        </>
    )
}
