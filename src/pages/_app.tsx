import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {Divider, NextUIProvider,} from "@nextui-org/react";
import NextNProgress from 'nextjs-progressbar';
import Head from "next/head";
import {inter} from "@/system/utils";
import classNames from "classnames";
import React from "react";
import {
    Action,
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarResults,
    KBarSearch,
    useMatches
} from "kbar";
import MainNavbar from "@/components/Navbar";

function RenderResults() {
    const {results} = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({item, active}) =>
                typeof item === "string" ? (
                    <div>{item}</div>
                ) : (
                    <div
                        style={{
                            background: active ? "#eee" : "transparent",
                        }}
                    >
                        {item.name}
                    </div>
                )
            }
        />
    );
}

export default function App({Component, pageProps}: AppProps) {
    const kbarActions: Action[] = [
        {
            id: 'mods',
            name: 'Mods',
            perform: () => alert("test"),
        }
    ];

    return (
        <>
            <Head>
                <meta name="description" content="Awakened Redstone's website"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/redstone_border.png"/>
            </Head>
            <ThemeProvider attribute="class">
                <NextUIProvider>
                    <KBarProvider actions={kbarActions}>
                        <KBarPortal>
                            <KBarPositioner>
                                <KBarAnimator>
                                    <KBarSearch/>
                                    <RenderResults/>
                                </KBarAnimator>
                            </KBarPositioner>
                        </KBarPortal>
                        <NextNProgress color={"#f00"} stopDelayMs={0} height={2} options={{ showSpinner: false, speed: 100 }}/>
                        {pageProps.navless ? null : <MainNavbar/>}
                        <main
                            className={
                                classNames({
                                    [`${inter.variable} font-base min-h-[60vh] overflow-x-hidden`]: true,
                                    ["px-4 pt-4"]: !pageProps.borderless,
                                })
                            }
                        >
                            <Component {...pageProps} />
                        </main>
                        <Divider className="my-[10px] bg-[#3f3f46]"/>
                        <footer className={`${inter.variable} font-base px-4 pb-4 w-full text-center`}>
                            <div className={"mx-auto w-fit"}>
                                Redistribution of my content outside of Modrinth or Github is prohibited unless you have
                                my
                                explicit permission.
                            </div>
                            <div className={"mx-auto w-fit opacity-20"}>Awakened Redstone © {
                                new Date().getFullYear() === 2018 ? 2018 : `2018-${new Date().getFullYear()}`
                            }</div>
                        </footer>
                    </KBarProvider>
                </NextUIProvider>
            </ThemeProvider>
        </>
    )
}
