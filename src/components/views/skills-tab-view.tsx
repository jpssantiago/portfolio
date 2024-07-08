import { SkillItem } from "@/components/skill-item"
import { Skill } from "@/models/skill"

const frontEnd: Skill[] = [
    {
        skill: "Next.js",
        href: "https://nextjs.org"
    }, {
        skill: "React",
        href: "https://react.dev"
    }, {
        skill: "Vite"
    }, {
        skill: "TailwindCSS",
        href: "https://tailwindcss.com"
    }
]

const backEnd: Skill[] = [
    {  
        skill: "Node",
        href: "https://nodejs.org"
    }, {
        skill: "Fastify"
    }, {
        skill: "Prisma"
    }, {
        skill: "PostgreSQL"
    }, {
        skill: "MySQL"
    }, {
        skill: "MongoDB"
    }
]

const deploy: Skill[] = [
    {
        skill: "Docker"
    }, {
        skill: "Vercel"
    }, {
        skill: "AWS EC2"
    }, {
        skill: "Cloudflare R2"
    }, {
        skill: "Caddy"
    }, {
        skill: "PM2"
    }
]

export function SkillsTabView() {
    return (
        // flex flex-wrap gap-8
        // gap-8 grid grid-cols-3
        <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
                <p className="font-light text-zinc-200">
                    What I use in the front-end:
                </p>

                <div className="flex flex-wrap gap-2">
                    {frontEnd.map((skill, index) => (
                        <SkillItem
                            key={index}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <p className="font-light text-zinc-200">
                    What I use in the back-end:
                </p>

                <div className="flex flex-wrap gap-2">
                    {backEnd.map((skill, index) => (
                        <SkillItem
                            key={index}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <p className="font-light text-zinc-200">
                    How I deploy my apps:
                </p>

                <div className="flex flex-wrap gap-2">
                    {deploy.map((skill, index) => (
                        <SkillItem
                            key={index}
                            skill={skill}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}