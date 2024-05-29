import { useEffect, useState } from "react"

import Experience from "../models/experience"
import GradientCard from "./gradient-card"

interface Props {
    experience: Experience
    alignment?: "start" | "end"
    lastChild?: boolean
}

export default function ExperienceItem({ experience, alignment = "start", lastChild = false }: Props) {
    const [hideLastIndicator, setHideLastIndicator] = useState<boolean>(window.screen.width <= 1100 && lastChild)

    function windowResized() {
        setHideLastIndicator(window.screen.width <= 1100 && (lastChild))
    }

    useEffect(() => {
        window.addEventListener("resize", windowResized)
        return () => window.removeEventListener("resize", windowResized)
    }, [windowResized])

    function ExperienceCard() {
        return (
            <GradientCard style={`w-[380px] h-[165px] ${alignment == "start" ? "order-1" : "order-3"} tablet:order-1 tablet:w-full phone:order-1 phone:w-full`}>
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h1 className="text-text">{experience.title}</h1>
                        <h2 className="text-gray mt-[10px]">{experience.description}</h2>
                    </div>

                    <p className="text-sm text-gray">{experience.getFormattedDate()} → {experience.getElapsedTime()}</p>
                </div>
            </GradientCard>
        )
    }

    function Indicator() {
        if (lastChild && hideLastIndicator) {
            return <div />
        }

        return (
            <p
                className={`
                    text-3xl
                    order-2
                    ${alignment == "start" ? "tablet:rotate-90 " : "tablet:-rotate-90 "}
                    ${alignment == "start" ? "phone:rotate-90" : "phone:-rotate-90"}
                    tablet:my-[20px]
                    phone:my-[20px]
                `}>{alignment == "start" ? "👉" : "👈"}</p>
        )
    }

    function TimelineCircle() {
        return (
            <div
                className={`
                    w-[48px]
                    h-[48px]
                    bg-text
                    rounded-full
                    ${alignment == "start" ? "order-3" : "order-1"}
                    flex
                    justify-center
                    items-center
                    z-10
                    text-2xl
                    tablet:hidden
                    phone:hidden
                `}
            >
                {experience.emoji ?? "💼"}
            </div>
        )
    }

    return (
        <div
            className={
                `flex
                justify-between
                items-center
                w-[calc(50%+24px)]
                ${alignment == "start" ? "self-start" : "self-end"}
                tablet:flex-col
                tablet:self-center
                phone:flex-col
                phone:self-center
                phone:w-full
            `}>
            <ExperienceCard />
            <Indicator />
            <TimelineCircle />
        </div>
    )
}