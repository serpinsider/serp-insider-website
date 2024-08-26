import Link from 'next/link';

export default function RedditCombo() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Reddit Combo Service</h1>
        <p className="text-xl mb-8">Maximize your Reddit presence with a combination of threads and comments</p>
        <Link href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          View Pricing
        </Link>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Reddit Combo Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Starter"
              price="$180"
              features={[
                "3 Threads",
                "10 Comments",
                "1-3 Comments/Threads per day",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
            />
            <PricingCard 
              title="Pro"
              price="$480"
              features={[
                "10 Threads",
                "25 Comments",
                "1-3 Comments/Threads per day",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
              popular={true}
            />
            <PricingCard 
              title="Elite"
              price="$980"
              features={[
                "25 Threads",
                "100 Comments",
                "1-3 Comments/Threads per day",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How Our Reddit Combo Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep 
            number="1"
            title="Strategy Development"
            description="We create a comprehensive Reddit marketing strategy tailored to your goals."
          />
          <ProcessStep 
            number="2"
            title="Content Creation"
            description="We craft engaging threads and comments that naturally promote your brand."
          />
          <ProcessStep 
            number="3"
            title="Consistent Engagement"
            description="We maintain a regular posting schedule to build your Reddit presence."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Combo Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard title="Comprehensive Coverage" description="Both threads and comments for maximum visibility." />
            <BenefitCard title="Increased Engagement" description="More opportunities for users to interact with your brand." />
            <BenefitCard title="Natural Brand Promotion" description="Subtle marketing that doesn't feel like advertising." />
            <BenefitCard title="Consistent Reddit Presence" description="Regular activity to build your reputation over time." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a complete Reddit marketing solution?</h2>
          <Link href="#pricing" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg">
            Choose Your Plan
          </Link>
        </div>
      </section>
    </div>
  );
}

// Helper components
const PricingCard = ({ title, price, features, popular = false }) => (
  <div className={`bg-[#3D3D3D] p-6 rounded-lg ${popular ? 'border-2 border-blue-500' : ''}`}>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-3xl font-bold mb-6">{price}</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">✓ {feature}</li>
      ))}
    </ul>
    <Link href="/order" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Order Now
    </Link>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);