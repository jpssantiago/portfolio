"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ExternalLink, Github } from "lucide-react"
import { SiAppstore, SiGoogleplay } from "@icons-pack/react-simple-icons"

import { Project } from "@/models/project"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type ArchiveTableProps = {
    archive: Project[]
}

export function ArchiveTable({ archive }: ArchiveTableProps) {
    const { push } = useRouter()

    function handleOnClick(project: Project) {
        push(`/project/${project.id}`)
    }

    return (
        <Table>
            <TableHeader className="font-bold text-base">
                <TableRow className="hover:bg-zinc-900">
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Built with</TableHead>
                    <TableHead>Links</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {archive.map(project => (
                    <TableRow key={project.id} className="hover:bg-zinc-900 cursor-pointer" onClick={() => handleOnClick(project)}>
                        <TableCell>
                            {project.name}
                        </TableCell>

                        <TableCell>
                            {project.shortDescription}
                        </TableCell>

                        <TableCell>
                            {project.technologies.join(" · ")}
                        </TableCell>

                        <TableCell className="flex items-center gap-2">
                            {project.links.map(link => (
                                <Link key={link.id} href={link.href} onClick={e => e.stopPropagation()}>
                                    {link.type == "LIVE" && (
                                        <ExternalLink
                                            size={20}
                                            className="hover:text-primary transition-all cursor-pointer"
                                        />
                                    )}

                                    {link.type == "GITHUB" && (
                                        <Github
                                            size={20}
                                            className="hover:text-primary transition-all cursor-pointer"
                                        />
                                    )}

                                    {link.type == "APP_STORE" && (
                                        <SiAppstore
                                            size={20}
                                            className="hover:text-primary transition-all cursor-pointer"
                                        />
                                    )}

                                    {link.type == "GOOGLE_PLAY" && (
                                        <SiGoogleplay
                                            size={20}
                                            className="hover:text-primary transition-all cursor-pointer"
                                        />
                                    )}
                                </Link>
                            ))}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}