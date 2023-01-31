import Link from "next/link"
import Image from "next/image"

interface Porps {
    src: string,
    href: string
    classNameLink?: string,
    classNameImg?: string
}

export default function BannerLink({ src, href, classNameLink, classNameImg}: Porps) {
    return (
        <Link
            href={href}
            className={`${classNameLink} ring-1 ring-zinc-700 relative rounded-lg`}
            target={"_blank"}
        >
            <Image
                src={src}
                fill
                alt={"ALI Banner Image"}
                className={`${classNameImg} object-cover w-full h-full rounded-lg brightness-95 hover:brightness-100 duration-500 ease-out`}
            />
        </Link>
    )
}