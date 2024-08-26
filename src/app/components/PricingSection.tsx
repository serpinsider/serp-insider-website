import React from 'react';
import Link from 'next/link';

interface CourseOption {
  title: string;
  price: string;
  features: string[];
}

interface CourseSectionProps {
  title: string;
  options: CourseOption[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, options }) => {
  return (
    <section id="courses" className="bg-[#1C1C1C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((option, index) => (
            <CourseCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard: React.FC<CourseOption> = ({ title, price, features }) => (
  <div className="bg-[#2D2D2D] p-6 rounded-lg transition-transform duration-300 hover:scale-105">
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-3xl font-bold mb-6 text-blue-400">{price}</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 text-gray-300">✓ {feature}</li>
      ))}
    </ul>
    <Link href={`/courses/${title.toLowerCase().replace(' ', '-')}`} className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
      Learn More
    </Link>
  </div>
);

export default CourseSection;