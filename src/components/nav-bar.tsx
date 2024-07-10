import Link from "next/link"

import { NavBarLink } from "@/components/nav-bar-link"
import Image from "next/image"

export function NavBar() {
    return (
        <div className="flex justify-between items-center px-20 small:px-10 w-full h-16 fade-down">
            <Link href="/">
                <Image
                    alt=""
                    src="/logo.png"
                    width={48}
                    height={48}
                    priority
                    quality={100}
                    className="rounded-lg"
                />
            </Link>

            <nav className="flex gap-3">
                <NavBarLink href="/">
                    Home
                </NavBarLink>

                <NavBarLink href="/archive">
                    Archive
                </NavBarLink>
            </nav>
        </div>
    )
}