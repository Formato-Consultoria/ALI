import { ReactNode } from "react";
import NavBar from "./navbar";
import { useRouter } from 'next/router'

interface Props {
    children: ReactNode,
    className?: string
}

export default function Layout({ children, className }: Props) {
    const router = useRouter();
    const { report } = router.query;

    return (
        <div className={className}>
            <NavBar />
            <div
                style={{ width: '100%', height: `${(report === undefined) ? "auto" : "calc(100vh - 56px)"}` }} // 
                className={"flex flex-col items-center justify-center relative scroll-auto"}
            >
                {children}
            </div>
        </div>
    )
}
