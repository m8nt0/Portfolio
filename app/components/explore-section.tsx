import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function ExploreSection() {
  const exploreAreas = [
    {
      title: "Biomimetic Computing Architectures",
      content: [
        "Ant Colony Optimization → Distributed Governance: Voting/consensus algorithms modeled after pheromone trails, enabling self-organizing policy decisions.",
        "Bee Democracy → Liquid Delegation: Dynamic vote delegation for efficient representation in large-scale governance.",
        "Recursive Modularity: Hardware (card-based compute) and software layers that replicate self-similar patterns for scalability.",
        "Resource Distribution: Mimic plant root networks for adaptive bandwidth/storage allocation in decentralized systems."
      ]
    },
    {
      title: "Ecosystem Feedback Loops",
      content: [
        "Predator-Prey Dynamics to Load Balancing whereby to autoscale compute/storage resources using population models predator processes regulate and prey workloads",
        "Solar-powered modular cards prioritize low-energy operations during resource scarcity (like CAM plants).",
        "Reward users for contributing renewable energy to the network (currency earned via 'energy symbiosis')."
      ]
    },
    {
      title: "Bio-integrated Transactional Network Models",
      content: [
        "Mycorrhizal Networks → Decentralized Communication: Sensors on modular cards share encrypted data via fungal-inspired mesh protocols",
        "Stomatal Responses → Adaptive Privacy: Systems 'breathe' data access like plant stomata, opening/closing based on environmental trust scores.",
        "Coral Reef Redundancy: Backup/redundant systems in modular hardware mimic coral polyps’ distributed survival strategies."
      ]
    },
    {
      title: "Microbial and Molecular Computing",
      content: [
        "DNA Storage: Encode critical governance policies in synthetic DNA for ultra-secure, high-density storage on light modular cards",
        "Enzyme Catalysis → Parallel Processing: Task scheduling inspired by enzymatic efficiency, prioritizing high-priority workflows",
        "Bacterial quorum sensing intervening in consensus protocols like microbial communication models to detect and resolve conflicts in decentralized governance"
      ]
    },
    {
      title: "Ecological Governance Design and Energy-Matter Circularity",
      content: [
        "ATP mimicking currency as such being contribution based tokens cycle through users, applications and hardware like cellular energy",
        "E-Waste mycoremeditation in which modular cards/biodegradable components broken down by fungi-inspired recycling protocols enforced",
        "System inherits nature cycle breakdown to build a closed-loop economy based, in that of earned is burned in the same manner"
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Areas to Explore Further</CardTitle>
        <CardDescription>Dive deeper into these topics</CardDescription>
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
