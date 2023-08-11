import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import React from "react";
import {Button} from "@nextui-org/react";
import {FiCopy, FiDownload} from "react-icons/fi";
import license from "/public/files/license";
import Link from "next/link";
import {useDebouncedCallback} from "use-debounce";

export default function License() {
    const [copied, setCopied] = React.useState(false);

    const setCopiedText = useDebouncedCallback(() => {
        setCopied(false);
    }, 3000);

    return (
        <>
            <Head>
                <title>License - Awakened Redstone</title>
                <meta name="robots" content="noindex,nofollow"/>
            </Head>

            <main className={`${styles.main} max-w-[1400px] mx-auto`}>
                <div className={"flex gap-2 mx-auto w-fit mb-2"}>
                    <Link href={"/files/license"}
                          download={"License"}><Button><FiDownload/>&nbsp;Download</Button></Link>
                    <Button
                        id={"copy-license-button"}
                        onPress={() => {
                            navigator.clipboard.writeText(license).then(r => {
                                const selection = window.getSelection() as Selection;
                                const headerElement = document.getElementById('license-content') as Element;
                                selection.setBaseAndExtent(headerElement, 0, headerElement, 1);

                                setCopied(true);
                                setCopiedText();
                            });
                        }}
                        className={copied ? "bg-green-700" : ""}
                    >
                        <FiCopy/>&nbsp;
                        {copied ? "Copied!" : "Copy"}
                    </Button>
                </div>
                <Card>
                    <CardHeader className={"w-full text-[1.5rem] font-semibold border-b-1 border-solid"}>
                        <div className={"mx-auto w-fit"}>The license</div>
                    </CardHeader>
                    <CardBody className={"whitespace-pre-wrap"}>
                        <div id={"license-content"}>
                            {license}
                        </div>
                    </CardBody>
                </Card>
            </main>
        </>
    )
}
