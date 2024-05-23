import Section from "../components/section"
import ExperienceItem from "../components/experience-item"

import Experience from "../models/experience"


const experiences: Experience[] = [
    new Experience(
        "Associate's Degree in Informatics",
        "Instituto Técnico de Barueri",
        new Date(2016, 0),
        new Date(2018, 11),
        "3 years",
        "🏫"
    ), new Experience(
        "Bachelor's Degree in Computer Science",
        "Universidade Anhembi Morumbi",
        new Date(2019, 0),
        new Date(2022, 11),
        "4 years",
        "🎓"
    ), new Experience(
        "Junior iOS Developer",
        "FIT Segurança",
        new Date(2020, 0),
        new Date(2021, 8),
        "1 year and 8 months",
        "🎒"
    ), new Experience(
        "Front-End Developer",
        "izi.fit",
        new Date(2021, 9),
        new Date(2022, 2),
        "6 months",
        "💼"
    ), new Experience(
        "Front-End Software Engineer",
        "Fauri Risk Solutions",
        new Date(2022, 2),
        undefined,
        undefined,
        "🧠"
    )
]

export default function ExperienceSection() {
    function Timeline() {
        return (
            <div
                className="w-[1px] h-[calc(100%-155px)] absolute top-[77.5px] left-1/2 bg-text tablet:hidden phone:hidden"
            />
        )
    }

    return (
        <Section name="My work experience and education">
            <div className="flex flex-col relative w-full">
                {experiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        experience={experience}
                        alignment={index % 2 == 0 ? "start" : "end"}
                        lastChild={index == experiences.length - 1}
                    />
                ))}

                <Timeline />
            </div>
        </Section>
    )
}