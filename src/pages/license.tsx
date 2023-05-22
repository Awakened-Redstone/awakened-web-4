import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import React from "react";
import {Button} from "@nextui-org/react";
import {FiCopy, FiDownload} from "react-icons/fi";
import * as fs from "fs";

export function getServerSideProps() {
    return {props: {license: String(fs.readFileSync("./src/system/license"))}}
}

export default function License({license}: { license: string}) {
    return (
        <>
            <Head>
                <title>License - Awakened Redstone</title>
            </Head>

            <main className={`${styles.main} max-w-[1400px] mx-auto`}>
                <div className={"flex gap-2 mx-auto w-fit mb-2"}>
                    <Button><FiDownload/>&nbsp;Download</Button>
                    <Button><FiCopy/>&nbsp;Copy</Button>
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
