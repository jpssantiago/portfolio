import { Project } from "@/models/project"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ProjectLinks } from "./project-links"

type ArchiveTableProps = {
    archive: Project[]
}

export function ArchiveTable({ archive }: ArchiveTableProps) {
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
                    <TableRow key={project.id} className="hover:bg-zinc-900">
                        <TableCell>
                            {project.name}
                        </TableCell>

                        <TableCell>
                            {project.description}
                        </TableCell>

                        <TableCell>
                            {project.technologies.join(" · ")}
                        </TableCell>

                        <TableCell>
                            <ProjectLinks project={project} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}