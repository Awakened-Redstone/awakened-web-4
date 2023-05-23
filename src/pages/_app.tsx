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
import FabricLogo from "@/components/FabricLogo";
import Head from "next/head";
import Link from "next/link";
import {Image} from "@nextui-org/image";

const defaultClasses = {
    navContent: "font-semibold hover:bg-black dark:hover:bg-[#aaaaaa10] px-[0.5rem] py-[0.15rem] rounded-full",
    link: "relative inline-flex items-center outline-none data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-primary data-[focus-visible=true]:ring-offset-2 data-[focus-visible=true]:ring-offset-background data-[focus-visible=true]:dark:ring-offset-background-dark no-underline hover:opacity-80 transition-opacity text-base whitespace-nowrap box-border data-[active=true]:font-semibold",
}

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link}`
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta name="description" content="Awakened Redstone's website"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <ThemeProvider attribute="class">
                <NextUIProvider>
                    <Navbar maxWidth={"xl"} className={"border-none"} shouldHideOnScroll position={"floating"}>
                        <NavbarContent className={"md:hidden h-4"}>
                            <NavbarItem className={`${classes.navLinkContent} !px-3 cursor-pointer`} as={Button}>
                                <GiHamburgerMenu/>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarBrand className={"lg:w-full w-fit"}>
                            <Link href={"/"} className={classes.navLinkContent}><Logo width={230} height={23}/></Link>
                        </NavbarBrand>
                        <NavbarContent className={"hidden md:flex gap-1 !justify-center"}>
                            <NavbarItem className={classes.navLinkContent} as={Link} href={"/mods"}>
                                <FabricLogo width={16.285715} height={18}/>&nbsp;Mods
                            </NavbarItem>
                            <NavbarItem className={`${classes.navLinkContent} text-brand-modrinth`} as={Link} href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                                <SiModrinth/>&nbsp;Modrinth
                            </NavbarItem>
                            <NavbarItem className={classes.navLinkContent} as={Link}
                                        href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                                <FaGithub/>&nbsp;Github
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
                            <NavbarItem className={"bg-warning p-1 rounded-full"}>
                                <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"} defaultOpen>
                                    <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={""}>
                                        <Image src={"/Ko-fi_Icon_RGB_rounded.png"} alt={"Donate at Ko-Fi"} width={24} height={24}/>
                                    </Link>
                                </Tooltip>
                            </NavbarItem>
                        </NavbarContent>
                    </Navbar>
                    <main className={`${inter.variable} font-base min-h-[60vh] px-4 pt-4`}>
                        <Component {...pageProps} />
                    </main>
                    <Divider className="my-[10px] bg-[#3f3f46]"/>
                    <footer className={"px-4 pb-4 w-full"}>
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
