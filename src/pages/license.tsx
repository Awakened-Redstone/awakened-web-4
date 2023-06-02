import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import React from "react";
import {Button} from "@nextui-org/react";
import {FiCopy, FiDownload} from "react-icons/fi";
import license from "/public/files/license";
import Link from "next/link";

export default function License() {
    return (
        <>
            <Head>
                <title>License - Awakened Redstone</title>
            </Head>

            <main className={`${styles.main} max-w-[1400px] mx-auto`}>
                <div className={"flex gap-2 mx-auto w-fit mb-2"}>
                    <Link href={"/files/license"} download={"License"}><Button><FiDownload/>&nbsp;Download</Button></Link>
                    <Button onPress={() => navigator.clipboard.writeText(license)}><FiCopy/>&nbsp;Copy</Button>
                </div>
                <Card>
                    <CardHeader>The license</CardHeader>
                    <CardBody className={"whitespace-pre-wrap"}>
                        {license}
                    </CardBody>
                </Card>
            </main>
        </>
    )
}
