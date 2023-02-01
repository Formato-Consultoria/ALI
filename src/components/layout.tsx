import { ReactNode } from "react";
import NavBar from "./navbar";

interface Props {
    children: ReactNode,
    className?: string
}

export default function Layout({ children, className }: Props) {
    return (
        <div className={className}>
            <NavBar />
            <div className={"w-full h-full sm:w-11/12 sm:mx-auto flex flex-col items-center justify-center relative scroll-auto"}>
                {children}
            </div>
        </div>
    )
}