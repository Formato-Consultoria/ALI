import { IframeProps } from '@/@Types/iframes';
import { PBI } from '@/content/iframes';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import { changeNameFormat } from '@/utils/change-name-format';
import Modal from './modal';
import { List, X } from 'phosphor-react';

export default function NavBar() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [anchorCustommer, setAnchorCustommer] = useState<ReactElement[]>([]);

    const arrAnchorCustommer = PBI.map(({ name }: IframeProps, index) => (
        <li
            key={`${name}-${index}`}
            className={"text-lg font-medium h-full w-max px-3 text-white"}
        >
            <Link href={`/${changeNameFormat(name)}`}>
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
        <header className={"w-full h-14 bg-purple-900 px-10 flex justify-between"}>
            <h5
                className={""}
            >Relatorio ALI Produtividade e Transformação digital</h5>

            <nav className={"w-auto h-auto flex justify-between items-center my-auto"}>
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