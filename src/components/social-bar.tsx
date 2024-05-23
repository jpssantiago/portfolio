import { links } from "../_data/links-data"

export default function SocialBar() {
    return (
        <div className="fixed bottom-0 left-[50px] flex flex-col items-center large:left-[25px] tablet:relative tablet:left-0 tablet:mt-[50px] phone:relative phone:left-0 phone:mt-[50px]">
            <div className="hidden tablet:block phone:block">
                <p className="text-center text-2xl gradient-text">Want to get in touch with me?</p>
                <p className="text-center text-text text-xl mt-[10px]">These are my socials ⬇️</p>
            </div>

            <div className="flex flex-col items-center tablet:flex-row tablet:mt-[20px] tablet:gap-[30px] phone:flex-row phone:mt-[20px] phone:gap-[30px]">
                <a href={links.github}>
                    <i className="fa-brands fa-github text-text text-2xl mb-[20px] gradient-when-hover" />
                </a>

                <a href={links.instagram}>
                    <i className="fa-brands fa-instagram text-text text-2xl mb-[20px] gradient-when-hover" />
                </a>

                <a href={links.linkedin}>
                    <i className="fa-brands fa-linkedin-in text-text text-2xl mb-[20px] gradient-when-hover" />
                </a>

                <a href={links.email}>
                    <i className="fa-solid fa-envelope text-text text-2xl mb-[20px] gradient-when-hover" />
                </a>

                <div className="w-[1px] h-[90px]  bg-text rounded-full tablet:hidden phone:hidden" />
            </div>
        </div>
    )
}