import classNames from "classnames";
import Link from "next/link";
import FabricLogo from "@/components/FabricLogo";
import {SiModrinth} from "react-icons/si";
import {HiExternalLink} from "react-icons/hi";
import {FaDiscord, FaGithub, FaRegCopyright} from "react-icons/fa";
import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Tooltip} from "@nextui-org/react";
import {defaultClasses, inter} from "@/system/utils";
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "@/components/Logo";
import {Image} from "@nextui-org/image";
import React from "react";
import {TbHome} from "react-icons/all";

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link}`
}

function MobileNav(props: { showMobileNav: boolean }) {
    return (
        <div id={"mobile-navbar"} className={
            classNames({
                ["w-full h-full absolute top-0 left-0 lmd:hidden bg:red-100 z-[49] transition-all pt-[6rem] px-4"]: true,
                ["bg-[#e5e7eb] dark:bg-[#13141a]"]: true,
                ["flex flex-col text-center text-xl gap-2"]: true,
                ["left-[-101%]"]: !props.showMobileNav,
            })
        }>
            <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`}
                  href={"/"}>
                <TbHome/>&nbsp;Home
            </Link>
            <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`}
                  href={"/mods"}>
                <FabricLogo/>&nbsp;Mods
            </Link>
            <Link
                className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl text-brand-modrinth`}
                href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                <SiModrinth/>&nbsp;Modrinth&nbsp;<HiExternalLink/>
            </Link>
            <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`}
                  href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                <FaGithub/>&nbsp;Github&nbsp;<HiExternalLink/>
            </Link>
            <Link className={`${classes.navLinkContent} min-h-[5rem] !text-4xl justify-center !rounded-2xl`}
                  href={"https://discord.gg/MTqsjwMpN2"} target={"_blank"}>
                <FaDiscord/>&nbsp;Discord&nbsp;<HiExternalLink/>
            </Link>
            <div className={""}>
                <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                    <div
                        className={`${defaultClasses.link} min-h-[5rem] !text-4xl !rounded-2xl px-[0.5rem] py-[0.15rem] opacity-50 hover:opacity-50 cursor-no-drop`}>
                        <FaRegCopyright/>&nbsp;License
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

function MainNav(props: { showMobileNav: boolean, setShowMobileNav: (show: boolean) => void }) {
    return (
        <Navbar maxWidth={"xl"} className={`${inter.variable} font-base border-none`} shouldHideOnScroll
                position={"floating"}>
            <NavbarContent className={"lmd:hidden h-4"}>
                <NavbarItem
                    className={`${classes.navLinkContent} ml-[-0.5rem] !px-3 cursor-pointer`}
                    as={Button}
                    onPress={() => props.setShowMobileNav(!props.showMobileNav)}
                >
                    <GiHamburgerMenu/>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand className={"xl:w-full w-fit sm:mr-0 mr-[-1rem]"}>
                <Link href={"/"} className={classes.navLinkContent}><Logo width={230} height={23}/></Link>
            </NavbarBrand>
            <NavbarContent className={"hidden lmd:flex gap-1 !justify-center"}>
                <NavbarItem className={classes.navLinkContent} as={Link} href={"/mods"}>
                    <FabricLogo width={16.285715} height={18}/>&nbsp;Mods
                </NavbarItem>
                <NavbarItem className={`${classes.navLinkContent} text-brand-modrinth`} as={Link}
                            href={"https://modrinth.com/user/Awakened-Redstone"} target={"_blank"}>
                    <SiModrinth/>&nbsp;Modrinth&nbsp;<HiExternalLink/>
                </NavbarItem>
                <NavbarItem className={classes.navLinkContent} as={Link}
                            href={"https://github.com/Awakened-Redstone"} target={"_blank"}>
                    <FaGithub/>&nbsp;Github&nbsp;<HiExternalLink/>
                </NavbarItem>
                <NavbarItem className={classes.navLinkContent} as={Link}
                            href={"https://discord.gg/MTqsjwMpN2"} target={"_blank"}>
                    <FaDiscord/>&nbsp;Discord&nbsp;<HiExternalLink/>
                </NavbarItem>
                <NavbarItem className={""}>
                    <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                        <div
                            className={`${defaultClasses.link} px-[0.5rem] py-[0.15rem] opacity-50 hover:opacity-50 cursor-no-drop`}>
                            <FaRegCopyright/>&nbsp;License
                        </div>
                    </Tooltip>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className={"hidden lg:flex !justify-end"}>
                <NavbarItem className={"rounded-full kofi-glow"}>
                    <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"}>
                        <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={"kofi-glow"}>
                            <Image src={"/assets/Ko-fi_Icon_RGB_rounded.png"} alt={"Donate at Ko-Fi"} width={32}
                                   height={32}/>
                        </Link>
                    </Tooltip>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default function MainNavbar({showMobileNav, setShowMobileNav}: { showMobileNav: boolean, setShowMobileNav: (show: boolean) => void}) {
    return (
        <>
            <MobileNav showMobileNav={showMobileNav}/>
            <MainNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
        </>
    )
}