import Link from 'next/link';
import { ArrowBendUpLeft } from 'phosphor-react';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    return (
        <header className={"w-full h-14 bg-[#1155cc] px-2 sm:px-10 flex justify-center items-center"}>
            <Link
                href="/"
                className={`${router.pathname === "/" && "hidden"} mr-auto h-max w-max px-1.5 rounded-full bg-white brightness-90 hover:brightness-1 duration-500 ease-out`}
            >
                <ArrowBendUpLeft size={25} color="rgb(212 212 216)" weight="fill" />
            </Link>

            <h5
                className={`text-white text-xl text-center ${router.pathname !== "/" && "mr-auto"}`}
            >
                RELATÓRIO REDES DE AGENTE
            </h5>
        </header>
    )
}