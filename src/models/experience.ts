export default class Experience {
    title: string
    description: string
    startDate: Date
    endDate?: Date
    elapsedTime?: string
    emoji?: string

    constructor(title: string, description: string, startDate: Date, endDate?: Date, elapsedTime?: string, emoji?: string) {
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
        this.elapsedTime = elapsedTime
        this.emoji = emoji
    }

    getFormattedDate(): string {
        const start = this.startDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        })

        if (!this.endDate) {
            return start + " - PRESENT"
        }

        const end = this.endDate!.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        })
        
        return start + " - " + end
    }

    getTotalDays(): number {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24

        const end = this.endDate ?? new Date()
        const utc1 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())
        const utc2 = Date.UTC(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate())

        return Math.floor((utc1 - utc2) / _MS_PER_DAY)
    }

    getElapsedTime(): string {
        if (this.elapsedTime) return this.elapsedTime

        const totalDays = this.getTotalDays()
        const years = Math.floor(totalDays / 365)
        const months = Math.floor(totalDays % 360 / 30)

        if (months) {
            return years + ' years and ' + months + '+ months'
        }

        return years + '+ years'
    }
}