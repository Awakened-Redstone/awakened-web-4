import Link from "next/link";
import FabricLogo from "@/components/FabricLogo";
import {SiModrinth} from "react-icons/si";
import {HiExternalLink} from "react-icons/hi";
import {FaDiscord, FaGithub, FaRegCopyright} from "react-icons/fa";
import {TbHome} from "react-icons/tb";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuToggle,
    Tooltip
} from "@nextui-org/react";
import {defaultClasses, inter} from "@/system/utils";
import Logo from "@/components/Logo";
import {Image} from "@nextui-org/image";
import React from "react";
import {TooltipProps} from "@nextui-org/tooltip/dist/tooltip";

const classes = {
    navLinkContent: `${defaultClasses.navContent} ${defaultClasses.link}`
}

interface MenuItem {
    content: string | React.ReactNode
    wrapper?: (content: React.ReactNode) => React.ReactNode
    key: string
    href: string
    external?: boolean
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    mobileOnly?: boolean
    className?: string
    as?: React.ElementType
    disabled?: boolean
}

const items: MenuItem[] = [
    {
        content: "Home",
        key: "home",
        href: "/",
        prefix: <TbHome/>,
        mobileOnly: true,
        as: Link
    },
    {
        content: "Mods",
        key: "mods",
        href: "/mods",
        prefix: <FabricLogo width={16.285715} height={18}/>,
        as: Link
    },
    {
        content: "Modrinth",
        key: "modrinth",
        href: "https://github.com/Awakened-Redstone",
        external: true,
        prefix: <SiModrinth/>,
        suffix: <HiExternalLink/>,
        className: "text-brand-modrinth",
        as: Link
    },
    {
        content: "Github",
        key: "github",
        href: "https://github.com/Awakened-Redstone",
        external: true,
        prefix: <FaGithub/>,
        suffix: <HiExternalLink/>,
        as: Link
    },
    {
        content: "Discord",
        key: "discord",
        href: "https://discord.gg/MTqsjwMpN2",
        external: true,
        prefix: <FaDiscord/>,
        suffix: <HiExternalLink/>,
        as: Link
    },
    {
        content: "License",
        wrapper: (content) => (
            <Tooltip content={"🚧 In development"} showArrow placement={"bottom"}>
                <div className={`${defaultClasses.link}`}>
                    {content}
                </div>
            </Tooltip>
        ),
        key: "license",
        href: "https://discord.gg/MTqsjwMpN2",
        external: true,
        prefix: <FaRegCopyright/>,
        className: "opacity-50 hover:opacity-50 cursor-no-drop",
        disabled: true
    }
];

function buildNavItem(item: MenuItem) {
    const component = (
        <NavbarItem className={`${classes.navLinkContent} ${item.className ?? ""}`} as={item.as}
                    href={item.href} key={item.key}>
            {(() => {
                const itemContent = <>{item.prefix}{item.prefix && <>&nbsp;</>}{item.content}{item.suffix && <>&nbsp;</>}{item.suffix}</>;

                return item.wrapper ? item.wrapper(itemContent) : itemContent;
            })()}
        </NavbarItem>
    );

    //Build optional props
    const props: any = {}
    if (item.as) props["as"] = item.as;
    if (item.href) props["href"] = item.href;
    if (item.external) props["target"] = "_blank";
    if (item.disabled != null) props["disabled"] = item.disabled;

    React.cloneElement(component, props);

    return component;
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
                    wrapper: "mt-4 rounded-xl shadow-medium",
                }}
            >
                <NavbarContent className={"lmd:hidden h-4"}>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>

                <NavbarBrand className={"xl:w-full w-fit sm:mr-0 mr-[-1rem]"}>
                    <Link href={"/"} className={classes.navLinkContent}><Logo width={230} height={23}/></Link>
                </NavbarBrand>

                <NavbarContent className={"hidden lmd:flex gap-1 !justify-center"}>
                    {items.map((item, index) => item.mobileOnly ? null : buildNavItem(item))}
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

                <NavbarMenu>
                    {items.map((item, index) => buildNavItem(item))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}