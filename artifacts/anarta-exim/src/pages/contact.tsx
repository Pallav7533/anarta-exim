import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted to anartaexim@gmail.com:", data);
    toast({
      title: "Inquiry Sent Successfully",
      description: t.contact.successMsg,
    });
    form.reset();
  }

  return (
    <div className="w-full flex flex-col min-h-screen pt-24 bg-background">

      {/* Header */}
      <section className="py-16 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{t.contact.badge}</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">{t.contact.heading}</h1>
            <p className="text-lg text-muted-foreground">{t.contact.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-7">Corporate Headquarters</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: <MapPin className="w-5 h-5 text-primary" />,
                      label: t.contact.address,
                      content: <p className="text-muted-foreground text-sm">327 Anarta Exim, Near 4D Square,<br />Sangath Mall 1, Motera,<br />Ahmedabad, Gujarat, India</p>
                    },
                    {
                      icon: <Phone className="w-5 h-5 text-primary" />,
                      label: t.contact.phone,
                      content: <div><p className="text-muted-foreground text-sm">+91 9712936916</p><p className="text-muted-foreground text-sm">+91 8866516005</p></div>
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-primary" />,
                      label: t.contact.email,
                      content: <a href="mailto:anartaexim@gmail.com" className="text-primary hover:underline text-sm">anartaexim@gmail.com</a>
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-primary" />,
                      label: "Business Hours",
                      content: <div><p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 7:00 PM (IST)</p><p className="text-primary text-sm font-semibold mt-1">24 Hour Email Response Guarantee</p></div>
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
                    >
                      <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm mb-1">{item.label}</h4>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-72 bg-card border border-border rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=Sangath+Mall+1,+Motera,+Ahmedabad,+Gujarat,+India&output=embed&z=16"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Anarta Exim - Sangath Mall 1, Motera, Ahmedabad"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                327 Anarta Exim, Sangath Mall 1, Motera, Ahmedabad
              </p>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Request a Quote</h2>
              <p className="text-sm text-muted-foreground mb-7">Fill out the form and our export specialists will respond promptly.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">{t.contact.nameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background border-border h-11 rounded-xl" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Logistics LLC" className="bg-background border-border h-11 rounded-xl" {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">{t.contact.emailLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="bg-background border-border h-11 rounded-xl" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">{t.contact.phoneLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 234 567 8900" className="bg-background border-border h-11 rounded-xl" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-sm">{t.contact.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please specify the products, required quantities, port of destination..."
                          className="bg-background border-border min-h-[140px] resize-none rounded-xl"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" className="w-full h-12 rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" data-testid="button-submit">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.submit}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919712936916"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
        data-testid="link-whatsapp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.322.101.144.453.712 1.011 1.207.72.636 1.27.826 1.415.913.144.087.231.072.318-.029l.36-.453c.101-.13.202-.107.332-.058.13.043.823.391.967.463.144.072.245.107.283.172.038.065.038.376-.106.78z" />
        </svg>
      </a>
    </div>
  );
}
