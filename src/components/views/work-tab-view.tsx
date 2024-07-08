import dayjs from "dayjs"

import { AboutItem } from "@/components/about-item"

export function WorkTabView() {

    function getElapsedTime() {
        const startDate = new Date(2022, 2, 1)
        const elapsedMonths = dayjs().diff(startDate, "months")
        const elapsedYears = elapsedMonths / 12

        if (elapsedMonths < 12) {
            return `${elapsedMonths} months`
        }

        if (elapsedYears % 1 == 0) {
            return `${elapsedYears} years`
        }

        return `${Math.floor(elapsedYears)} years and ${elapsedMonths % 12} months`
    }

    return (
        <div className="space-y-8">
            <AboutItem
                title="Full-Stack Software Engineer"
                description={`Fauri Risk Solutions · March 2022 - Present · ${getElapsedTime()}`}
            />

            <AboutItem
                title="Front-End Software Engineer"
                description="izi.fit · October 2021 - March 2022 · 6 months"
            />

            <AboutItem
                title="iOS Developer"
                description="FIT Segurança · January 2020 - September 2021 · 1 year and 8 months"
            />

            <AboutItem
                title="Bachelor's Degree in Computer Science"
                description="Universidade Anhembi Morumbi · January 2019 - December 2022 · 4 years"
            />

            <AboutItem
                title="Associate's Degree in Informatics"
                description="Instituto Técnico de Barueri · January 2016 - December 2018 · 3 years"
            />
        </div>
    )
}