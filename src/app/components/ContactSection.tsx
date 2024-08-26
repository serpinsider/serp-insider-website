import React from 'react';
import Script from 'next/script';

interface ContactSectionProps {
  calendlyUrl: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ calendlyUrl }) => {
  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Hop on a 15 minute call</h2>
        <p className="text-lg mb-8 text-white">If you have more questions, book a call or contact us via live chat.</p>
        <div 
          className="calendly-inline-widget" 
          data-url={calendlyUrl} 
          style={{minWidth: '320px', height: '700px'}}
        ></div>
      </div>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
};

export default ContactSection;