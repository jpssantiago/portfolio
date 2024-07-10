import { SiLinkedin, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons"
import { Mail } from "lucide-react"
import Link from "next/link"

import { LINKED_IN, MAIL, GITHUB, INSTAGRAM } from "@/data/links"

export function SocialsLine() {
    return (
        <div className="small:relative bottom-0 left-16 medium:left-8 small:left-0 fixed flex flex-col small:items-center small:gap-5 small:mb-10">
            <div className="small:flex hidden">
                These are all my socials 👇
            </div>

            <div className="flex small:flex small:flex-row flex-col items-center gap-5">
                <Link href={LINKED_IN} className="text-zinc-500 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer">
                    <SiLinkedin
                        size={20}
                    />
                </Link>

                <Link href={MAIL} className="text-zinc-500 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer">
                    <Mail
                        size={20}
                    />
                </Link>

                <Link href={GITHUB} className="text-zinc-500 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer">
                    <SiGithub
                        size={20}
                    />
                </Link>

                <Link href={INSTAGRAM} className="text-zinc-500 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer">
                    <SiInstagram
                        size={20}
                    />
                </Link>

                <div className="small:hidden bg-zinc-500 w-px h-20" />
            </div>
        </div>
    )
}