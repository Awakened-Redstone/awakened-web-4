import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";
import {Button, Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem, NextUIProvider, Tooltip} from "@nextui-org/react";
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
import {defaultClasses} from "@/system/utils";
import classNames from "classnames";
import React from "react";

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link}`
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function App({Component, pageProps}: AppProps) {
    const [showMobileNav, setShowMobileNav] = React.useState(false);
    const navbar = (
        <>
            <div id={"mobile-navbar"} className={
                classNames({
                    ["w-full h-full absolute top-0 left-0 md:hidden bg:red-100 z-[49] transition-all pt-[6rem] px-4"]: true,
                    ["bg-[#e5e7eb] dark:bg-[#13141a]"]: true,
                    ["flex flex-col text-center text-xl gap-2"]: true,
                    ["left-[-101%]"]: !showMobileNav,
                })
            }>
                <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`} href={"/mods"}>
                    <FabricLogo width={"auto"} height={"2.25rem"}/>&nbsp;Mods
                </Link>
                <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl text-brand-modrinth`} href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                    <SiModrinth/>&nbsp;Modrinth&nbsp;<HiExternalLink/>
                </Link>
                <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`} href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                    <FaGithub/>&nbsp;Github&nbsp;<HiExternalLink/>
                </Link>
                <div className={""}>
                    <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                        <div className={`${defaultClasses.link} min-h-[5rem] !text-4xl !rounded-2xl px-[0.5rem] py-[0.15rem] opacity-50 hover:opacity-50 cursor-no-drop`}>
                            <FaRegCopyright/>&nbsp;License
                        </div>
                    </Tooltip>
                </div>
            </div>
            <Navbar maxWidth={"xl"} className={`${inter.variable} font-base border-none`} shouldHideOnScroll position={"floating"}>
                <NavbarContent className={"md:hidden h-4"}>
                    <NavbarItem className={`${classes.navLinkContent} sm:ml-0 ml-[-1rem] !px-3 cursor-pointer`} as={Button} onPress={() => setShowMobileNav(!showMobileNav)}>
                        <GiHamburgerMenu/>
                    </NavbarItem>
                </NavbarContent>
                <NavbarBrand className={"lg:w-full w-fit sm:mr-0 mr-[-1rem]"}>
                    <Link href={"/"} className={classes.navLinkContent}><Logo width={230} height={23}/></Link>
                </NavbarBrand>
                <NavbarContent className={"hidden md:flex gap-1 !justify-center"}>
                    <NavbarItem className={classes.navLinkContent} as={Link} href={"/mods"}>
                        <FabricLogo width={16.285715} height={18}/>&nbsp;Mods
                    </NavbarItem>
                    <NavbarItem className={`${classes.navLinkContent} text-brand-modrinth`} as={Link} href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                        <SiModrinth/>&nbsp;Modrinth&nbsp;<HiExternalLink/>
                    </NavbarItem>
                    <NavbarItem className={classes.navLinkContent} as={Link} href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                        <FaGithub/>&nbsp;Github&nbsp;<HiExternalLink/>
                    </NavbarItem>
                    <NavbarItem className={""}>
                        <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                            <div className={`${defaultClasses.link} px-[0.5rem] py-[0.15rem] opacity-50 hover:opacity-50 cursor-no-drop`}>
                                <FaRegCopyright/>&nbsp;License
                            </div>
                        </Tooltip>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent className={"hidden lg:flex !justify-end"}>
                    <NavbarItem className={"rounded-full kofi-glow"}>
                        <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"}>
                            <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={"kofi-glow"}>
                                <Image src={"/assets/Ko-fi_Icon_RGB_rounded.png"} alt={"Donate at Ko-Fi"} width={32} height={32}/>
                            </Link>
                        </Tooltip>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );

    return (
        <>
            <Head>
                <meta name="description" content="Awakened Redstone's website"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/redstone_border.png"/>
            </Head>
            <ThemeProvider attribute="class">
                <NextUIProvider>
                    {pageProps.navless ? null : navbar}
                    <main className={
                        classNames({
                            [`${inter.variable} font-base min-h-[60vh]`]: true,
                            ["px-4 pt-4"]: !pageProps.borderless,
                            ["hidden"]: showMobileNav,
                        })
                    }>
                        <Component {...pageProps} />
                    </main>
                    <Divider className="my-[10px] bg-[#3f3f46]"/>
                    <footer className={`${inter.variable} font-base px-4 pb-4 w-full`}>
                        <div className={"mx-auto w-fit"}>
                            Redistribution of my content outside of Modrinth or Github is prohibited unless you have my
                            explicit permission.
                        </div>
                        <div className={"mx-auto w-fit opacity-20"}>Awakened Redstone © {
                            new Date().getFullYear() === 2018 ? 2018 : `2018-${new Date().getFullYear()}`
                        }</div>
                    </footer>
                </NextUIProvider>
            </ThemeProvider>
        </>
    )
}
