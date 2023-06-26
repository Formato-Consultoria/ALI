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
            <div
                style={{ width: '100%', height: 'calc(100vh - 56px)' }}
                className={"flex flex-col items-center justify-center relative scroll-auto"}
            >
                {children}
            </div>
        </div>
    )
}
