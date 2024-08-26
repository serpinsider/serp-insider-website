import Hero from '../../components/Hero';
import PricingSection from '../../components/PricingSection';
import ContactSection from '../../components/ContactSection';

export default function LinkBuildingPage() {
  const pricingOptions = [
    {
      title: "DA10+",
      price: "$72",
      features: [
        "100% Genuine Outreach",
        "Moz DA10+ Guaranteed",
        "Includes 500 Word Blog",
        "1 Anchor Text / Target URL",
        "Editorial In-Content Link"
      ]
    },
    {
      title: "DA30+",
      price: "$120",
      features: [
        "100% Genuine Outreach",
        "Moz DA30+ Guaranteed",
        "Includes 500 Word Blog",
        "1 Anchor Text / Target URL",
        "100-10k visits pm"
      ],
      popular: true
    },
    {
      title: "DA50+",
      price: "$336",
      features: [
        "100% Genuine Outreach",
        "Moz DA50+ Guaranteed",
        "Includes 500 Word Blog",
        "1 Anchor Text / Target URL",
        "1k-30k visits pm"
      ]
    }
  ];

  return (
    <main className="bg-[#1C1C1C] text-white font-sans">
      <Hero 
        title="The #1 Link Building Service for SEO Agencies"
        subtitle="Natural, relevant, in-content links with 100% money-back guarantee"
        primaryButtonText="Order Now"
        primaryButtonLink="/order"
      />

      <PricingSection title="Simple Pricing" options={pricingOptions} />

      {/* How It Works Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">How Link Building Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep 
            number="1"
            title="The Outreach Stage"
            description="We reach out to relevant bloggers and evaluate suitable opportunities for your links."
          />
          <ProcessStep 
            number="2"
            title="The Content Stage"
            description="Our copywriting team crafts perfect blog posts with natural, in-content editorial style link mentions."
          />
          <ProcessStep 
            number="3"
            title="View Your Placements"
            description="Track all secured links live from your dashboard, with full Domain Authority metrics."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Link Building Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard title="Genuine Outreach" description="We secure placements on sites we've genuinely outreached to." />
            <BenefitCard title="In-Content Links" description="Links exist editorially within the flow of the content, not author boxes." />
            <BenefitCard title="Better Than Guest Posts" description="All blog posts come directly from blog owners, not guest profiles." />
            <BenefitCard title="No Duplicate Links" description="We keep order histories to never duplicate placements per domain." />
          </div>
        </div>
      </section>

      <ContactSection calendlyUrl="https://calendly.com/serpinsider/consult" />
    </main>
  );
}

// Helper components
const ProcessStep = ({ number, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);