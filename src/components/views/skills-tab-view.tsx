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
        skill: "React Native",
        href: "https://reactnative.dev/"
    }, {
        skill: "TailwindCSS",
        href: "https://tailwindcss.com"
    }, {
        skill: "Flutter",
        href: "https://flutter.dev/"
    }, {
        skill: "Swift",
        href: "https://developer.apple.com/swift/"
    }
]

const backEnd: Skill[] = [
    {  
        skill: "Node",
        href: "https://nodejs.org"
    }, {
        skill: "Fastify",
        href: "https://fastify.dev"
    }, {
        skill: "Prisma",
        href: "https://prisma.io"
    }, {
        skill: "PostgreSQL",
        href: "https://postgresql.org"
    }, {
        skill: "MySQL",
        href: "https://mysql.com"
    }, {
        skill: "MongoDB",
        href: "https://mongodb.com"
    }
]

const deploy: Skill[] = [
    {
        skill: "Docker",
        href: "https://docker.com"
    }, {
        skill: "Vercel",
        href: "https://vercel.com"
    }, {
        skill: "AWS",
        href: "https://aws.amazon.com"
    }, {
        skill: "Cloudflare R2",
        href: "https://www.cloudflare.com/lp/pg-r2-comparison/?utm_source=google&utm_medium=cpc&utm_campaign=ao-fy-pay-latam_por_bz-applications-ge-ge-general-exp_paid&utm_content=dsa&utm_term=DYNAMIC+SEARCH+ADS&campaignid=71700000099292654&adgroupid=58700008690133154&creativeid=694991758548&&_bt=694991758548&_bk=&_bm=&_bn=g&_bg=160513360059&_placement=&_target=&_loc=9199069&_dv=c&awsearchcpc=1&gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6F6aV2oiAaVggYeagKSKk9uiWNv3PwkK7Hu-AaT5X3ja8EphfAwmTFBoCqC4QAvD_BwE&gclsrc=aw.ds"
    }, {
        skill: "Caddy",
        href: "https://caddyserver.com"
    }, {
        skill: "PM2",
        href: "https://pm2.keymetrics.io/"
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