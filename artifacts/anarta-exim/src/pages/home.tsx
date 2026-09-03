import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Ship, Box, CheckCircle, Star, Factory, Anchor, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

import heroBg from "@/assets/images/hero_port.png";
import metalsImg from "@/assets/images/metals.png";
import spicesImg from "@/assets/images/spices.png";
import factoryImg from "@/assets/images/factory.jpg";
import cargoImg from "@/assets/images/cargo_ship.jpg";

const TICKER_ITEMS = [
  "METALS & INDUSTRIAL", "PREMIUM SPICES",
  "GLOBAL DELIVERY", "QUALITY CERTIFIED", "AHMEDABAD, INDIA",
  "ISO STANDARDS", "120,000 PSI STRENGTH", "24H RESPONSE",
];

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <div ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</div>;
}

const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 8,
  size: 2 + Math.random() * 3,
}));

export default function Home() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewCompany, setReviewCompany] = useState("");
  const [reviewCountry, setReviewCountry] = useState("");
  const [reviewText, setReviewText] = useState("");

  function submitReview(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !reviewName || !reviewText) return;
    toast({ title: "Thank you for your review!", description: "Your feedback helps us serve international buyers better." });
    setRating(0); setReviewName(""); setReviewCompany(""); setReviewCountry(""); setReviewText("");
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Global Trade Port" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-background/78"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-transparent to-transparent"></div>
          <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(ellipse_at_center,hsl(215,75%,20%,0.08)_0%,transparent_70%)]"></div>
        </div>

        {/* Floating Particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40 pointer-events-none z-0"
            style={{ left: `${p.x}%`, bottom: "0%", width: p.size, height: p.size }}
            animate={{ y: [0, -900], opacity: [0, 0.6, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Main content — flex-1 fills space, justify-center centers vertically */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-8 container mx-auto" style={{ paddingTop: "96px", paddingBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
            >
              <Globe className="w-3 h-3" />
              {t.hero.badge}
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              {t.hero.headline1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50">
                {t.hero.headline2}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {t.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.exploreProducts}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary/50 text-primary hover:bg-primary/10 backdrop-blur-sm">
                <Link href="/contact">{t.hero.getQuote}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip — sits at the bottom naturally, not absolute */}
        <div className="relative z-10 w-full border-t border-border/60 bg-background/60 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-primary" />{t.trust.globalExporter}</span>
              <span className="hidden md:block w-px h-4 bg-border/60" />
              <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-primary" />{t.trust.premiumQuality}</span>
              <span className="hidden md:block w-px h-4 bg-border/60" />
              <span className="flex items-center gap-2"><Ship className="w-3.5 h-3.5 text-primary" />{t.trust.reliableDelivery}</span>
              <span className="hidden md:block w-px h-4 bg-border/60" />
              <span className="flex items-center gap-2"><Box className="w-3.5 h-3.5 text-primary" />{t.trust.certifiedMaterials}</span>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <div className="w-full bg-primary py-3 overflow-hidden border-y border-primary/20">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="text-primary-foreground text-xs font-bold tracking-widest uppercase mx-8">
              {item} <span className="text-primary-foreground/50 mx-4">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border/50 rounded-2xl overflow-hidden">
            {[
              { value: 100, suffix: "%", label: t.stats.quality },
              { value: 120, suffix: "K PSI", label: t.stats.psi },
              { value: 50, suffix: "+", label: t.stats.industry },
              { value: 30, suffix: "+", label: t.stats.network },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-6 py-10 bg-card hover:bg-muted/50 transition-colors border-r border-b border-border/50 last:border-r-0"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-card relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(215,75%,20%,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{t.products.title}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">{t.products.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.products.sub}</p>
          </motion.div>
          <div className="relative w-full py-4">
  {/* Decorative background elements */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

  <div className="relative mx-auto w-full max-w-6xl px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-center">

      {[
        {
          img: metalsImg,
          title: t.products.metalsTitle,
          desc: t.products.metalsDesc,
          href: "/products/metals",
        },
        {
          img: spicesImg,
          title: t.products.spicesTitle,
          desc: t.products.spicesDesc,
          href: "/products/spices",
        },
      ].map((cat, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 40,
            x: i === 0 ? -20 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={i === 0 ? "md:-translate-y-5" : "md:translate-y-5"}
        >
          <Link href={cat.href} className="group block">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-[28px] bg-muted shadow-xl shadow-black/10">

              {/* Image */}
              <img
                src={cat.img}
                alt={cat.title}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Dark gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-transparent
                  opacity-90
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Hover glow */}
              <div
                className="
                  absolute inset-0
                  bg-primary/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Border */}
              <div
                className="
                  absolute inset-0
                  rounded-[28px]
                  border border-white/10
                  group-hover:border-primary/50
                  transition-colors
                  duration-500
                "
              />

              {/* Top category number */}
              <div className="absolute top-6 left-6">
                <div
                  className="
                    flex items-center justify-center
                    w-11 h-11
                    rounded-full
                    bg-black/25
                    backdrop-blur-md
                    border border-white/20
                    text-white
                    text-sm
                    font-semibold
                    transition-all
                    duration-500
                    group-hover:bg-primary
                    group-hover:border-primary
                  "
                >
                  0{i + 1}
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6">
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    flex items-center justify-center
                    transition-all
                    duration-500
                    group-hover:bg-primary
                    group-hover:scale-110
                    group-hover:border-primary
                  "
                >
                  <ArrowRight
                    className="
                      w-5 h-5
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

                {/* Small line */}
                <div
                  className="
                    w-10 h-[2px]
                    bg-primary
                    mb-4
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    lg:text-4xl
                    font-display
                    font-bold
                    text-white
                    mb-3
                    tracking-tight
                  "
                >
                  {cat.title}
                </h3>

                <p
                  className="
                    text-sm
                    md:text-base
                    text-white/70
                    leading-relaxed
                    max-w-md
                    line-clamp-2
                    transition-colors
                    duration-300
                    group-hover:text-white/90
                  "
                >
                  {cat.desc}
                </p>

                {/* Explore */}
                <div
                  className="
                    mt-5
                    flex items-center gap-2
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-white/60
                    transition-all
                    duration-500
                    group-hover:text-primary
                    group-hover:gap-4
                  "
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Crane port background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={cargoImg} alt="" className="w-full h-full object-cover object-top opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{t.whyUs.label}</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">{t.whyUs.heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{t.whyUs.sub}</p>

              <div className="space-y-4 mb-10">
                {t.whyUs.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/60 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>

              <Button asChild size="lg" className="rounded-full h-12 px-8 text-sm">
                <Link href="/about">{t.whyUs.cta}</Link>
              </Button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={factoryImg} alt="Manufacturing facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/60 backdrop-blur-md rounded-xl p-3 border border-border/60">
                  <div className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Industrial Grade</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mt-8">
                <img src={cargoImg} alt="Global cargo shipping" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/60 backdrop-blur-md rounded-xl p-3 border border-border/60">
                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Global Shipping</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WRITE A REVIEW */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        {/* Container port background */}
        <div className="absolute inset-0 z-0">
          <img src={cargoImg} alt="" className="w-full h-full object-cover object-center opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Client Feedback</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Share Your Experience</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Worked with Anarta Exim? We'd love to hear your feedback from the global trade community.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={submitReview} className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl">
              {/* Star Rating */}
              <div className="mb-7 text-center">
                <p className="text-sm font-semibold text-foreground mb-3">Your Rating</p>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          s <= (hoverRating || rating) ? "fill-primary text-primary" : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <Input
                    value={reviewName}
                    onChange={e => setReviewName(e.target.value)}
                    placeholder="John Smith"
                    className="bg-background h-11 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <Input
                    value={reviewCompany}
                    onChange={e => setReviewCompany(e.target.value)}
                    placeholder="Acme Imports LLC"
                    className="bg-background h-11 rounded-xl"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                <Input
                  value={reviewCountry}
                  onChange={e => setReviewCountry(e.target.value)}
                  placeholder="UAE, USA, Germany..."
                  className="bg-background h-11 rounded-xl"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Review *</label>
                <Textarea
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  placeholder="Share your experience with Anarta Exim — product quality, delivery, communication..."
                  className="bg-background min-h-[120px] resize-none rounded-xl"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold shadow-lg shadow-primary/20" disabled={!rating || !reviewName || !reviewText}>
                <Send className="w-4 h-4 mr-2" />
                Submit Review
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(215,75%,20%,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Anchor className="w-12 h-12 text-primary/40 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">{t.cta.heading}</h2>
            <p className="text-lg text-muted-foreground mb-10">{t.cta.sub}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-10 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                <Link href="/contact">{t.cta.contact}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base border-primary/40 text-primary hover:bg-primary/10">
                <a href="mailto:anartaexim@gmail.com">anartaexim@gmail.com</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
