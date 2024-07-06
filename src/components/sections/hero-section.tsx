import { HeroText } from "@/components/hero-text"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="flex flex-col justify-center items-center gap-8 h-[calc(100vh-64px)] text-center">
            <p className="w-full text-center text-lg">
                Hello 👋, I&apos;m João Santiago
            </p>

            <h1 className="w-[800px] medium:w-[500px] small:max-w-[320px] font-bold text-6xl small:text-2xl medium:text-4xl leading-tight">
                Turning ideas
                
                into real life products is <HeroText>my calling.</HeroText>
            </h1>

            <div className="flex small:flex-col gap-3">
                <Button className="px-10 h-12">
                    Get in touch with me
                </Button>

                <Button className="px-10 h-12" variant="secondary">
                    See my work
                </Button>
            </div>
        </section>
    )
}