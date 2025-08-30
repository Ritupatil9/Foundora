"use client";

export default function Footer() {
  return (
    <footer
    id="about"
    className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-[#1C1B3E] to-[#141229] text-gray-300 min-h-[60vh] w-full relative overflow-hidden">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Copyright */}
        <div className="col-span-2">
          <h2 className="text-white text-2xl font-bold">Foundora</h2>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Foundora. All rights reserved.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-white">
                TeamSection
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="max-w-7xl mx-auto px-4 pt-0 pb-40 -mt-24">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] font-extrabold text-white/5 tracking-tight justify-center leading-none">
          Foundora
        </h1>
      </div>
    </footer>
  );
}
