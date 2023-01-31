import { IframeProps } from '@/@Types/iframes';
import { PBI } from '@/content/iframes';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import { convertStringToSlug } from '@/utils/change-name-format';
import Modal from './modal';
import { ArrowBendUpLeft, List, X } from 'phosphor-react';
import { useRouter } from 'next/router';

export default function NavBar() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [anchorCustommer, setAnchorCustommer] = useState<ReactElement[]>([]);

    const router = useRouter();

    const arrAnchorCustommer = PBI.map(({ name }: IframeProps, index) => (
        <li
            key={`${name}-${index}`}
            className={"text-lg font-medium h-full w-max px-3 text-white"}
        >
            <Link href={`/${convertStringToSlug(name)}`}>
                {name}
            </Link>
        </li>
    ));

    useEffect(() => {
        setAnchorCustommer(arrAnchorCustommer);
    }, [])

    const onClose = () => {
        setIsOpenModal(false);
    };

    const onOpen = () => {
        setIsOpenModal(true);
    };

    const onToggle = () => {
        setIsOpenModal(!isOpenModal);
    }

    return (
        <header className={"w-full h-14 bg-[#1155cc] px-10 flex justify-between items-center"}>
            <Link
                href="/"
                className={`${router.pathname === "/" && "hidden"} h-max w-max px-1.5 rounded-full bg-zinc-700 brightness-90 hover:brightness-1 duration-500 ease-out`}
            >
                <ArrowBendUpLeft size={25} color="rgb(212 212 216)" weight="fill" />
            </Link>

            <Image
                src="/image/ali_logotipo.png"
                height={50}
                width={50}
                alt="logotipo"
                className="object-contain sm:flex"
            />

            <nav className={"w-auto h-auto flex justify-between items-center my-auto sm:self-end"}>
                <ul className={"hidden lg:flex gap-3"}>
                    {anchorCustommer}
                </ul>

                <button
                    onClick={onToggle}
                    className={"lg:hidden text-white"}
                >
                    {isOpenModal ?  <X size={26} color="#FFF" /> : <List size={26} color="#FFF"/>}
                </button>

                <Modal
                    onClose={onClose}
                    onOpen={onOpen}
                    isOpen={isOpenModal}
                />
            </nav>
        </header>
    )
}