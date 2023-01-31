import { ReactNode } from "react";
import NavBar from "./navbar";

import style from "@/styles/home.module.css"

interface Props {
    children: ReactNode,
    className?: string
}

export default function Layout({ children, className }: Props) {
    return (
        <div className={className}>
            <NavBar />
            <div className={`w-full sm:w-10/12 mx-auto flex items-center justify-center relative bg-black ${style.containerContent}`}>
                {children}
            </div>
        </div>
    )
}