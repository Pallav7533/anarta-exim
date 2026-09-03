import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ar' | 'fr' | 'es';

const translations = {
  en: {
    nav: { home: "Home", products: "Products", about: "About", contact: "Contact", getQuote: "Get a Quote", metals: "Metals & Industrial", spices: "Spices" },
    hero: { badge: "Serving Global Clients", headline1: "CONNECTING INDIA", headline2: "TO THE WORLD", sub: "Leading exporter of premium metal products, spices for global markets. Delivering precision, quality, and reliability across borders.", exploreProducts: "Explore Products", getQuote: "Get a Quote" },
    trust: { globalExporter: "Global Exporter", premiumQuality: "Premium Quality", reliableDelivery: "Reliable Delivery", certifiedMaterials: "Certified Materials" },
    stats: { quality: "Quality Assurance", psi: "PSI Tensile Strength", industry: "Industry Applications", network: "Client Network" },
    products: { title: "Our Expertise", heading: "Premium Export Categories", sub: "We source, process, and export top-tier materials across three major categories. Built for international standards, delivered with precision.", metalsTitle: "Metals & Industrial", metalsDesc: "High-strength hex bolts, screws, washers, and PEB structures for construction.", spicesTitle: "Spices Export", spicesDesc: "Vibrant, pure Indian spices including turmeric, chilli, cumin, and cardamom."},
    whyUs: { label: "The Anarta Advantage", heading: "Why Partner With Us?", sub: "We don't just export products; we build long-term international trade partnerships based on trust, quality, and transparent business practices.", items: ["Premium Quality Guarantee on all shipments", "Competitive Global Pricing models", "Reliable Logistics & Timely Delivery", "Transparent Business & Documentation", "Long-term Partnership approach"], cta: "Discover Our Story" },
    cta: { heading: "Ready to Import the Best?", sub: "Contact our international sales team today to discuss your requirements, request samples, or get a competitive quote.", contact: "Contact Sales Team" },
    footer: { tagline: "THE SPIRIT OF ANARTA, THE POWER OF TRADE", closing: "Thank You For Choosing Us", quickLinks: "Quick Links", contactUs: "Contact Us", followUs: "Follow Us" },
    about: { badge: "Our Story", heading: "A Global Trade Partner You Can Trust", sub: "Anarta Exim is a globally driven import-export company committed to delivering excellence, precision, and reliability.", mission: "Our Mission", missionItems: ["Deliver superior product quality", "Ensure reliable global logistics", "Maintain transparent operations", "Build long-term international partnerships"], vision: "Our Vision", visionText: "To become a globally trusted export brand recognized for innovation, quality, and consistency." },
    contact: { badge: "Get In Touch", heading: "Start a Conversation", sub: "Our international sales team responds within 24 hours.", nameLabel: "Full Name", emailLabel: "Email Address", phoneLabel: "Phone Number", messageLabel: "Your Message", submit: "Send Message", successMsg: "Thank you! We will respond within 24 hours.", address: "Address", phone: "Phone", email: "Email" },
    metals: { badge: "Industrial Grade", heading: "Metals & Industrial Solutions", sub: "Premium grade fasteners, structural components, and engineered solutions.", specs: "Technical Specifications", applications: "Key Applications", quoteTitle: "Request a Quote", quoteSub: "Need custom dimensions or bulk pricing for your next project?" },
    spices: { badge: "Culinary Excellence", heading: "Premium Spices Export", sub: "Bringing the authentic aroma and rich flavors of India to the global stage.", essence: "The Essence of India", portfolio: "Our Product Portfolio", bulkTitle: "Bulk Orders & Custom Blends", bulkSub: "We cater to food manufacturers, wholesale distributors, and global retail brands." },
  },
  ar: {
    nav: { home: "الرئيسية", products: "المنتجات", about: "معلومات عنا", contact: "اتصل بنا", getQuote: "احصل على عرض أسعار", metals: "المعادن والصناعية", spices: "توابل", jewellery: "مجوهرات" },
    hero: { badge: "خدمة العملاء العالميين", headline1: "ربط الهند", headline2: "بالعالم", sub: "مُصدر رائد للمنتجات المعدنية المتميزة والتوابل والمجوهرات للأسواق العالمية. تقديم الدقة والجودة والموثوقية عبر الحدود.", exploreProducts: "اكتشف المنتجات", getQuote: "احصل على عرض أسعار" },
    trust: { globalExporter: "مُصدر عالمي", premiumQuality: "جودة ممتازة", reliableDelivery: "توصيل موثوق", certifiedMaterials: "مواد معتمدة" },
    stats: { quality: "ضمان الجودة", psi: "قوة الشد PSI", industry: "تطبيقات الصناعة", network: "شبكة العملاء" },
    products: { title: "خبرتنا", heading: "فئات التصدير المتميزة", sub: "نقوم بتوريد ومعالجة وتصدير مواد عالية المستوى عبر ثلاث فئات رئيسية. مصممة وفقاً للمعايير الدولية، ويتم تسليمها بدقة.", metalsTitle: "المعادن والصناعية", metalsDesc: "مسامير سداسية عالية القوة، وبراغي، وغسالات، وهياكل PEB للبناء.", spicesTitle: "تصدير التوابل", spicesDesc: "توابل هندية نقية ونابضة بالحياة بما في ذلك الكركم والفلفل الحار والكمون والهيل.", jewelleryTitle: "تصدير المجوهرات", jewelleryDesc: "تصميمات أنيقة، وحرفية عالية، وقطع بجودة تصديرية للأسواق الدولية." },
    whyUs: { label: "ميزة أنارتا", heading: "لماذا نتشارك معنا؟", sub: "نحن لا نكتفي بتصدير المنتجات فحسب؛ بل نبني شراكات تجارية دولية طويلة الأجل تعتمد على الثقة والجودة والممارسات التجارية الشفافة.", items: ["ضمان جودة ممتازة لجميع الشحنات", "نماذج تسعير عالمية تنافسية", "لوجستيات موثوقة وتسليم في الوقت المناسب", "أعمال تجارية وتوثيق شفاف", "نهج الشراكة طويلة الأجل"], cta: "اكتشف قصتنا" },
    cta: { heading: "جاهز لاستيراد الأفضل؟", sub: "اتصل بفريق المبيعات الدولي لدينا اليوم لمناقشة متطلباتك، أو طلب عينات، أو الحصول على عرض أسعار تنافسي.", contact: "اتصل بفريق المبيعات" },
    footer: { tagline: "روح أنارتا، قوة التجارة", closing: "شكراً لاختياركم لنا", quickLinks: "روابط سريعة", contactUs: "اتصل بنا", followUs: "تابعنا" },
    about: { badge: "قصتنا", heading: "شريك تجاري عالمي يمكنك الوثوق به", sub: "أنارتا إكسيم هي شركة استيراد وتصدير مدفوعة عالمياً ملتزمة بتقديم التميز والدقة والموثوقية.", mission: "مهمتنا", missionItems: ["تقديم جودة منتج متفوقة", "ضمان لوجستيات عالمية موثوقة", "الحفاظ على عمليات شفافة", "بناء شراكات دولية طويلة الأجل"], vision: "رؤيتنا", visionText: "أن نصبح علامة تصدير عالمية موثوقة ومعترف بها للابتكار والجودة والاتساق." },
    contact: { badge: "ابقى على تواصل", heading: "ابدأ محادثة", sub: "يستجيب فريق المبيعات الدولي لدينا في غضون 24 ساعة.", nameLabel: "الاسم الكامل", emailLabel: "عنوان البريد الإلكتروني", phoneLabel: "رقم الهاتف", messageLabel: "رسالتك", submit: "إرسال رسالة", successMsg: "شكراً لك! سنرد في غضون 24 ساعة.", address: "العنوان", phone: "الهاتف", email: "البريد الإلكتروني" },
    metals: { badge: "الدرجة الصناعية", heading: "المعادن والحلول الصناعية", sub: "مثبتات من الدرجة الأولى، ومكونات هيكلية، وحلول هندسية.", specs: "المواصفات الفنية", applications: "التطبيقات الرئيسية", quoteTitle: "طلب عرض أسعار", quoteSub: "هل تحتاج إلى أبعاد مخصصة أو أسعار جملة لمشروعك القادم؟" },
    spices: { badge: "التميز في الطهي", heading: "تصدير توابل ممتازة", sub: "جلب الرائحة الأصيلة والنكهات الغنية للهند إلى المسرح العالمي.", essence: "جوهر الهند", portfolio: "محفظة منتجاتنا", bulkTitle: "الطلبات بالجملة والخلطات المخصصة", bulkSub: "نحن نلبي احتياجات مصنعي الأغذية وموزعي الجملة والعلامات التجارية العالمية للبيع بالتجزئة." },
    jewellery: { badge: "مجوهرات اصطناعية", heading: "مجوهرات أزياء أنيقة", sub: "مجوهرات اصطناعية ممتازة بجودة التصدير للأسواق الدولية بالجملة والتجزئة.", craft: "الحرفية تلبي الطلب العالمي", partner: "شريك معنا", partnerSub: "نحن نستوعب الطلبات بالجملة ومتطلبات التصنيع المخصصة للمشترين الدوليين." },
  },
  fr: {
    nav: { home: "Accueil", products: "Produits", about: "À propos", contact: "Contact", getQuote: "Obtenir un devis", metals: "Métaux & Industrie", spices: "Épices", jewellery: "Bijoux" },
    hero: { badge: "Au service des clients mondiaux", headline1: "CONNECTER L'INDE", headline2: "AU MONDE", sub: "Exportateur de premier plan de produits métalliques de qualité, d'épices et de bijoux pour les marchés mondiaux. Fournir précision, qualité et fiabilité au-delà des frontières.", exploreProducts: "Explorer les produits", getQuote: "Obtenir un devis" },
    trust: { globalExporter: "Exportateur mondial", premiumQuality: "Qualité supérieure", reliableDelivery: "Livraison fiable", certifiedMaterials: "Matériaux certifiés" },
    stats: { quality: "Assurance qualité", psi: "Résistance à la traction PSI", industry: "Applications industrielles", network: "Réseau de clients" },
    products: { title: "Notre expertise", heading: "Catégories d'exportation de premier plan", sub: "Nous achetons, traitons et exportons des matériaux de haut niveau dans trois grandes catégories. Construits pour les normes internationales, livrés avec précision.", metalsTitle: "Métaux & Industrie", metalsDesc: "Boulons hexagonaux à haute résistance, vis, rondelles et structures PEB pour la construction.", spicesTitle: "Exportation d'épices", spicesDesc: "Épices indiennes vibrantes et pures, y compris curcuma, piment, cumin et cardamome.", jewelleryTitle: "Exportation de bijoux", jewelleryDesc: "Designs élégants, artisanat de haut niveau, pièces de qualité exportation pour les marchés internationaux." },
    whyUs: { label: "L'avantage Anarta", heading: "Pourquoi s'associer à nous ?", sub: "Nous ne nous contentons pas d'exporter des produits ; nous construisons des partenariats commerciaux internationaux à long terme basés sur la confiance, la qualité et des pratiques commerciales transparentes.", items: ["Garantie de qualité supérieure sur tous les envois", "Modèles de tarification mondiale compétitifs", "Logistique fiable et livraison ponctuelle", "Affaires et documentation transparentes", "Approche de partenariat à long terme"], cta: "Découvrez notre histoire" },
    cta: { heading: "Prêt à importer le meilleur ?", sub: "Contactez notre équipe de vente internationale dès aujourd'hui pour discuter de vos exigences, demander des échantillons ou obtenir un devis compétitif.", contact: "Contacter l'équipe de vente" },
    footer: { tagline: "L'ESPRIT D'ANARTA, LA PUISSANCE DU COMMERCE", closing: "Merci de nous avoir choisis", quickLinks: "Liens rapides", contactUs: "Nous contacter", followUs: "Suivez-nous" },
    about: { badge: "Notre histoire", heading: "Un partenaire commercial mondial en qui vous pouvez avoir confiance", sub: "Anarta Exim est une société d'import-export orientée vers l'international, engagée à offrir excellence, précision et fiabilité.", mission: "Notre mission", missionItems: ["Fournir une qualité de produit supérieure", "Garantir une logistique mondiale fiable", "Maintenir des opérations transparentes", "Construire des partenariats internationaux à long terme"], vision: "Notre vision", visionText: "Devenir une marque d'exportation de confiance mondialement reconnue pour l'innovation, la qualité et la constance." },
    contact: { badge: "Entrer en contact", heading: "Commencer une conversation", sub: "Notre équipe de vente internationale répond dans les 24 heures.", nameLabel: "Nom complet", emailLabel: "Adresse e-mail", phoneLabel: "Numéro de téléphone", messageLabel: "Votre message", submit: "Envoyer le message", successMsg: "Merci ! Nous vous répondrons dans les 24 heures.", address: "Adresse", phone: "Téléphone", email: "E-mail" },
    metals: { badge: "Qualité industrielle", heading: "Métaux et solutions industrielles", sub: "Fixations de qualité supérieure, composants structurels et solutions d'ingénierie.", specs: "Spécifications techniques", applications: "Applications clés", quoteTitle: "Demander un devis", quoteSub: "Besoin de dimensions personnalisées ou de prix de gros pour votre prochain projet ?" },
    spices: { badge: "Excellence culinaire", heading: "Exportation d'épices de premier plan", sub: "Apporter l'arôme authentique et les saveurs riches de l'Inde sur la scène mondiale.", essence: "L'essence de l'Inde", portfolio: "Notre portefeuille de produits", bulkTitle: "Commandes en gros et mélanges personnalisés", bulkSub: "Nous répondons aux besoins des fabricants de produits alimentaires, des distributeurs en gros et des marques de vente au détail mondiales." },
  },
  es: {
    nav: { home: "Inicio", products: "Productos", about: "Acerca de", contact: "Contacto", getQuote: "Obtener cotización", metals: "Metales e Industrial", spices: "Especias", jewellery: "Joyas" },
    hero: { badge: "Sirviendo a clientes globales", headline1: "CONECTANDO INDIA", headline2: "CON EL MUNDO", sub: "Exportador líder de productos metálicos de primera calidad, especias y joyas para mercados globales. Entregando precisión, calidad y confiabilidad más allá de las fronteras.", exploreProducts: "Explorar productos", getQuote: "Obtener cotización" },
    trust: { globalExporter: "Exportador global", premiumQuality: "Calidad premium", reliableDelivery: "Entrega confiable", certifiedMaterials: "Materiales certificados" },
    stats: { quality: "Garantía de calidad", psi: "Resistencia a la tracción PSI", industry: "Aplicaciones de la industria", network: "Red de clientes" },
    products: { title: "Nuestra experiencia", heading: "Categorías de exportación premium", sub: "Obtenemos, procesamos y exportamos materiales de primer nivel en tres categorías principales. Construido para estándares internacionales, entregado con precisión.", metalsTitle: "Metales e Industrial", metalsDesc: "Pernos hexagonales de alta resistencia, tornillos, arandelas y estructuras PEB para la construcción.", spicesTitle: "Exportación de especias", spicesDesc: "Especias indias vibrantes y puras que incluyen cúrcuma, chile, comino y cardamomo.", jewelleryTitle: "Exportación de joyas", jewelleryDesc: "Diseños elegantes, alta artesanía, piezas de calidad de exportación para mercados internacionales." },
    whyUs: { label: "La ventaja de Anarta", heading: "¿Por qué asociarse con nosotros?", sub: "No solo exportamos productos; construimos asociaciones de comercio internacional a largo plazo basadas en la confianza, la calidad y las prácticas comerciales transparentes.", items: ["Garantía de calidad premium en todos los envíos", "Modelos de precios globales competitivos", "Logística confiable y entrega oportuna", "Negocios y documentación transparentes", "Enfoque de asociación a largo plazo"], cta: "Descubre nuestra historia" },
    cta: { heading: "¿Listo para importar lo mejor?", sub: "Comuníquese con nuestro equipo de ventas internacionales hoy para analizar sus requisitos, solicitar muestras u obtener una cotización competitiva.", contact: "Contactar al equipo de ventas" },
    footer: { tagline: "EL ESPÍRITU DE ANARTA, EL PODER DEL COMERCIO", closing: "Gracias por elegirnos", quickLinks: "Enlaces rápidos", contactUs: "Contáctenos", followUs: "Síganos" },
    about: { badge: "Nuestra historia", heading: "Un socio comercial global en el que puede confiar", sub: "Anarta Exim es una empresa de importación y exportación con un enfoque global comprometida a brindar excelencia, precisión y confiabilidad.", mission: "Nuestra misión", missionItems: ["Ofrecer una calidad de producto superior", "Garantizar una logística global confiable", "Mantener operaciones transparentes", "Construir asociaciones internacionales a largo plazo"], vision: "Nuestra visión", visionText: "Convertirnos en una marca de exportación de confianza a nivel mundial reconocida por su innovación, calidad y consistencia." },
    contact: { badge: "Ponerse en contacto", heading: "Iniciar una conversación", sub: "Nuestro equipo de ventas internacionales responde dentro de las 24 horas.", nameLabel: "Nombre completo", emailLabel: "Dirección de correo electrónico", phoneLabel: "Número de teléfono", messageLabel: "Su mensaje", submit: "Enviar mensaje", successMsg: "¡Gracias! Responderemos dentro de las 24 horas.", address: "Dirección", phone: "Teléfono", email: "Correo electrónico" },
    metals: { badge: "Grado industrial", heading: "Metales y soluciones industriales", sub: "Sujetadores de primera calidad, componentes estructurales y soluciones de ingeniería.", specs: "Especificaciones técnicas", applications: "Aplicaciones clave", quoteTitle: "Solicite una cotización", quoteSub: "¿Necesita dimensiones personalizadas o precios al por mayor para su próximo proyecto?" },
    spices: { badge: "Excelencia culinaria", heading: "Exportación de especias premium", sub: "Llevando el aroma auténtico y los ricos sabores de la India al escenario mundial.", essence: "La esencia de la India", portfolio: "Nuestra cartera de productos", bulkTitle: "Pedidos al por mayor y mezclas personalizadas", bulkSub: "Atendemos a fabricantes de alimentos, distribuidores mayoristas y marcas minoristas globales." },
  }
};

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  // Side effect to handle document dir attribute for RTL
  React.useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}