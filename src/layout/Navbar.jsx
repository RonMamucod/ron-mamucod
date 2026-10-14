
import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { MenuIcon, X, Contact, Download } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const saveContact = () => {
    const contact = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Ron Mamucod",
      "N:Mamucod;Ron;;;",
      "TITLE:Web Developer & WordPress Specialist",
      "TEL;TYPE=CELL:+639617867924",
      "EMAIL;TYPE=INTERNET:mamucodron@gmail.com",
      "URL:https://github.com/RonMamucod",
      "URL:https://www.linkedin.com/in/ron-mamucod-150588282/",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([contact], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Ron-Mamucod.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          <img
            src="/RM-Logo.png"
            alt="Ron Mamucod"
            width="60"
            height="60"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={saveContact}
            className="flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all"
          >
            <Contact className="w-4 h-4" />
            Save Contact
            <Download className="w-4 h-4" />
          </button>

          <Button size="sm">
            <a href="#contact" className="flex items-center gap-2">
              Contact Me
            </a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* Save Contact Before Burger */}
          <button
            type="button"
            onClick={saveContact}
            aria-label="Save my contact"
            className="flex items-center gap-2 rounded-full border border-primary/40 px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all"
          >
            <Contact className="w-4 h-4" />
            <span>Save Contact</span>
          </button>

          {/* Burger Menu */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
