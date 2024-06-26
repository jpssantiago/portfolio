import { links } from "../_data/links-data"

export default function WelcomeSection() {
    return (
        <div className="h-full max-w-[1440px] mx-auto py-[120px] px-[220px] large:px-[100px] tablet:px-[50px] phone:px-[50px] flex flex-col justify-center">
            <p className="text-5xl font-thin text-text tablet:text-4xl phone:text-2xl">Hey there 👋</p>

            <p className="text-text mt-[150px] mb-[150px] text-5xl font-thin max-w-[700px] tablet:text-4xl phone:text-3xl">
                I'm <span className="gradient-text">João Santiago</span>, a
                full-stack software engineer. Turning ideas into real life 
                products is my calling.
            </p>

            <p
                className="text-xl font-thin text-text tablet:text-lg phone:text-sm text-start"
            >
                Get in touch 👉
                <a href={links.email} className="animated-link">joao@joaosantiago.com.br</a>
            </p>
        </div>
    )
}