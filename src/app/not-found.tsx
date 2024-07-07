import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
    return (
        <div className="flex flex-col justify-center items-center gap-8 h-[calc(100vh-64px)]">
            <div className="space-y-3">
                <h1 className="font-bold text-9xl">
                    404
                </h1>

                <p>
                    Oooops, this page does not exist.
                </p>
            </div>

            <Link href="/">
                <Button className="px-10 h-12">
                    Go back to home
                </Button>
            </Link>
        </div>
    )
}