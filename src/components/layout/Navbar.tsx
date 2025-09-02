import { Button } from "@/components/common/button";
import { HeaderDefaults } from "@/lib/ui-classes";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type HeaderProps = {
  mobileMenuWidthClass?: string;
};

export default function Header({
  mobileMenuWidthClass = HeaderDefaults.mobileMenuWidthClass,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Framer Motion variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      scale: 0.98,
      x: 20,
      transition: {
        duration: 0.38,
        ease: [0.32, 0, 0.67, 0],
        opacity: { duration: 0.38 },
        scale: { duration: 0.38 },
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.38,
        ease: [0.33, 1, 0.68, 1],
        opacity: { duration: 0.38 },
        scale: { duration: 0.38 },
      },
    },
  } as const;

  const menuItemVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      x: -20,
      transition: {
        duration: 0.38,
        ease: [0.32, 0, 0.67, 0],
        opacity: { duration: 0.25 },
        scale: { duration: 0.38 },
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.38,
        ease: [0.33, 1, 0.68, 1],
        opacity: { duration: 0.38 },
        scale: { duration: 0.38 },
      },
    },
  } as const;

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Team" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToWaitlist = () => {
    const ctaSection = document.querySelector(
      'section:has(input[placeholder="Enter your email"])'
    );
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo on left */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-bold gradient-text font-heading cursor-pointer"
          >
            FOUNDORA
          </button>
        </div>

        {/* All nav links + CTA on right */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <Button
            variant="gradient"
            size="default"
            className="hidden sm:inline-flex"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className={`md:hidden fixed right-0 top-16 ${mobileMenuWidthClass} max-h-[calc(100vh-4rem)] overflow-y-auto bg-gradient-to-b from-background to-background/90 backdrop-blur-lg z-40 border-b border-border/50`}
          >
            <nav className="px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.href}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => {
                      scrollToSection(link.href);
                      toggleMenu();
                    }}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-border/30">
                  <motion.div
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Button
                      variant="gradient"
                      size="default"
                      className="w-full"
                      onClick={() => {
                        scrollToWaitlist();
                        toggleMenu();
                      }}
                    >
                      Join Waitlist
                    </Button>
                  </motion.div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
