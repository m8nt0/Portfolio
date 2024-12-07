import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Description } from '@radix-ui/react-toast'

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
    {
      title: "Xululo",
      description: "A web-app for notetaking in a simpler format and a blocky feel, adding functinality for a smart actions powered by AI",
      tags: ["Note-taking", "Organization"]
    }
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
    {
        title: "ML Game",
        description: [
            "Desinegned a neural netowrk in which the agent reprogrammes itself to adjust its positiong from a preadtor (enemy). As time progresses, the agent gets better"
        ]
    },
    {
        title: 'Mini-Browser',
        date: '2023-01-15',
        description: [
            'A lightweight web browser developed in C++ that focuses on speed and efficiency.',
            'Features a minimalistic user interface and tabbed browsing.',
            'Supports basic HTML and CSS rendering.',
            'Utilizes SFML for graphics and networking.'
        ],
        tags: ['C++', 'Browser', 'SFML', 'UI/UX'],
    },
    {
        title: 'Self-Learning Game',
        date: '2023-03-10',
        description: [
            'An innovative AI-driven game that adapts to the player’s skill level.',
            'Utilizes machine learning algorithms to adjust difficulty.',
            'Enhances user engagement through personalized challenges.'
        ],
        tags: ['AI', 'Game Development', 'Machine Learning'],
    },
    {
        title: 'Calculator',
        date: '2023-02-05',
        description: [
            'A versatile calculator application designed for everyday use and educational purposes.',
            'Supports basic arithmetic operations and advanced functions.',
            'User-friendly interface accessible for students and professionals.'
        ],
        tags: ['C++', 'Calculator', 'UI/UX'],
    },
    {
        title: 'CPU',
        date: '2023-04-20',
        description: [
            'A project focused on reinventing CPU architecture using Rust.',
            'Explores design and implementation of a custom CPU.',
            'Emphasizes performance optimization and resource management.'
        ],
        tags: ['Rust', 'CPU Design', 'Hardware'],
    },
    {
        title: 'All-Web-Demo',
        date: '2023-05-15',
        description: [
            'A comprehensive demonstration of web technologies.',
            'Showcases various web applications and their functionalities.',
            'Illustrates capabilities of modern web development frameworks.'
        ],
        tags: ['Web Development', 'Demo', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Lovli',
        date: '2023-06-01',
        description: [
            'A sophisticated dating application built with Next.js.',
            'Connects individuals based on shared interests and preferences.',
            'Features real-time messaging and advanced matching algorithms.'
        ],
        tags: ['Next.js', 'Web App', 'Dating', 'Real-time'],
    },
    {
        title: 'Chat Application',
        date: '2023-07-10',
        description: [
            'A real-time chat application that allows users to communicate seamlessly.',
            'Built using WebSocket technology for real-time data transfer.',
            'Features group chats and private messaging.'
        ],
        tags: ['WebSocket', 'Chat', 'Real-time', 'JavaScript'],
    },
    {
        title: 'Task Manager',
        date: '2023-08-05',
        description: [
            'An intuitive task management application to organize daily activities.',
            'Includes task prioritization, deadlines, and reminders.',
            'Focuses on productivity and time management.'
        ],
        tags: ['Productivity', 'Task Management', 'Web App'],
    },
    {
        title: 'Weather App',
        date: '2023-09-15',
        description: [
            'A dynamic weather application providing real-time updates and forecasts.',
            'Utilizes APIs to fetch weather data.',
            'Features location search and severe weather alerts.'
        ],
        tags: ['API', 'Weather', 'JavaScript', 'Web App'],
    },
    {
        title: 'Portfolio Website',
        date: '2023-10-01',
        description: [
            'A personal portfolio website showcasing projects, skills, and experiences.',
            'Built with modern web technologies for a digital resume.',
            'Highlights responsive design principles and best practices.'
        ],
        tags: ['Portfolio', 'Web Development', 'HTML', 'CSS', 'JavaScript'],
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
                    {project.tags && project.tags.length > 0 ? (
                    project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))
                    ) : (
                    <span>No tags available</span> // Fallback if no tags
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
