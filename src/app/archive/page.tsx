import { getAllProjects } from "@/actions/get-all-projects"
import { ArchiveTable } from "@/components/archive-table"

export default async function ArchivePage() {
    const projects = await getAllProjects()

    return (
        <div className="flex flex-col gap-8 mx-auto px-36 medium:px-20 small:px-10 py-10 max-w-[1488px] min-h-[calc(100vh-64px)]">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-5xl">
                    Archive
                </h1>

                <p className="text-zinc-400">
                    A big list of things I&apos;ve worked on
                </p>
            </div>

            <ArchiveTable 
                archive={projects}
            />
        </div>
    )
}