import Image from "next/image";
import Link from "next/link";
import { ShieldPlus, SquareArrowUpRight, ArrowRight } from "lucide-react"; // Replaced ArrowBigRightDash with ArrowRight
import { Button } from "@/components/ui/button";
import { PackageSearch, ShieldCheck, MapPin, Search, CheckCircle, BarChart, ArrowBigRightDash } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const finderHowItWorks = [
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

  const faqs = [
    {
      question: "What is Finder?",
      answer:
        "Finder is a smart lost and found platform that helps individuals and businesses track, report, and recover lost items efficiently. Our system connects people who have lost items with those who find them.",
    },
    {
      question: "How does Finder work?",
      answer:
        "Finder allows users to report lost or found items. If someone finds an item, they can upload details, and our system matches it with lost reports. Users get notified when a potential match is found.",
    },
    {
      question: "Is Finder free to use?",
      answer:
        "Yes, Finder offers free basic services for individuals looking to report lost and found items. We also offer premium features for businesses and organizations needing advanced tracking and management tools.",
    },
    {
      question: "What types of items can I report on Finder?",
      answer:
        "You can report various lost and found items, including electronic devices, keys, wallets, bags, documents, and more. If you’re unsure, simply enter the details, and our system will guide you.",
    },
    {
      question: "How do I increase my chances of finding a lost item?",
      answer:
        "To improve your chances, provide detailed information, including item description, last known location, and any unique identifiers. Enabling notifications will also help you stay updated on potential matches.",
    },
    {
      question: "Is my personal information safe on Finder?",
      answer:
        "Yes, Finder prioritizes user privacy and security. Your contact details are only shared with verified users in the case of a confirmed lost and found match.",
    },
    {
      question: "How do I claim a found item?",
      answer:
        "If a match is found, you will be guided through a verification process to confirm ownership. Once verified, you can arrange a safe way to retrieve your item.",
    },
    {
      question: "Can businesses use Finder for lost and found management?",
      answer:
        "Absolutely! Businesses such as hotels, airports, and event venues can use Finder to efficiently track and manage lost and found items for their customers.",
    },
    {
      question: "What should I do if I find an item?",
      answer:
        "If you find an item, you can upload its details to Finder. Our system will try to match it with reported lost items, helping reunite it with the rightful owner.",
    },
    {
      question: "How can I contact Finder for support?",
      answer:
        "You can reach out to our support team through the ‘Help & Support’ section on our website. We’re here to assist you 24/7 with any lost and found inquiries.",
    },
  ];

  const features = [
    {
      title: "Smart Item Tracking",
      description:
        "Easily track lost and found items with real-time updates and notifications.",
      icon: <PackageSearch className="h-12 w-12 mb-4 text-gray-400" />,
      footer: "Real-time updates for quick retrieval.",
    },
    {
      title: "Secure Item Verification",
      description:
        "Ensure rightful ownership with our verification process before returning items.",
      icon: <ShieldCheck className="h-12 w-12 mb-4 text-gray-400" />,
      footer: "Verified returns to rightful owners.",
    },
    {
      title: "Location-Based Assistance",
      description:
        "Find lost items faster with geolocation-based lost and found centers.",
      icon: <MapPin className="h-12 w-12 mb-4 text-gray-400" />,
      footer: "Find items near your location.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is available round the clock to assist you.",
      icon: <ShieldPlus className="h-12 w-12 mb-4 text-gray-400" />,
      footer: "Always here to help, anytime.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Find your Lost and Found Devices and More! <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with{" "}
            <Image
              src={"/logo.png"}
              alt="Finder Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Enhance your Lost and Found process with a user-friendly platform,
          enabling efficient item management and faster resolution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/onboarding">
            <Button className="flex items-center gap-2 animate-bounce">
              Get Started!
              <SquareArrowUpRight size={18} />
            </Button>
          </Link>

          <Link href="#features">
            <Button size="lg" className="mr-4 animate-accordion-down">
              Learn More!
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features Section with Sparkles Effect */}
      <section id="features" className="py-20 px-5 relative">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-200">
            Key Features
          </h3>

          {/* Feature Grid with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {/* Sparkles Effect (Background) */}
            <SparklesCore
              className="absolute inset-0 w-full h-full opacity-30"
              color="#d1d5db"
              density={20}
            />

            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300 relative z-10"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2 text-gray-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-gray-500">{feature.footer}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How it Works</h2>
            <p className="text-gray-500">
              Four Simple Steps to Accelerate Your Career Growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {finderHowItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">
              Find Answers to Common Questions About Our Platform!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg relative">
          <SparklesCore className="absolute inset-0 pointer-events-none" background="#000000" />
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto relative">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Find your Lost Items and More Using Finder!
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl text-white">
              Unlock the full potential of item recovery with our Lost and Found solution.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Find your Lost things Today! <ArrowBigRightDash className="ml-2 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
