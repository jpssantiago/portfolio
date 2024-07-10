import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { SiAppstore, SiGoogleplay } from "@icons-pack/react-simple-icons"

import { Project } from "@/models/project"

type ProjectLinksProps = {
    project: Project
}

export function ProjectLinks({ project }: ProjectLinksProps) {
    return (
        <div className="flex items-center gap-2">
            {project.links.map(link => (
                <Link
                    key={link.id}
                    href={link.href}
                    className="hover:text-primary transition-all"
                >
                    {link.type == "LIVE" && (
                        <ExternalLink
                            size={20}
                        />
                    )}

                    {link.type == "GITHUB" && (
                        <Github
                            size={18}
                        />
                    )}

                    {link.type == "APP_STORE" && (
                        <SiAppstore
                            size={20}
                        />
                    )}

                    {link.type == "GOOGLE_PLAY" && (
                        <SiGoogleplay
                            size={20}
                        />
                    )}
                </Link>
            ))}
        </div>
    )
}