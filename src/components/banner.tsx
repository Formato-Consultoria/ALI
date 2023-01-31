import Link from "next/link"
import Image from "next/image"

interface Porps {
    src: string,
    href: string
    className?: string,
}

export default function BannerLink({ src, href, className}: Porps) {
    return (
        <Link
            href={href}
            className={`ring-1 ring-zinc-700 relative rounded-lg ${className}`}
            target={"_blank"}
        >
            <Image
                src={src}
                fill
                alt={"ALI Banner Image"}
                className={"object-cover w-full h-full rounded-lg brightness-95 hover:brightness-100 duration-500 ease-out"}
            />
        </Link>
    )
}