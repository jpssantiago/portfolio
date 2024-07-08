import { AboutItem } from "@/components/about-item"

export function AboutTabView() {
    return (
        <div className="space-y-5">
            <div className="flex flex-col gap-3 font-light text-zinc-200">
                <p>
                    I&apos;m a full-stack software engineer with 4.5 years of
                    professional experience, but I started coding before high
                    school.
                </p>

                <p>
                    I started programming when I was just 13. I learned how to code in
                    Java and then created my own Minecraft server, which was very
                    successful and quickly grew to a network of 4 different servers.
                </p>

                <p>
                    In High School, I became more interested in mobile development
                    using Java and Kotlin. I developed an Android app to show
                    real-time information about what was happening on my servers.
                    The players could access the server chat, manage their friend
                    groups, and check the live prices of all the stores on the 4
                    different servers - just like a &quot;mini stock market&quot;
                </p>

                <p>
                    Fast-forward to today, I&apos;ve had the privilege of working at
                    three different companies. My main focus these days is
                    building intuitive products and digital experiences at Fauri
                    Risk Solutions for a variety of clients.
                </p>
            </div>

            <div className="flex flex-wrap justify-between gap-y-5">
                <AboutItem 
                    title="Experience"
                    description="4.5 years"
                />

                <AboutItem 
                    title="Location"
                    description="São Paulo, Brazil"
                />

                <AboutItem 
                    title="Availability"
                    description="Full-time"
                />

                <AboutItem 
                    title="Languages"
                    description="English (business), Portuguese (native)"
                />
            </div>
        </div>
    )
}