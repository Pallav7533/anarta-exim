import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Gem, Star, Shield, Ruler, Package, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

import jewelleryHeroImg from "@/assets/images/jewellery_hero.png";
import ringImg from "@/assets/images/jewellery_ring.jpg";
import banglesImg from "@/assets/images/jewellery_bangles.jpg";
import jewelleryImg from "@/assets/images/jewellery.png";
import cargoPortImg from "@/assets/images/cargo_ship.jpg";
import heroPortImg from "@/assets/images/hero_port.png";

export default function Jewellery() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={jewelleryHeroImg} alt="Luxury Jewellery" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </motion.div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              {t.jewellery.badge}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-5 leading-tight">
              {t.jewellery.heading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{t.jewellery.sub}</p>
            <Button asChild size="lg" className="rounded-full h-13 px-8 text-base shadow-xl shadow-primary/25">
              <Link href="/contact">Inquire for Wholesale</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: ringImg, label: "Fashion Rings", desc: " Anti tarnish adujstable rings" },
              { img: jewelleryImg, label: "Statement Necklaces", desc: "Bold & contemporary sets" },
              { img: banglesImg, label: "Bangles & Bracelets", desc: "Traditional & modern styles" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] group"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-primary/30 rounded-2xl" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative overflow-hidden">
        {/* Shipping port background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroPortImg} alt="" className="w-full h-full object-cover object-center opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Excellence</p>
              <h2 className="text-3xl font-display font-bold text-foreground mb-5">{t.jewellery.craft}</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Our jewellery division caters exclusively to international buyers, boutiques, and wholesalers seeking premium artificial jewellery. We specialize in high-quality fashion pieces that blend intricate Indian detailing with contemporary global elegance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From statement necklace sets to delicate bracelets and rings, every piece is crafted to satisfy discerning buyers and undergoes thorough quality inspection before export.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Gem className="w-7 h-7 text-primary" />, title: "Artificial Jewellery", sub: "Premium fashion pieces" },
                { icon: <Ruler className="w-7 h-7 text-primary" />, title: "Custom Design", sub: "Made to your specification" },
                { icon: <Shield className="w-7 h-7 text-primary" />, title: "Secure Transit", sub: "Fully insured logistics" },
                { icon: <Star className="w-7 h-7 text-primary" />, title: "Skilled Craftsmen", sub: "Generations of artistry" },
                { icon: <Package className="w-7 h-7 text-primary" />, title: "Bulk Orders", sub: "Wholesale quantities" },
                { icon: <Award className="w-7 h-7 text-primary" />, title: "Quality Certified", sub: "Export grade standard" },
              ].map((feat, i) => (
                <div key={i} className="p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors text-center group">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">{feat.icon}</div>
                  <p className="font-semibold text-foreground text-sm">{feat.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{feat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">{t.jewellery.partner}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{t.jewellery.partnerSub}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="rounded-full h-13 px-10 text-base shadow-lg shadow-primary/20">
                  <Link href="/contact">Contact Private Sales</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-10 text-base border-primary/40 text-primary hover:bg-primary/10">
                  <a href="https://wa.me/919712936916" target="_blank" rel="noreferrer">WhatsApp Inquiry</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
