import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { VisionSection } from './components/vision-section'
import { ProjectsSection } from './components/projects-section'
import { ExperienceSection } from './components/experience-section'
import { EducationSection } from './components/education-section'
import { NavigationMenu } from './components/navigation-menu'

//
import { useRouter } from 'next/router'

export default function Home() {
  const skills = {
    languages: ["Python", "Java", "C", "C++", "PowerShell", "SQL", "Javascript", "Typescript", "Matlab", "Ruby", "Rust", "Assembly", "Bash"],
    tools: ["PyTorch", "NumPy", "Git", "AWS", "MySQL", "MongoDB", "Azure", "GCP", "Selenium", "Docker", "Kubernetes", "Shell", "jupyter", "Matplotlib", "Mathlab", "Prisma"],
    frameworks: ["Node.js", "Express", "FastAPI", "Flask", "Django", "Next.js", "React", "Tailwind"]
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-6">
        <NavigationMenu />
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        <section id="about" className="mx-auto max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-4">I'm Mikias Berhane</h1>
            <p className="text-gray-500 dark:text-gray-400 pb-4">Learning everything about how we can work along with nature</p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <Image
              src="/myprofile.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <p className="text-lg mb-4">
                I'm a student, and visionary technologist, dedicated to creating computing systems that work with the goal of creating self-sustaining systems. My goal is to develop technologies that not only minimize harm to our planet but actively contribute to its ever-adaptive cycle.
              </p>
              <p className="text-lg">
                With a background in computer science, I'm continously learning about the four primary STEM subjects through the lens of nature.
              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">My Personal Vision</h2>
          <VisionSection />
        </section>

        <section id="projects" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">Projects</h2>
          <ProjectsSection />
        </section>

        <section id="experience" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">Experience</h2>
          <ExperienceSection />
        </section>

        <section id="education" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">Education</h2>
          <EducationSection />
        </section>

        <section id="skills" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">Skills</h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="frameworks" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="contact" className="mx-auto max-w-4xl pt-16">
          <h2 className="text-2xl font-bold pb-4">Get in Touch</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <Button asChild>
                  <Link href="mailto:codem8nt0@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/m8nt0" target="_blank" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/in/mikias-berhane-131176188/" target="_blank" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
