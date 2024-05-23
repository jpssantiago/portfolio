import Section from "../components/section"

const technologies = ["React", "TailwindCSS", "Next.js", "ReactNative", "Flutter", "Node.js"]

export default function AboutSection() {
    function TechnologyItem({ tech }: any) {
        return (
            <p className="text-text mr-[20px] font-mono font-medium transition-all">{tech}</p>
        )
    }

    return (
        <Section name="About me">
            <p
                className="text-text font-light"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque ultrices volutpat orci ut mollis. Praesent nibh 
                lorem, varius ac egestas convallis, mattis non nulla. 
                Class aptent taciti sociosqu ad litora torquent per conubia 
                nostra, per inceptos himenaeos. Duis ullamcorper pulvinar 
                pretium.
                
                <br/><br/>
                Vestibulum ultricies gravida lectus. Non sollicitudin velit 
                semper eu. In sit amet feugiat leo, et lacinia dui. Etiam dictum
                diam ut nisi rhoncus dapibus. 
                Vestibulum ante ipsum primis in faucibus orci luctus et 
                ultrices.
                
                <br/><br/>
                Here are the technologies I work the best:</p>

                <div className="flex flex-wrap mt-[20px]">
                    {technologies.map((tech, index) => (
                        <TechnologyItem key={index} tech={tech}></TechnologyItem>
                    ))}
                </div>
        </Section>
    )
}