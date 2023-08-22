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
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link} text-size-inherit`,
    mobileNavLinkContent: `${defaultClasses.link} hover:bg-[#aaaaaa10] font-semibold text-size-inherit w-full h-full py-2 rounded-2xl text-center justify-center items-center`,
}

const backdropClasses: string = [
    "supports-[backdrop-filter]:bg-background/80",
    "dark:supports-[backdrop-filter]:bg-background/70",
    "supports-[backdrop-filter]:backdrop-blur-md",
    "supports-[backdrop-filter]:backdrop-saturate-150"
].join(" ");

function getLinkClasses(mobile: boolean): string {
    return mobile ? classes.mobileNavLinkContent : classes.navLinkContent
}

function buildDefaultWrapper(href: string, external?: boolean): (mobile: boolean, content: React.ReactNode) => React.ReactNode {
    return (mobile: boolean, content: React.ReactNode) => {
        const component = (
            <Link className={getLinkClasses(mobile)} href={href}>
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
    wrapper?: (mobile: boolean, content: React.ReactNode) => React.ReactNode,
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
        wrapper: buildDefaultWrapper("https://modrinth.com/user/Awakened-Redstone", true),
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
        wrapper: (mobile, content) => (
            <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                <div className={getLinkClasses(mobile)}>
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
        return item.wrapper ? item.wrapper(mobile, itemContent) : itemContent;
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
                    wrapper: "mt-4 rounded-xl shadow-medium mx-2 xl:mx-0 bg-[#f4f4f4] dark:bg-[#0e0f14]",
                    menuItem: [
                        "text-center items-center justify-center",
                        "dark:bg-[#aaaaaa08]",
                        "dark:hover:bg-[#aaaaaa1a]",
                        "text-3xl shadow-medium h-auto",
                        "rounded-2xl",
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
                    {items.map((item) => buildNavItem(item, NavbarItem))}
                </NavbarContent>

                <NavbarContent className={"hidden lmd:flex !justify-end"}>
                    <NavbarItem className={"rounded-full kofi-glow hidden lg:flex"}>
                        <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"}>
                            <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={`${classes.navLinkContent} h-full !py-1 dark:hover:bg-[#00000020] transition-background`}>
                                <div className={"!flex"}>
                                    <Image src={"/assets/kofi_logo_nolabel.webp"} alt={"Donate at Ko-Fi"} width={24}
                                           height={24} radius={"none"} className={"min-h-[1.5rem] min-w-[1.5rem]"}/>
                                    &nbsp;Donate
                                </div>
                            </Link>
                        </Tooltip>
                    </NavbarItem>
                    <NavbarItem>
                        <ThemeToggle/>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu className={"fake-nav-height"}>
                    <span className={"pt-20 bg-transparent"}/>
                    {items.map((item) => buildNavItem(item, NavbarMenuItem, true))}
                    <div className={"my-3"}/>
                    <NavbarMenuItem className={"rounded-xl py-[0.125rem] kofi-glow min-h-[3.25rem]"}>
                        <Tooltip content={"Buy me a coffee"} showArrow placement={"bottom"}>
                            <Link href={"https://ko-fi.com/awakenedredstone"} target={"_blank"} className={""}>
                                <div className={`${classes.mobileNavLinkContent} !flex h-full justify-center items-center`}>
                                    <Image src={"/assets/kofi_logo_nolabel.webp"} alt={"Donate at Ko-Fi"} width={24}
                                           height={24} radius={"none"} className={"min-h-[1.5rem] min-w-[1.5rem]"}/>
                                    &nbsp;Donate
                                </div>
                            </Link>
                        </Tooltip>
                    </NavbarMenuItem>
                    <NavbarMenuItem className={"p-0 !bg-transparent shadow-none backdrop-blur-0"}>
                        <ThemeToggle className={`${getLinkClasses(true)} rounded-xl font-semibold py-2 h-auto w-full flex flex-row justify-center items-center shadow-medium`} showLabel/>
                    </NavbarMenuItem>
                    <div className={"my-2"}/>
                </NavbarMenu>
            </Navbar>
        </>
    )
}