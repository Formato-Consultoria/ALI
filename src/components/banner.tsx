import Link from "next/link"
import Image from "next/image"
import { convertStringToSlug } from "@/utils/convert-string-to-slug"

interface Porps {
    src: string,
    content: string
    classNameLink?: string,
    classNameImg?: string
}

export default function BannerLink({ src, content, classNameLink, classNameImg}: Porps) {
    return (
        <Link
            href={convertStringToSlug(content)}
            className={`${classNameLink} group ring-1 ring-white relative rounded`}
        >
            <Image
                src={src}
                fill
                alt={content}
                className={`${classNameImg} object-cover w-full h-full rounded duration-500 ease-out`}
            />

            <div className="hidden group-hover:flex items-center justify-center rounded duration-500 ease-out absolute z-50 top-0 w-full h-full bg-black opacity-60">
                <p className={"text-2xl text-white"}>{content}</p>
            </div>
        </Link>
    )
}