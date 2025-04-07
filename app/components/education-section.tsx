import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function EducationSection() {
  const education = 
  {
    degree: "B.S. Computer Science",
    school: "University of California Santa Cruz",
    graduationYear: "Class of 2026",
    courses: [
      "CSE 20 (Prog Abs Python)",
      "CSE 13S (Comp Sys and C Prog)",
      "CSE 30 (Adv Prog Abs Python)",
      "CSE 12 (Com Sys/Assmbly Lan)",
      "AM 147 (Comp Methods & App)",
      "CSE 16 (Appl Discrete Math)",
      "MATH 19A (Integral Calculus)",
      "MATH 19B (Differential Calculus)",
      "MATH 23A (Vector Calculus)",
      "CSE 101 (Data Structs & Algs)",
      "CSE 120 (Computer Architecture)"
    ]
  },
  {
    degree: "B.S. Computer Science",
    school: "San Franscico State University",
    graduationYear: "Class of 2026",
    courses: [
      "Math 324 (Prob)", 
      "PHYS 220, CSC 317 (Web Dev)", 
      "CS 111C, CSC 300GW", 
      "CSC 413, PHYS 230", 
      "PHYS 222", 
      "PHYS 232"
    ]
  },

  return (
    {education.map((item, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>{education.degree}</CardTitle>
          <CardDescription>{education.school}, {education.graduationYear}</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course, index) => (
              <Badge key={index} variant="secondary">{course}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  )
}
