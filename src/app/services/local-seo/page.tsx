import Link from 'next/link';
import Script from 'next/script';

export default function LocalSEO() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Boost Your Local Presence with Local SEO</h1>
        <p className="text-xl mb-8">Dominate local search results and attract nearby customers</p>
        <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Explore Services
        </Link>
        <p className="mt-4 text-gray-400">Perfect for local businesses, franchises & multi-location companies</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Local SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Local Citations"
              description="Build and manage your business listings across various online directories to improve your local search visibility and credibility."
              price="Starting at $299/month"
              link="/services/local-seo/citations"
            />
            <ServiceCard 
              title="Google My Business Services"
              description="Optimize your Google My Business profile to enhance your presence in local search results and Google Maps."
              price="Starting at $199/month"
              link="/services/local-seo/google-business-profile"
              featured={true}
            />
            <ServiceCard 
              title="Monthly Local SEO"
              description="Ongoing optimization and management of your local SEO efforts to consistently improve your rankings and attract more local customers."
              price="Starting at $499/month"
              link="/services/local-seo/monthly"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Local SEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            title="Increased Local Visibility"
            description="Appear in local search results and map listings when nearby customers are looking for your products or services."
          />
          <BenefitCard 
            title="Higher Quality Traffic"
            description="Attract more relevant, local customers who are more likely to convert and become loyal patrons."
          />
          <BenefitCard 
            title="Improved Online Reputation"
            description="Manage and enhance your online reviews and ratings to build trust with potential customers."
          />
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Dominate Local Search Results?</h2>
          <p className="text-xl mb-8">Schedule a free consultation and learn how our local SEO services can help your business stand out in your area.</p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/serpinsider/consult" style={{minWidth: '320px', height: '700px'}}></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ title, description, price, link, featured = false }) => (
  <div className={`bg-[#3D3D3D] p-6 rounded-lg ${featured ? 'border-2 border-blue-500' : ''}`}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <p className="text-xl font-bold mb-4">{price}</p>
    <Link href={link} className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Learn More
    </Link>
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);