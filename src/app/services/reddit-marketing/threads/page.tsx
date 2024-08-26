import Link from 'next/link';

export default function RedditThreads() {
  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Reddit Threads Service</h1>
        <p className="text-xl mb-8">Create engaging discussions to showcase your expertise and products</p>
        <Link href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          View Pricing
        </Link>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#2D2D2D] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Reddit Threads Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic"
              price="$120"
              features={[
                "3 Threads",
                "1-3 Threads per week",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
            />
            <PricingCard 
              title="Standard"
              price="$240"
              features={[
                "7 Threads",
                "1-3 Threads per week",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
              popular={true}
            />
            <PricingCard 
              title="Premium"
              price="$480"
              features={[
                "15 Threads",
                "1-3 Threads per week",
                "Removed content replaced",
                "No adult, payday loans, casinos"
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How Our Reddit Threads Service Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep 
            number="1"
            title="Topic Selection"
            description="We identify relevant topics based on your niche and target audience."
          />
          <ProcessStep 
            number="2"
            title="Thread Creation"
            description="We craft engaging threads that naturally showcase your expertise."
          />
          <ProcessStep 
            number="3"
            title="Consistent Posting"
            description="We post 1-3 threads per week to maintain natural activity."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start discussions on Reddit?</h2>
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

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="text-center">
    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);