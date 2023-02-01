import Link from 'next/link';
import { ArrowBendUpLeft } from 'phosphor-react';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();

    return (
        <header className={"w-full h-14 bg-[#1155cc] px-10 flex justify-center items-center"}>
            <Link
                href="/"
                className={`${router.pathname === "/" && "hidden"} self-start h-max w-max px-1.5 rounded-full bg-white brightness-90 hover:brightness-1 duration-500 ease-out`}
            >
                <ArrowBendUpLeft size={25} color="rgb(212 212 216)" weight="fill" />
            </Link>

            <h5
                className={"text-white mx-auto text-xl h-10 my-2.5 text-center"}
            >
                RELATÓRIO REDES DE AGENTE
            </h5>
        </header>
    )
}