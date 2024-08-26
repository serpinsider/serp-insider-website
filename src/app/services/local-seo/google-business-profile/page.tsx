import Link from 'next/link';
import Script from 'next/script';

export default function GoogleBusinessProfile() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Dominate Local Search with Google Business Profile Optimization</h1>
        <p className="text-xl mb-8">Boost your local visibility and attract more customers with our expert GBP services</p>
        <Link href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          View Pricing
        </Link>
        <p className="mt-4 text-gray-400">Perfect for local businesses, franchises & multi-location companies</p>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Google Business Profile Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Increased Local Visibility"
              description="Appear prominently in local search results and Google Maps when potential customers are looking for your products or services."
            />
            <BenefitCard 
              title="Enhanced Online Presence"
              description="Showcase your business information, photos, and customer reviews to build trust and credibility with potential customers."
            />
            <BenefitCard 
              title="Improved Customer Engagement"
              description="Interact with customers through posts, Q&A, and reviews, fostering better relationships and increasing customer loyalty."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Google Business Profile Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Profile Optimization"
            description="We'll fully optimize your Google Business Profile, ensuring all information is accurate, complete, and keyword-optimized."
          />
          <ServiceCard 
            title="Content Creation"
            description="Regular posts, photos, and videos to keep your profile fresh and engaging for potential customers."
          />
          <ServiceCard 
            title="Review Management"
            description="We'll help you generate and respond to reviews, improving your online reputation and customer trust."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic"
              price="$250"
              description="Perfect for small local businesses"
              features={[
                "Google Business Profile Optimization",
                "5 GMB Posts",
                "10 Citation Backlinks",
                "5 Geo-Optimized Web 2.0s",
                "25 Foundational Links",
                "1 YouTube Local Video"
              ]}
            />
            <PricingCard 
              title="Pro"
              price="$500"
              description="Ideal for established local businesses"
              features={[
                "Everything in Basic, plus:",
                "8 GMB Posts",
                "20 Citation Backlinks",
                "7 Geo-Optimized Web 2.0s",
                "50 Foundational Links",
                "2 YouTube Local Videos",
                "Press Release (up to 200 links)"
              ]}
              featured={true}
            />
            <PricingCard 
              title="Advanced"
              price="$750"
              description="For businesses serious about dominating local search"
              features={[
                "Everything in Pro, plus:",
                "12 GMB Posts",
                "30 Citation Backlinks",
                "10 Geo-Optimized Web 2.0s",
                "100 Foundational Links",
                "2 YouTube Local Videos",
                "3 GBP Guest Posts"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Local Presence?</h2>
          <p className="text-xl mb-8">Schedule a free consultation and learn how our Google Business Profile optimization can help your business stand out in local search.</p>
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

const ServiceCard = ({ title, description }) => (
  <div className="bg-[#3D3D3D] p-6 rounded-lg">
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