export default function WelcomeSection() {
    return (
        <div className="h-screen max-w-[1440px] mx-auto py-[120px] px-[100px] tablet:px-[50px] phone:px-[50px] flex flex-col justify-center">
            <p className="text-text text-5xl font-thin tablet:text-4xl phone:text-2xl">Hey there 👋</p>

            <p className="text-text mt-[150px] mb-[150px] text-5xl font-thin max-w-[700px] tablet:text-4xl phone:text-3xl">
                I'm <span className="gradient-text">João Santiago</span>, an experienced
                software engineer deeply passionate
                about crafting innovative solutions for
                the web.
            </p>

            <p
                className="text-text text-xl font-thin tablet:text-lg phone:text-sm text-start"
            >
                Get in touch 👉
                <a href="mailto:joao@joaosantiago.com.br" className="animated-link">joao@joaosantiago.com.br</a>
            </p>
        </div>
    )
}