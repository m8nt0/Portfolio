import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ProjectsSection() {
  const currentProjects = [
    {
      title: "Mycelium Computer Case",
      description: "Developing a biodegradable computer case using mycelium, which can be composted at end-of-life.",
      tags: ["Sustainable Materials", "Circular Design"],
    },
    {
      title: "Algae-Powered Laptop",
      description: "Prototyping a laptop that uses algae-based batteries for sustainable, long-lasting power.",
      tags: ["Bio-Energy", "Renewable Power"],
    },
    {
      title: "Eco-Friendly AI Model",
      description: "Creating a machine learning model optimized for minimal energy consumption, focused on environmental analysis.",
      tags: ["Green Software", "AI for Good"],
    },
    {
      title: "Piezoelectric Energy Harvester",
      description: "Designing a system to capture and store energy from everyday movements and vibrations.",
      tags: ["Energy Harvesting", "Kinetic Power"],
    },
  ]

  const pastProjects = [
    {
      title: "DPE: Double Pendulum Estimator",
      date: "Jan 2024 - Feb 2024",
      description: [
        "Developed a double pendulum estimator in Python, allowing for dynamic visualization of chaotic motion.",
        "Implemented numerical methods for solving differential equations, ensuring accurate simulations of physical behaviors.",
        "Enhanced user interaction with a graphical interface using Matplotlib and Tkinter."
      ],
      tags: ["Python", "Mathematics", "Physics", "GUI"],
    },
    {
      title: "SK: Sudoku/Kudoku Solvers",
      date: "Feb 2024 - May 2024",
      description: [
        "Utilized MATLAB for all numerical computations and integrated its inbuilt graphical interface for user inputs.",
        "Implemented backtracking, constraint propagation, and constraint satisfaction algorithms.",
        "Integrating the solver into a web-based interface and CLI for interactive experience."
      ],
      tags: ["MATLAB", "Algorithms", "Web Development"],
    },
    {
      title: "Web Crawler",
      date: "Sep 2023 - Dec 2023",
      description: [
        "Developed a web crawler in C/C++ to extract and index data from multiple websites efficiently.",
        "Utilized multithreading to enhance crawling speed and data retrieval, achieving 60% performance improvement.",
        "Implemented robust data parsing and storage solutions for structured information analysis."
      ],
      tags: ["C++", "Multithreading", "Data Structures"],
    },
  ]

  return (
    <Tabs defaultValue="current" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="current">Current Projects</TabsTrigger>
        <TabsTrigger value="past">Past Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="current" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="past" className="mt-4">
        <div className="space-y-6">
          {pastProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
