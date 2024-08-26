import Link from 'next/link';
import Script from 'next/script';

export default function RedditMarketing() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Boost Your Brand with Reddit Marketing</h1>
        <p className="text-xl mb-8">Promote your product through strategic Reddit engagement</p>
        <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Explore Services
        </Link>
        <p className="mt-4 text-gray-400">Perfect for affiliates, ecommerce & SaaS businesses</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Reddit Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Reddit Comments"
              description="Engage with relevant communities through strategic comments."
              price="Starting at $60"
              link="/services/reddit-marketing/comments"
            />
            <ServiceCard 
              title="Reddit Threads"
              description="Create discussion threads to showcase your expertise and products."
              price="Starting at $120"
              link="/services/reddit-marketing/threads"
            />
            <ServiceCard 
              title="Reddit Combo"
              description="Comprehensive package of threads and comments for maximum impact."
              price="Starting at $180"
              link="/services/reddit-marketing/combo"
              featured={true}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Reddit Marketing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard title="Targeted Exposure" description="Reach specific niche communities relevant to your product." />
          <BenefitCard title="Organic Engagement" description="Natural interactions that don't feel like advertising." />
          <BenefitCard title="Content Replacement" description="We replace comments or threads that get removed." />
          <BenefitCard title="Aged Accounts" description="Option to use established Reddit accounts for better credibility." />
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Leverage Reddit for Your Business?</h2>
          <p className="text-xl mb-8">Schedule a free consultation and discover how our Reddit marketing strategies can drive traffic and engagement.</p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/serpinsider/consult" style={{minWidth: '320px', height: '700px'}}></div>
          <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>
    </div>
  );
}

// Helper components
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