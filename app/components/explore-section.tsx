import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function ExploreSection() {
  const exploreAreas = [
    {
      title: "Using the Visible Ecosystem for Computing",
      content: [
        "Study behavioral patterns in nature (e.g., ant colonies, plant root systems)",
        "Observe and replicate natural structures (e.g., fractals) in computing architectures",
        "Harness energy from natural systems like photosynthesis or biomechanical movements"
      ]
    },
    {
      title: "Feedback Loops in Ecosystems",
      content: [
        "Understand and apply ecosystem feedback principles to create self-sustaining computing systems",
        "Explore predator-prey dynamics for load-balancing algorithms",
        "Study plant growth responses to design adaptable computing components"
      ]
    },
    {
      title: "Interaction Between Visible Life and Computing",
      content: [
        "Develop systems that use environmental changes as computational inputs",
        "Create sensors that translate natural events into processable data",
        "Mimic biological networks for decentralized, resilient computing models"
      ]
    },
    {
      title: "Building Computing Systems with Unseen Life",
      content: [
        "Explore microbial systems for biological circuits",
        "Investigate cellular computation and synthetic biology",
        "Study molecular interactions for efficient, parallel processing systems"
      ]
    },
    {
      title: "Learning to Work with the Ecosystem",
      content: [
        "Study ecology to understand species and ecosystem interactions",
        "Apply biomimicry principles to solve complex computing problems",
        "Investigate how ecosystems generate, use, and recycle energy"
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Areas to Explore Further</CardTitle>
        <CardDescription>Dive deeper into these topics to advance eco-friendly computing</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {exploreAreas.map((area, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{area.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  {area.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
