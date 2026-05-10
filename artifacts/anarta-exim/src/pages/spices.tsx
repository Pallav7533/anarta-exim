import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Leaf, Award, Box, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

import spicesHeroImg from "@/assets/images/spices_hero.png";
import turmericImg from "@/assets/images/turmeric.png";
import chilliBg from "@/assets/images/redchilli.png";
import cuminImg from "@/assets/images/cumin.png";
import cardamomImg from "@/assets/images/cardamom.png";
import corianderImg from "@/assets/images/coriander.png";
import blackpepperImg from "@/assets/images/blackpepper.png";
import clovesImg from "@/assets/images/cloves.png";
import cinnamonImg from "@/assets/images/cinnamon.png";
import cargoPortImg from "@/assets/images/cargo_ship.jpg";
import heroPortImg from "@/assets/images/hero_port.png";

const SPICES = [
  { name: "Turmeric (Haldi)", desc: "High curcumin content, vibrant color, and potent aroma.", origin: "Erode / Nizamabad", img: turmericImg },
  { name: "Red Chilli", desc: "Available in whole, crushed, and powder forms with customized heat levels.", origin: "Guntur / Byadgi", img: chilliBg },
  { name: "Cumin (Jeera)", desc: "Earthy, nutty flavor profile, carefully cleaned and sorted.", origin: "Gujarat / Rajasthan", img: cuminImg },
  { name: "Coriander", desc: "Premium green/brown seeds with high volatile oil content.", origin: "Madhya Pradesh", img: corianderImg },
  { name: "Black Pepper", desc: "The King of Spices — bold berries with sharp, pungent flavor.", origin: "Kerala / Karnataka", img: blackpepperImg },
  { name: "Cloves", desc: "Hand-picked, large size with strong aromatic oils.", origin: "South India", img: clovesImg },
  { name: "Cardamom", desc: "Green, aromatic pods, graded by size (6mm - 8mm+).", origin: "Kerala", img: cardamomImg },
  { name: "Cinnamon", desc: "Sweet, woody flavor, available in quills or powder.", origin: "Kerala", img: cinnamonImg },
];

export default function Spices() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 bg-background">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={spicesHeroImg} alt="Indian Spices" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/82 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        </motion.div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              {t.spices.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
              {t.spices.heading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t.spices.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Feature Badges */}
      <section className="py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Leaf className="w-8 h-8 text-primary" />, title: "100% Natural", desc: "No artificial colors, additives, or preservatives." },
              { icon: <Droplets className="w-8 h-8 text-primary" />, title: "High Oil Content", desc: "Selected for maximum flavor potency and aroma." },
              { icon: <Award className="w-8 h-8 text-primary" />, title: "Export Grade", desc: "Sorted and graded to international food safety standards." },
              { icon: <Box className="w-8 h-8 text-primary" />, title: "Custom Packaging", desc: "Bulk sacks to retail-ready vacuum sealed pouches." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border p-6 rounded-2xl text-center hover:border-primary/40 transition-colors group"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Cards with Images */}
      <section className="py-20 relative overflow-hidden">
        {/* Shipping port background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroPortImg} alt="" className="w-full h-full object-cover object-center opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{t.spices.essence}</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">{t.spices.portfolio}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              India is the spice bowl of the world. At Anarta Exim, we partner directly with farming communities to source the finest harvests. Our spices undergo rigorous cleaning, sorting, and grading before being packed to preserve their volatile oils and aroma during international transit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPICES.map((spice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={spice.img}
                    alt={spice.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{spice.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{spice.desc}</p>
                  <div className="text-xs font-semibold text-primary bg-primary/10 inline-block px-2.5 py-1 rounded-full">
                    {spice.origin}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t.spices.bulkTitle}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t.spices.bulkSub}</p>
            <Button asChild size="lg" className="rounded-full h-13 px-10 text-base">
              <Link href="/contact">Request Catalog & Pricing</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
