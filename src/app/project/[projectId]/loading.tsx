import { Loader } from "lucide-react"

export default async function LoadingProjectPage() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-64px)]">
            <Loader className="text-primary transition-all animate-spin" size={32} />
        </div>
    )
}