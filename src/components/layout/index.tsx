import { ReactNode } from "react";
import NavBar from "../navbar";

interface Props {
    children: ReactNode,
    className?: string
}

export default function Layout({ children, className }: Props) {
    return (
        <div className={className}>
            <NavBar />
            {children}
        </div>
    )
}