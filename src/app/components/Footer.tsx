import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg md:text-xl font-bold">
              SERP Insider
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <Link href="/services" className="text-sm md:text-base hover:text-gray-300">Services</Link>
            <Link href="/courses" className="text-sm md:text-base hover:text-gray-300">Courses</Link>
            <a href="https://serpinsider.co" className="text-sm md:text-base hover:text-gray-300" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://serpinsider.co" className="text-sm md:text-base hover:text-gray-300" target="_blank" rel="noopener noreferrer">Newsletter</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-xs md:text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} SERP Insider. All rights reserved.</p>
          <a href="https://x.com/serpinsider" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;