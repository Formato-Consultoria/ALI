import { IframeProps } from '@/@Types/iframes';
import { PBI } from '@/content/iframes';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import { changeNameFormat } from '@/utils/change-name-format';

export default function NavBar() {
    const [anchorCustommer, setAnchorCustommer] = useState<ReactElement[]>([]);

    const arrAnchorCustommer = PBI.map(({ name }: IframeProps) => (
        <Link
            href={`/${changeNameFormat(name)}`}
            className={"text-ml font-medium h-8 w-max px-3 rounded bg-purple-900 text-white ring-1 ring-white"}
        >
            <li>
                {name}
            </li>
        </Link>
    ));

    useEffect(() => {
        setAnchorCustommer(arrAnchorCustommer);
    }, [])

    return (
        <header className={"w-full h-14 bg-purple-900 px-10 flex justify-between"}>
            <Image
                src="/Logotipo_light.png"
                height={20}
                width={150}
                alt="logotipo"
                className="object-contain ml-10"
            />

            <nav className={"w-auto h-auto flex justify-between items-center my-auto"}>
                <ul className={"flex gap-4"}>
                    <Link href={"/"} className={"text-ml font-medium h-8 w-max px-3 rounded bg-purple-900 text-white ring-1 ring-white"}>
                        <li>Inicio</li>
                    </Link>
                    {anchorCustommer}
                </ul>
            </nav>
        </header>
    )
}