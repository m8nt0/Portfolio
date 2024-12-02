import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function VisionSection() {
  const visionPoints = [
    {
      title: "Sustainable Materials",
      description: "Developing hardware using biodegradable and recyclable materials, eliminating reliance on non-renewable resources.",
      details: [
        "Research organic semiconductors like carbon-based polymers or plant-derived cellulose for circuits.",
        "Adopt circular design principles for hardware, ensuring easy disassembly and reuse.",
        "Explore e-waste mining to extract and reintegrate rare earth metals."
      ]
    },
    {
      title: "Nature-Powered Energy",
      description: "Harnessing energy from natural sources like microbial fuel cells, photosynthesis, and kinetic energy from the environment.",
      details: [
        "Develop bio-energy sources using microbial fuel cells or algae-based systems.",
        "Integrate solar panels or artificial photosynthesis into devices.",
        "Design kinetic energy harvesting mechanisms to capture user motion or environmental vibrations."
      ]
    },
    {
      title: "Eco-Friendly Software",
      description: "Creating efficient algorithms and AI models that minimize energy consumption and actively contribute to environmental analysis.",
      details: [
        "Optimize software for minimal processing power and energy consumption.",
        "Utilize green data centers powered by renewable energy or natural cooling systems.",
        "Develop eco-focused AI for environmental monitoring and optimization."
      ]
    },
    {
      title: "Regenerative Computing",
      description: "Designing systems that actively improve ecosystems, turning waste into resources and integrating with natural cycles.",
      details: [
        "Create waste-to-resource systems, like using processor heat for plant growth.",
        "Implement environmental sensing to monitor and improve local ecosystems.",
        "Design biodegradable components that enhance soil quality at end-of-life."
      ]
    },
    {
      title: "Biomimicry in Design",
      description: "Learning from nature's patterns and strategies to create more efficient and sustainable computing architectures.",
      details: [
        "Study and replicate efficient natural structures like fractals in computing design.",
        "Mimic natural processes like photosynthesis or DNA replication for data processing.",
        "Develop adaptive systems inspired by biological feedback loops."
      ]
    },
    {
      title: "Open Collaboration",
      description: "Fostering a global ecosystem of contributors committed to sustainable computing through open-source initiatives.",
      details: [
        "Create open-source platforms for sharing sustainable computing designs and methodologies.",
        "Collaborate with indigenous communities and environmental scientists for localized solutions.",
        "Implement decentralized manufacturing using 3D printing and local materials."
      ]
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {visionPoints.map((point, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle>{point.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="mb-4">{point.description}</CardDescription>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>Explore Further</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    {point.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
