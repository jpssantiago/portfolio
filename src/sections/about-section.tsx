import Section from "../components/section"

const technologies = ["React", "TailwindCSS", "Next.js", "ReactNative", "Flutter", "Node.js"]

export default function AboutSection() {
    function TechnologyItem({ tech }: any) {
        return (
            <p className="text-text mr-[20px] font-mono font-medium transition-all">{tech}</p>
        )
    }

    return (
        <div className="mt-10">
            <Section name="About me">
                <p
                    className="font-light text-text"
                >
                    I'm a full-stack software engineer with 4.5 years of professional
                    experience, but I started coding before high school.

                    <br /><br />
                    I started programming when I was just 13. I learned how to code
                    in Java and then created my own Minecraft server, which was very
                    successful and quickly grew to a network of 4 different servers.

                    <br /><br />
                    In High School, I became more interested in mobile development
                    using Java and Kotlin. I developed an Android app to show
                    real-time information about what was happening on my servers.
                    The players could access the server chat, manage their friend
                    groups, and check the live prices of all the stores on the 4
                    different servers - just like a "mini stock market"

                    <br /><br />
                    Fast-forward to today, I've had the privilege of working at
                    three different companies. My main focus these days is
                    building intuitive products and digital experiences at Fauri
                    Risk Solutions for a variety of clients.

                    <br /><br />
                    Here are a few technologies I've worked recently with:
                </p>
                <div className="flex flex-wrap mt-[20px]">
                    {technologies.map((tech, index) => (
                        <TechnologyItem key={index} tech={tech}></TechnologyItem>
                    ))}
                </div>
            </Section>
        </div>
    )
}