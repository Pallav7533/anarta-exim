import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/context/LanguageContext";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [location] = useLocation();
  const { t, lang, setLang } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location === href;

  return (
    <header
    className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg shadow-background/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <img
              src="/logo-removebg-preview.png"
              alt="Anarta Exim Logo"
              className="h-16 w-auto object-contain rounded"
            />
            <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              ANARTA EXIM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors relative pb-0.5 ${
                isActive("/")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {t.nav.home}
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                  location.startsWith("/products") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {t.nav.products} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 pt-2 w-52 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-2 flex flex-col gap-0.5">
                  <Link href="/products/metals" className="text-sm px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg text-foreground transition-colors block font-medium">
                    {t.nav.metals}
                  </Link>
                  <Link href="/products/spices" className="text-sm px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg text-foreground transition-colors block font-medium">
                    {t.nav.spices}
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors relative pb-0.5 ${
                isActive("/about")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors relative pb-0.5 ${
                isActive("/contact")
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Carousel Switcher */}
            <div className="flex items-center gap-0.5 bg-muted/50 backdrop-blur-sm border border-border/60 rounded-full px-1.5 py-1.5 mr-2">
              <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1 mr-0.5" />
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  data-testid={`lang-${code}`}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
                    lang === code
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <Button asChild variant="default" className="rounded-full font-semibold px-5 h-9 text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <Link href="/contact">{t.nav.getQuote}</Link>
            </Button>
          </div>

          <button
            className="md:hidden relative z-[100000] text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
        </div>
      </div>

      {/* Mobile Nav Overlay */}
{isOpen && (
  <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-background z-[99999] flex flex-col items-center justify-center gap-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors">{t.nav.home}</Link>
          <Link href="/products/metals" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors">{t.nav.metals}</Link>
          <Link href="/products/spices" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors">{t.nav.spices}</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors">{t.nav.about}</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors">{t.nav.contact}</Link>

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 mt-4 bg-muted/50 rounded-full px-3 py-2 border border-border">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <Button asChild variant="default" className="rounded-full font-semibold mt-2 px-8 py-5 text-base">
            <Link href="/contact" onClick={() => setIsOpen(false)}>{t.nav.getQuote}</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
