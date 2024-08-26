import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <section className="hero-section py-12 md:py-16 px-4 text-center flex flex-col items-center justify-center min-h-[64vh]">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
      {(primaryButtonText || secondaryButtonText) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <a href={primaryButtonLink} className="button-primary smooth-scroll">
              {primaryButtonText}
            </a>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <a href={secondaryButtonLink} className="button-secondary smooth-scroll">
              {secondaryButtonText}
            </a>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;