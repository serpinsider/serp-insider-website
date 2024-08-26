import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

export default function Courses() {
  const courseOptions = [
    {
      title: "Reddit Traffic Playbook",
      price: "$297",
      features: [
        "Game Theory & Strategy with Examples",
        "Keyword research & Targeting",
        "How to do Reddit Comments",
        "How to do Reddit Threads",
        "How to manage your own Subs",
        "CTR & Conversion Improvement"
      ]
    },
    {
      title: "Facebook Traffic Playbook",
      price: "$297",
      features: [
        "Facebook Algorithm Insights",
        "Content Strategy for Engagement",
        "Paid Advertising Techniques",
        "Audience Targeting and Segmentation",
        "Analytics and Performance Optimization"
      ]
    }
  ];

  return (
    <main className="bg-[#1C1C1C] text-white">
      <Hero 
        title="SERP Insider Courses"
        subtitle="Master the art of driving traffic and boosting your online presence with our expert-led courses."
        primaryButtonText="View Courses"
        primaryButtonLink="#courses"
      />

      <PricingSection title="Our Courses" options={courseOptions} />

      <ContactSection calendlyUrl="https://calendly.com/serpinsider/consult" />
    </main>
  );
}