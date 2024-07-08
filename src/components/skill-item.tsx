import Link from "next/link"

import { Skill } from "@/models/skill"

type SkillItemProps = {
    skill: Skill
}

export function SkillItem({ skill }: SkillItemProps) {
    function Component() {
        return (
            <div className="bg-secondary px-3 py-2 will-change-transform transition-all hover:-translate-y-1 duration-300 cursor-pointer">
                {skill.skill}
            </div>
        )
    }

    if (!skill.href) {
        return <Component />
    }

    return (
        <Link href={skill.href}>
            <Component />
        </Link>
    )
}