import Link from "next/link"

import { NavBarLink } from "@/components/nav-bar-link"

export function NavBar() {
    return (
        <div className="flex justify-between items-center px-20 small:px-10 w-full h-16 fade-down">
            <Link href="/">
                <span>logo</span>
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