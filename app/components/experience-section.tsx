import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ExperienceSection() {
    const experience = [
        {
            title: "Baskin Engineering Student",
            organization: "UCSC",
            date: "Sep 2022 - Present",
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
