import { IframeProps } from "@/@Types/iframes";
import { PBI } from "@/content/iframes";
import { convertStringToSlug } from "@/utils/convert-string-to-slug";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

export default function Modal({ isOpen, onOpen, onClose }: ModalProps) {
    const [anchorCustommer, setAnchorCustommer] = useState<ReactElement[]>([]);

    const arrAnchorCustommer = PBI.map(({ name }: IframeProps, index) => (
        <li
            key={`${name}-${index}`}
            className={"text-lg font-medium text-black flex items-center justify-center w-full h-12"}
        >
            <Link
                onClick={onClose}
                href={`/${convertStringToSlug(name)}`}
            >
                {name}
            </Link>
        </li>
    ));

    useEffect(() => {
        setAnchorCustommer(arrAnchorCustommer);
    }, [])
    
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            as={'div'}
            className={"absolute z-50 top-14 w-full h-full bg-[rgba(255, 255, 255, 0.30)] backdrop-blur-sm ease-in duration-75"}
        >
            <Dialog.Panel className={"w-full min-h-full h-auto flex flex-col overflow-hidden"}>
                <ul className={"flex flex-col w-full mx-auto px-5 bg-white border-t border-t-solid border-t-slate-800"}>
                    {arrAnchorCustommer}
                </ul>
            </Dialog.Panel>
        </Dialog>
    )
}