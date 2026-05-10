import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Wrench, Settings, Target, Zap, Building2, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/LanguageContext";

import metalsHeroImg from "@/assets/images/metals_hero.png";
import boltsImg from "@/assets/images/bolts_closeup.png";
import pebImg from "@/assets/images/peb_structure.png";
import cargoPortImg from "@/assets/images/cargo_ship.jpg";
import heroPortImg from "@/assets/images/hero_port.png";

export default function Metals() {
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
          <img src={metalsHeroImg} alt="Industrial Metals" className="w-full h-full object-cover" />
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
            <p className="text-lg text-muted-foreground leading-relaxed">{t.metals.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img src={boltsImg} alt="Premium Fasteners" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  Premium Fasteners
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img src={pebImg} alt="PEB Structure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
                  PEB Structures
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Shipping port background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={heroPortImg} alt="" className="w-full h-full object-cover object-center opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-14">
              {/* Product Overview */}
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">Product Overview</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our industrial metals division specializes in the export of high-tensile fasteners and Pre-Engineered Building (PEB) structural components. Every batch is rigorously tested against international standards to guarantee performance in critical applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: <Wrench className="w-7 h-7 text-primary" />, title: "Fasteners", desc: "Hex bolts, structural screws, washers, and specialized threading for heavy engineering." },
                    { icon: <Settings className="w-7 h-7 text-primary" />, title: "PEB Structures", desc: "Custom fabricated steel frameworks ready for assembly in industrial sheds and warehouses." },
                    { icon: <Cog className="w-7 h-7 text-primary" />, title: "Custom Parts", desc: "Bespoke metal components manufactured to exact client specifications and tolerances." },
                  ].map((card, i) => (
                    <div key={i} className="p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors">
                      <div className="mb-3">{card.icon}</div>
                      <h3 className="font-bold text-base mb-1.5 text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screws & Washers */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">Screws & Washers Range</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Self Tapping Screws", "Machine Screws", "Wood Screws", "Sheet Metal Screws", "Allen Screws", "DIN Standard Bolts", "Spring Washers", "Flat Washers", "Lock Washers"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-card border border-border/60 rounded-lg text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">{t.metals.specs}</h2>
                <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border bg-muted/30 hover:bg-transparent">
                        <TableHead className="text-primary font-bold w-1/3 py-4">Property</TableHead>
                        <TableHead className="text-primary font-bold py-4">Value / Standard</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ["Tensile Strength", "Up to 120,000 PSI (Grade 8.8 & above)"],
                        ["Material", "High Carbon Steel, Stainless Steel (304/316), Alloy Steel"],
                        ["Coating / Finish", "Hot Dip Galvanized, Zinc Plated, PTFE"],
                        ["Compliance", "ASTM, DIN, ISO 100% Industry Standards"],
                        ["Size Range", "M3 to M100+ / 1/8\" to 4\" diameter"],
                      ].map(([prop, val], i) => (
                        <TableRow key={i} className="border-border">
                          <TableCell className="font-semibold text-foreground py-3.5">{prop}</TableCell>
                          <TableCell className="text-muted-foreground py-3.5">{val}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-5 border-l-4 border-primary pl-4">{t.metals.applications}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Building2 className="w-5 h-5" />, title: "Commercial Construction", desc: "High-rise framing, bridges, and infrastructure development." },
                    { icon: <Cog className="w-5 h-5" />, title: "Heavy Manufacturing", desc: "Machinery assembly, plant setups, and automotive lines." },
                    { icon: <Target className="w-5 h-5" />, title: "Oil, Gas & Energy", desc: "Corrosion-resistant fasteners for pipelines and offshore rigs." },
                    { icon: <Wrench className="w-5 h-5" />, title: "PEB / Prefab Buildings", desc: "Warehouses, industrial sheds, factories, and cold storage." },
                  ].map((app, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary shrink-0">{app.icon}</div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm mb-1">{app.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{app.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-7 bg-card border border-border rounded-2xl shadow-xl">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{t.metals.quoteTitle}</h3>
                <p className="text-sm text-muted-foreground mb-6">{t.metals.quoteSub}</p>
                <Button asChild className="w-full rounded-full h-11 mb-4">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <div className="pt-5 mt-5 border-t border-border space-y-3">
                  {["Global Shipping", "Mill Test Certificates", "Custom Fabrication", "Bulk Pricing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary shrink-0" /> {item}
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
