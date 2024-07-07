import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons"
import { Mail } from "lucide-react"
import Link from "next/link"

import { LINKED_IN, MAIL, GITHUB } from "@/data/links"

export function SocialsLine() {
    return (
        <div className="bottom-0 left-16 fixed flex flex-col items-center gap-5">
            <Link href={LINKED_IN}>
                <SiLinkedin
                    size={20}
                    className="text-zinc-500 hover:text-white transition-all hover:-translate-y-1 cursor-pointer" 
                />
            </Link>

            <Link href={MAIL}>
                <Mail
                    size={20}
                    className="text-zinc-500 hover:text-white transition-all hover:-translate-y-1 cursor-pointer" 
                />
            </Link>

            <Link href={GITHUB}>
                <SiGithub
                    size={20}
                    className="text-zinc-500 hover:text-white transition-all hover:-translate-y-1 cursor-pointer" 
                />
            </Link>

            <div className="bg-zinc-500 w-px h-24" />
        </div>
    )
}