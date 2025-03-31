import { Search, MapPin, CheckCircle, BarChart } from "lucide-react"; // Changed icons to be more relevant

export const finderHowItWorks = [
  {
    title: "Report Lost Item",
    description: "Quickly report your lost item with detailed descriptions and photos on Finder.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    title: "Pinpoint Location",
    description: "Mark the location where you lost or found an item for easier retrieval on Finder.",
    icon: <MapPin className="w-8 h-8 text-primary" />,
  },
  {
    title: "Claim and Verify",
    description: "Easily claim your found item and verify ownership through Finder's secure system.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track Recovery Stats",
    description: "Monitor the recovery progress and success rates of lost items on Finder.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
  },
];