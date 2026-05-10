import React from "react";
import { Link } from "wouter";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(215,35%,6%)] pt-20 pb-6 border-t border-border/40 mt-auto relative overflow-hidden">
      {/* Diagonal texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, hsl(215,90%,62%) 0, hsl(215,90%,62%) 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Tagline */}
        <div className="text-center mb-16 pb-14 border-b border-border/30">
          <p className="text-3xl md:text-5xl font-display font-bold italic text-primary/90 leading-tight tracking-wide">
            "{t.footer.tagline}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src="/logo.jpeg" alt="Anarta Exim Logo" className="h-11 w-auto object-contain rounded" />
              <span className="font-display font-bold text-lg tracking-tight text-foreground">ANARTA EXIM</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A globally driven import-export powerhouse connecting the precision of Indian manufacturing to international markets.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/anarta-exim-7a98083b8/" },
                { icon: <FaTwitter />, href: "https://www.facebook.com/profile.php?id=61552284275680" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/anarta.exim?igsh=NG5qMzB2dmh5Z3Fk" },
                { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61552284275680" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_12px_hsl(215,90%,62%,0.4)] transition-all duration-300 text-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-foreground/80">Products</h4>
            <ul className="space-y-3">
              {[
                { label: "Metals & Industrial", href: "/products/metals" },
                { label: "Spices Export", href: "/products/spices" },
                { label: "Jewellery Export", href: "/products/jewellery" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-foreground/80">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Request a Quote", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-foreground/80">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>327 Anarta Exim, Near 4D Square, Sangath Mall 1, Motera, Ahmedabad, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 9712936916 / +91 8866516005</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:anartaexim@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">anartaexim@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Anarta Exim. All rights reserved.</p>
          <p className="text-xs font-semibold text-primary/70 tracking-widest uppercase">{t.footer.closing}</p>
        </div>
      </div>
    </footer>
  );
}
