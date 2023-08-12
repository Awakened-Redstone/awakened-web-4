import Link from "next/link";
import FabricLogo from "@/components/FabricLogo";
import {SiModrinth} from "react-icons/si";
import {HiExternalLink} from "react-icons/hi";
import {FaDiscord, FaGithub, FaRegCopyright} from "react-icons/fa";
import {TbHome} from "react-icons/tb";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Tooltip
} from "@nextui-org/react";
import {defaultClasses, inter} from "@/system/utils";
import Logo from "@/components/Logo";
import {Image} from "@nextui-org/image";
import React from "react";
import {ThemeToggle} from "@/components/ThemeSwitcher";

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link} text-size-inherit`
}

function buildDefaultWrapper(href: string, external?: boolean): (content: React.ReactNode) => React.ReactNode {
    return (content: React.ReactNode) => {
        const component = (
            <Link className={classes.navLinkContent} href={href}>
                {content}
            </Link>
        )

        const props: any = {}
        if (external) props["target"] = "_blank"

        return React.cloneElement(component, props);
    }
}

interface MenuItem {
    content: string | React.ReactNode
    wrapper?: (content: React.ReactNode) => React.ReactNode
    key: string
    prefix?: React.ReactNode | ((mobile: boolean) => React.ReactNode)
    suffix?: React.ReactNode | ((mobile: boolean) => React.ReactNode)
    mobileOnly?: boolean
    className?: string
    disabled?: boolean
}

const items: MenuItem[] = [
    {
        content: "Home",
        wrapper: buildDefaultWrapper("/"),
        key: "home",
        prefix: <TbHome/>,
        mobileOnly: true
    },
    {
        content: "Mods",
        wrapper: buildDefaultWrapper("/mods"),
        key: "mods",
        prefix: (mobile) => <FabricLogo className={mobile ? "" : "w-5 h-5"}/>
    },
    {
        content: "Modrinth",
        wrapper: buildDefaultWrapper("https://modrinth.com/user/AwakenedRedstone", true),
        key: "modrinth",
        prefix: <SiModrinth/>,
        suffix: <HiExternalLink/>,
        className: "text-brand-modrinth"
    },
    {
        content: "Github",
        wrapper: buildDefaultWrapper("https://github.com/Awakened-Redstone", true),
        key: "github",
        prefix: <FaGithub/>,
        suffix: <HiExternalLink/>
    },
    {
        content: "Discord",
        wrapper: buildDefaultWrapper("https://discord.gg/MTqsjwMpN2", true),
        key: "discord",
        prefix: <FaDiscord/>,
        suffix: <HiExternalLink/>
    },
    {
        content: "License",
        wrapper: (content) => (
            <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                <div className={`${classes.navLinkContent}`}>
                    {content}
                </div>
            </Tooltip>
        ),
        key: "license",
        prefix: <FaRegCopyright/>,
        className: "opacity-50 hover:opacity-50 cursor-no-drop",
        disabled: true
    }
];

function buildNavItem(item: MenuItem, node: React.FunctionComponent<any>, mobile: boolean = false): React.ReactElement | null {
    const prefix = typeof item.prefix === "function" ? item.prefix(mobile) : item.prefix;
    const suffix = typeof item.suffix === "function" ? item.suffix(mobile) : item.suffix;

    const createChildren = () => {
        const itemContent = <>{prefix}{prefix && <>&nbsp;</>}{item.content}{suffix && <>&nbsp;</>}{suffix}</>;
        return item.wrapper ? item.wrapper(itemContent) : itemContent;
    };

    const component = React.createElement(node, {
        className: item.className ?? "",
        key: item.key
    }, createChildren());

    //Build optional props
    const props: any = {}
    if (item.disabled != null) props["disabled"] = item.disabled;

    return (item.mobileOnly && !mobile) ? null : React.cloneElement(component, props);
}

export default function MainNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <Navbar
                maxWidth={"xl"}
                className={`${inter.variable} font-base bg-transparent`}
                isBordered={false}
                isBlurred={false}
                shouldHideOnScroll
                position={"sticky"}
                onMenuOpenChange={setIsMenuOpen}
                classNames={{
                    wrapper: "mt-4 rounded-xl shadow-medium mx-2 xl:mx-0",
                    menu: [
                        "pt-24",
                        "supports-[backdrop-filter]:bg-background/80",
                        "dark:supports-[backdrop-filter]:bg-background/50",
                        "supports-[backdrop-filter]:backdrop-blur-md",
                        "supports-[backdrop-filter]:backdrop-saturate-150",
                    ],
                    menuItem: [
                        "text-center items-center justify-center",
                        "dark:supports-[backdrop-filter]:bg-background/70",
                        "text-3xl shadow-medium h-auto",
                        "py-2 rounded-2xl",
                    ],
                }}
            >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lmd:hidden"
                />

                <NavbarBrand>
                    <div className={"xl:w-full w-fit sm:mr-0 mr-[-1rem] ml-auto lmd:ml-0"}>
                        <Link href={"/"} className={classes.navLinkContent}><Logo width={230} height={23}/></Link>
                    </div>
                </NavbarBrand>

                <NavbarContent className={"hidden lmd:flex gap-1 !justify-center"}>
                    {items.map((item, index) => buildNavItem(item, NavbarItem))}
                </NavbarContent>

                <NavbarContent className={"hidden lmd:flex !justify-end"}>
                    <NavbarItem className={"rounded-full py-[0.125rem] kofi-glow hidden lg:flex"}>
                        <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"}>
                            <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={""}>
                                <div className={`${classes.navLinkContent} !flex`}>
                                    <Image src={"/assets/kofi_logo_nolabel.webp"} alt={"Donate at Ko-Fi"} width={24}
                                           height={24} radius={"none"} className={"min-h-[1.5rem] min-w-[1.5rem]"}/>
                                    &nbsp;Donate
                                </div>
                            </Link>
                        </Tooltip>
                    </NavbarItem>
                    <NavbarItem>
                        <ThemeToggle panelClassName="mt-0"/>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className={"fake-nav-height"}>
                    {items.map((item, index) => buildNavItem(item, NavbarMenuItem, true))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}