import { Project } from "@/models/project"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ProjectLinks } from "@/components/project-links"

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
                        <TableCell className="font-medium">
                            {project.name}
                        </TableCell>

                        <TableCell className="min-w-60 text-zinc-300">
                            {project.description}
                        </TableCell>

                        <TableCell className="flex flex-wrap gap-2 min-w-60">
                            {project.technologies.map((technology, index) => (
                                <div key={index} className="bg-zinc-800 px-3 py-2 text-zinc-300">
                                    {technology}
                                </div>
                            ))}
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