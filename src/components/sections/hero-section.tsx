import Link from "next/link"

import { HeroText } from "@/components/hero-text"
import { MAIL } from "@/data/links"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 h-[calc(100vh-64px)] text-center fade-down">
            <p className="w-full text-center text-lg">
                Hello 👋, I&apos;m João Santiago.
            </p>

            <h1 className="w-[800px] medium:w-[480px] small:max-w-[320px] font-bold text-6xl small:text-2xl medium:text-4xl leading-tight">
                Turning ideas
                
                into real life <HeroText>products</HeroText> is my calling.
            </h1>

            <div className="flex small:flex-col gap-3">
                <Link href={MAIL}>
                    <Button className="px-10 h-12">
                        Get in touch with me
                    </Button>
                </Link>

                <Link href="#projects">
                    <Button className="px-10 h-12" variant="secondary">
                        See my work
                    </Button>
                </Link>
            </div>
        </section>
    )
}