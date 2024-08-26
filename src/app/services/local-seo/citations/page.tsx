import Link from 'next/link';
import Script from 'next/script';

export default function LocalCitations() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Boost Your Local Presence with Citation Building</h1>
        <p className="text-xl mb-8">Improve your local SEO and attract nearby customers with consistent, high-quality business listings</p>
        <Link href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          View Pricing
        </Link>
        <p className="mt-4 text-gray-400">Perfect for local businesses, franchises & multi-location companies</p>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Local Citation Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Complete Accuracy"
              description="All citations are completed manually for complete accuracy, ensuring your business information is consistent across the web."
            />
            <BenefitCard 
              title="NAP Consistency"
              description="We include all NAP (Name, Address, Phone) information to help boost your local SEO efforts and improve search engine trust."
            />
            <BenefitCard 
              title="Trusted Directories"
              description="All directories are indexed in search engines at the time of submission, ensuring maximum visibility for your business."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">How Citation Building Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard 
            number="1"
            title="Manual Submissions"
            description="Our team manually submits your business details to high-quality, relevant directories in your target country."
          />
          <ProcessCard 
            number="2"
            title="No Duplicates"
            description="We check for existing citations to avoid duplication and ensure accuracy of your business information."
          />
          <ProcessCard 
            number="3"
            title="Detailed Reporting"
            description="Receive a full submission report with live listings and screenshots of all created citations."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="25 Local Citations"
              price="$60"
              description="Perfect for small local businesses just starting out"
              features={[
                "100% Manual Submissions",
                "Full Submission Report",
                "Submission Screenshots",
                "All Login Details Provided",
                "UK, US, Aus & Canada"
              ]}
            />
            <PricingCard 
              title="100 Local Citations"
              price="$120"
              description="Ideal for established businesses looking to boost their local presence"
              features={[
                "100% Manual Submissions",
                "Full Submission Report",
                "Submission Screenshots",
                "All Login Details Provided",
                "UK, US, Aus & Canada"
              ]}
              featured={true}
            />
            <PricingCard 
              title="300 Local Citations"
              price="$288"
              description="Comprehensive coverage for multi-location businesses"
              features={[
                "100% Manual Submissions",
                "Full Submission Report",
                "Submission Screenshots",
                "All Login Details Provided",
                "UK, US, Aus & Canada"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Local SEO?</h2>
          <p className="text-xl mb-8">Schedule a free consultation and learn how our local citation building service can improve your local search presence.</p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/serpinsider/consult" style={{minWidth: '320px', height: '700px'}}></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>
    </div>
  );
}

const BenefitCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const ProcessCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold">{number}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const PricingCard = ({ title, price, description, features, featured = false }) => (
  <div className={`bg-[#3D3D3D] p-6 rounded-lg ${featured ? 'border-2 border-blue-500' : ''}`}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-4">{price}</p>
    <p className="mb-4">{description}</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">✓ {feature}</li>
      ))}
    </ul>
    <Link href="/contact" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started
    </Link>
  </div>
);