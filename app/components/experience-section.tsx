import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExperienceSection() {
    const experience = [
        {
            title: "Founder",
            organization: "Xululo",
            date: "Sep 2024 - Present",
            description: [
                "Started a SaaS company on my own to streamline everyday tasks.",
                "The idea is to make life simpler by connecting activities and boosting productivity without adding unnecessary complexity.",
                "Built a platform where users can design focused, single-purpose apps.",
                "These individual apps are made to work smoothly with shared tools that help with teamwork, planning, and communication.",
                "The system makes it easy for users to share, connect, and find what they need without hassle.",
                "A built-in dashboard app gives users a clear look at their progress and development.",
                "Currently working on building the first functional version (MVP), and planning to share updates soon."
            ]
        },
        {
            title: "Baskin Engineering Student",
            organization: "UCSC",
            date: "Sep 2022 - 2024",
            description: [
                "Both effectively and efficiently maintained very well above average academic performance.",
                "Join various clubs such as Google Club, NSBE, and Competitive programming to enhance my skills.",
                "Received various honor roll awards multiple times throughout the school year."
            ]
        }
    ]

    return (
        <div className="space-y-6">
            {experience.map((item, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.organization} | {item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 space-y-2">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
