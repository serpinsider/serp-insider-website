import Hero from './components/Hero';
import Link from 'next/link';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero 
        title="Boost Your Online Presence with SERP Insider"
        subtitle="Expert SEO services to help your business rank higher and attract more customers"
        primaryButtonText="Services"
        primaryButtonLink="#services"
        secondaryButtonText="Book A Call"
        secondaryButtonLink="#book-call"
      />

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Link Building"
              description="Build high-quality backlinks to boost your site's authority and rankings."
              link="/services/link-building"
            />
            <ServiceCard 
              title="Reddit Marketing"
              description="Leverage the power of Reddit to increase brand awareness and drive traffic."
              link="/services/reddit-marketing"
            />
            <ServiceCard 
              title="Local SEO"
              description="Optimize your online presence to attract more local customers and improve local rankings."
              link="/services/local-seo"
            />
          </div>
        </div>
      </section>

      <ContactSection calendlyUrl="https://calendly.com/serpinsider/consult" />
    </main>
  );
}

const ServiceCard = ({ title, description, link }) => (
  <div className="service-card">
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <Link href={link} className="link-primary">
      Learn More
    </Link>
  </div>
);