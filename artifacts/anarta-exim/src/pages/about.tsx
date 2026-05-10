import React from "react";
import { motion } from "framer-motion";
import { Globe, TrendingUp, Handshake, ShieldCheck, Truck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import aboutTeamImg from "@/assets/images/about_team.jpg";
import factoryImg from "@/assets/images/factory.jpg";
import heroPortImg from "@/assets/images/hero_port.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 bg-background">

      {/* Header */}
      <section className="py-20 md:py-28 border-b border-border bg-card relative overflow-hidden">
        {/* Port/crane import-export background */}
        <div className="absolute inset-0 z-0">
          <img src={heroPortImg} alt="" className="w-full h-full object-cover object-center opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/60 to-card/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/80" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">{t.about.badge}</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-5 leading-tight">
              {t.about.heading}
            </h1>
            <p className="text-xl text-primary font-semibold tracking-wide mb-6">THE SPIRIT OF ANARTA, THE POWER OF TRADE</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{t.about.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Story & Team Image */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">Our Brand Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The name "Anarta" draws from the ancient historic name for the northern Gujarat region — a land historically renowned for its merchants, maritime trade, and entrepreneurial spirit. We carry that legacy forward into the modern global economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began as a localized trading operation has evolved into a multi-sector export powerhouse. Today, we manage complex supply chains moving thousands of tons of industrial metals, premium spices, and luxury goods to clients across the Americas, Europe, and the Middle East.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={aboutTeamImg} alt="Anarta Exim Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/70 backdrop-blur-md rounded-xl px-4 py-2 border border-border/60">
                <p className="text-xs font-semibold text-foreground">Anarta Exim Leadership Team</p>
                <p className="text-xs text-muted-foreground">Ahmedabad, Gujarat</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{t.about.mission}</h3>
              </div>
              <ul className="space-y-3">
                {t.about.missionItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{t.about.vision}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.about.visionText}</p>

              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-primary mb-1">50+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Countries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-primary mb-1">24h</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Response Guarantee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video"
            >
              <img src={factoryImg} alt="Manufacturing Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/70 backdrop-blur-md rounded-xl px-4 py-2 border border-border/60">
                <p className="text-xs font-semibold text-foreground">State-of-the-art Manufacturing</p>
                <p className="text-xs text-muted-foreground">Quality certified facility</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">Our Core Values</h2>
              <div className="space-y-5">
                {[
                  { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: "Uncompromising Integrity", desc: "Transparency in pricing, documentation, and communication. We do what we say, and we deliver what we promise." },
                  { icon: <Globe className="w-5 h-5 text-primary" />, title: "Excellence in Quality", desc: "Strict adherence to international standards. From the factory floor to the shipping port, quality control is our obsession." },
                  { icon: <Handshake className="w-5 h-5 text-primary" />, title: "Long-term Partnerships", desc: "We don't chase one-off transactions. We invest in understanding our clients' businesses to become a permanent arm of their supply chain." },
                  { icon: <Truck className="w-5 h-5 text-primary" />, title: "Reliable Logistics", desc: "End-to-end supply chain management ensuring on-time delivery to any port worldwide." },
                ].map((val, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">{val.icon}</div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{val.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
