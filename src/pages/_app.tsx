import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {Divider, NextUIProvider,} from "@nextui-org/react";
import NextNProgress from 'nextjs-progressbar';
import Head from "next/head";
import {inter} from "@/system/utils";
import classNames from "classnames";
import React from "react";
import MainNavbar from "@/components/Navbar";
import {ThemeToggle} from "@/components/ThemeSwitcher";

function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </ThemeProvider>
    )
}

export default function App({Component, pageProps}: AppProps) {

    return (
        <>
            <Head>
                <title>Awakened Redstone</title>
                <meta name="description" content="Awakened Redstone's personal website. Here you can find more about me and my projects"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="twitter:card" content="summary"/>
                <meta property="og:image" content="/assets/redstone_border.png"/>
                <link rel="icon" href="/assets/redstone_border.png"/>
                <meta name="theme-color" content={"#d30808"}/>
            </Head>
            <Providers>
                <NextNProgress color={"#d30808"} stopDelayMs={0} height={2} options={{showSpinner: false, speed: 100}}/>
                {pageProps.navless ? null : <MainNavbar/>}
                <main
                    className={
                        classNames({
                            [`${inter.variable} font-base min-h-[80vh] overflow-x-hidden`]: true,
                            ["px-4 pt-4"]: !pageProps.borderless,
                        })
                    }
                >
                    <Component {...pageProps} />
                </main>
                <Divider className="my-[10px] bg-[#3f3f46]"/>
                <footer className={`${inter.variable} font-base px-4 pb-4 w-full text-center relative min-h-[10rem]`}>
                    <div className={"mx-auto w-fit"}>
                        Redistribution of my content outside of Modrinth or Github is prohibited unless you have
                        my explicit permission.
                    </div>
                    <div className={"mx-auto w-fit opacity-70 dark:opacity-30"}>Awakened Redstone © {
                        new Date().getFullYear() === 2018 ? 2018 : `2018-${new Date().getFullYear()}`
                    }</div>
                    <ThemeToggle className={`rounded-xl mt-4 mx-auto font-semibold py-2 h-auto w-full max-w-lg flex flex-row justify-center items-center shadow-medium`} showLabel/>
                </footer>
            </Providers>
        </>
    )
}
