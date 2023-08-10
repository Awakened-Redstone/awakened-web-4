import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {
    Button,
    Divider,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NextUIProvider,
    Tooltip
} from "@nextui-org/react";
import {Inter} from 'next/font/google'
import Logo from "@/components/Logo";
import {link} from "@nextui-org/theme"
import {SiModrinth} from "react-icons/si";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaGithub, FaRegCopyright} from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi";
import FabricLogo from "@/components/FabricLogo";
import Head from "next/head";
import Link from "next/link";
import {Image} from "@nextui-org/image";
import {defaultClasses, inter} from "@/system/utils";
import classNames from "classnames";
import React, {useEffect, useState} from "react";
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
import {useRouter} from "next/router";

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

function Loading() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return loading ? (<div>Loading....{/*I have an animation here*/}</div>) : null;
}

export default function App({Component, pageProps}: AppProps) {
    const [showMobileNav, setShowMobileNav] = React.useState(false);

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
                        <Loading/>
                        {pageProps.navless ? null : <MainNavbar setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav}/>}
                        <main
                            className={
                                classNames({
                                    [`${inter.variable} font-base min-h-[60vh] overflow-x-hidden`]: true,
                                    ["px-4 pt-4"]: !pageProps.borderless,
                                    ["hidden lmd:block"]: showMobileNav && !pageProps.navless,
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
