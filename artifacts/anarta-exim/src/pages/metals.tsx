import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  Target,
  Zap,
  Building2,
  Cog,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useLanguage } from "@/context/LanguageContext";

/* IMAGES */
import metalsHeroImg from "@/assets/images/metals_hero.png";
import boltsImg from "@/assets/images/bolts_closeup.png";
import pebImg from "@/assets/images/peb_structure.png";
import heroPortImg from "@/assets/images/hero_port.png";

/* NEW IMAGES */
import hBeamImg from "@/assets/images/h_beam.jpg";
import msAngleImg from "@/assets/images/ms_angle.jpg";

export default function Metals() {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 bg-background">

      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={metalsHeroImg}
            alt="Industrial Metals"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]" />

          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              {t.metals.badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-5 leading-tight">
              {t.metals.heading}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.metals.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE SHOWCASE */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">

          {/* TOP 2 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* PREMIUM FASTENERS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img
                src={boltsImg}
                alt="Premium Fasteners"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  Premium Fasteners
                </span>
              </div>
            </motion.div>

            {/* PEB STRUCTURES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img
                src={pebImg}
                alt="PEB Structures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  PEB Structures
                </span>
              </div>
            </motion.div>
          </div>

          {/* NEW 3 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* H BEAM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img
                src={hBeamImg}
                alt="H Beam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  H Beam
                </span>
              </div>
            </motion.div>

            {/* MS ANGLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img
                src={msAngleImg}
                alt="MS Angle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  MS Angle
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroPortImg}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-14">

              {/* PRODUCT OVERVIEW */}
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">
                  Product Overview
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our industrial metals division specializes in the export of
                  high-tensile fasteners and Pre-Engineered Building (PEB)
                  structural components.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">

                  {[
                    {
                      icon: <Wrench className="w-7 h-7 text-primary" />,
                      title: "Fasteners",
                      desc: "Hex bolts, structural screws, washers, and specialized threading.",
                    },

                    {
                      icon: <Settings className="w-7 h-7 text-primary" />,
                      title: "PEB Structures",
                      desc: "Custom fabricated steel frameworks.",
                    },

                    {
                      icon: <Cog className="w-7 h-7 text-primary" />,
                      title: "Custom Parts",
                      desc: "Bespoke metal components.",
                    },
                    {
                      icon: <Building2 className="w-7 h-7 text-primary" />,
                      title: "H Beam",
                      desc: "Heavy-duty structural H beams used in industrial buildings, bridges, warehouses, and steel fabrication projects.",
                    },
                    
                    {
                      icon: <Target className="w-7 h-7 text-primary" />,
                      title: "MS Angle",
                      desc: "Premium quality mild steel angles suitable for construction, fabrication, support frames, and engineering applications.",
                    },].map((card, i) => (
                    <div
                      key={i}
                      className="p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors"
                    >
                      <div className="mb-3">{card.icon}</div>

                      <h3 className="font-bold text-base mb-1.5 text-foreground">
                        {card.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SCREWS & WASHERS */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">
                  Screws & Washers Range
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                  {[
                    "Self Tapping Screws",
                    "Machine Screws",
                    "Wood Screws",
                    "Sheet Metal Screws",
                    "Allen Screws",
                    "DIN Standard Bolts",
                    "Spring Washers",
                    "Flat Washers",
                    "Lock Washers",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 bg-card border border-border/60 rounded-lg text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">

              <div className="sticky top-28 p-7 bg-card border border-border rounded-2xl shadow-xl">

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {t.metals.quoteTitle}
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  {t.metals.quoteSub}
                </p>

                <Button asChild className="w-full rounded-full h-11 mb-4">
                  <Link href="/contact">Contact Sales</Link>
                </Button>

                <div className="pt-5 mt-5 border-t border-border space-y-3">

                  {[
                    "Global Shipping",
                    "Mill Test Certificates",
                    "Custom Fabrication",
                    "Bulk Pricing",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Zap className="w-4 h-4 text-primary shrink-0" />

                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}