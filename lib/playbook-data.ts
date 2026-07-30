// =============================================================
// Q4 Playbook 2026 — structured content (static data)
// Separated from components for easy Next.js pickup + i18n.
// Markets and locale are coupled 1:1 (market = country = language).
// No em dash "—" anywhere in copy (comma / colon / parentheses only).
// =============================================================

import type { MarketMeta, StepMeta, UIStrings, Tip, VisualSlot, KeyStat, Partner, Locale } from "./types";

// Selector order: UK (default), FR, ES. flag = country, label = "market" localized.
export const MARKETS_META: MarketMeta[] = [
  { id: "uk", locale: "en", flag: "\uD83C\uDDEC\uD83C\uDDE7", label: "Market" },
  { id: "fr", locale: "fr", flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "Marché" },
  { id: "es", locale: "es", flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Mercado" },
];

// Shared step meta (identical across markets, so switch mapping is direct).
export const STEP_META: StepMeta[] = [
  { order: 1, slug: "acquisition-ads",      accent: "#F2724B", icon: "target" },
  { order: 2, slug: "crm-activation",       accent: "#F0A93B", icon: "mail",       dual: true },
  { order: 3, slug: "onsite-experience",    accent: "#D9A21F", icon: "layout" },
  { order: 4, slug: "payment-checkout",     accent: "#4FA968", icon: "card" },
  { order: 5, slug: "logistics-delivery",   accent: "#17A997", icon: "truck" },
  { order: 6, slug: "customer-support",     accent: "#3AA0D6", icon: "support" },
  { order: 7, slug: "crm-retention",        accent: "#6A5AE0", icon: "repeat",     dual: true },
  { order: 8, slug: "loyalty-engagement",   accent: "#2965FE", icon: "heart",      loyoly: true },
  { order: 9, slug: "returns-after-sales",  accent: "#F74F9E", icon: "rotate" },
];

// -------------------------------------------------------------
// UI strings per locale (never hard-code copy in components).
// -------------------------------------------------------------
export const UI: Record<Locale, UIStrings> = {
  en: {
    kicker: "The Ultimate Q4 Playbook 2026",
    heroTitle: "Q4 can be 30-40% of your year. Here's the 9-stage playbook to not leave money on the table.",
    heroSub: "Nine stages, from the first ad to the final return. At each one, a partner expert shares the moves that win Black Friday, Cyber Week and the holidays.",
    heroCta: "Explore the journey",
    editedBy: "Curated by",
    mapTitle: "The 9 stages of the Q4 journey",
    mapSub: "Tap a stage to unlock its expert playbook.",
    variantAbstract: "Journey path",
    variantVertical: "Story scroll",
    layoutLabel: "Layout",
    free: "Free",
    locked: "Locked",
    tapToOpen: "Tap to open",
    tapToUnlock: "Tap to unlock",
    stageOf: "Stage {n} / 9",
    broughtBy: "Brought to you by",
    inThisChapter: "In this chapter",
    keyStatLabel: "The number that matters",
    source: "Source",
    expertTips: "Expert tips",
    visualSlot: "Visual placeholder",
    stagePartner: "Stage partner",
    visit: "Visit {name}",
    backToMap: "Back to the journey",
    prev: "Previous stage",
    next: "Next stage",
    upNext: "Up next",
    jumpTo: "Jump to a stage",
    // gating
    gateTitle: "Unlock all 9 stages and every expert tip",
    gateSub: "Full access to the interactive experience and all partner playbooks. One form, the whole journey.",
    fieldEmail: "Work email",
    fieldCompany: "Company name",
    fieldJob: "Job title",
    fieldWebsite: "Website URL",
    fieldPriority: "What's your #1 Q4 priority?",
    phPriority: "Select a stage",
    phEmail: "you@company.com",
    phCompany: "Acme Commerce",
    phJob: "Head of Retention",
    phWebsite: "https://yourstore.com",
    consent: "I agree that my details may be shared with Loyoly and the playbook partners so they can contact me.",
    privacy: "privacy policy",
    submit: "Unlock the playbook",
    submitting: "Unlocking...",
    errRequired: "This field is required.",
    errEmail: "Enter a valid work email.",
    errUrl: "Enter a valid website URL.",
    errConsent: "Please accept to continue.",
    unlockedToast: "Playbook unlocked. Enjoy all 9 stages.",
    redirectHeading: "You're in",
    redirectMessage: "Taking you to your priority: {stage}…",
    reduceHint: "",
    footNote: "Prototype with static data. Lead capture is simulated.",
  },
  fr: {
    kicker: "The Ultimate Q4 Playbook 2026",
    heroTitle: "Le Q4 peut peser 30 à 40% de votre CA. Voici le playbook en 9 étapes pour ne pas laisser filer votre chiffre.",
    heroSub: "Neuf étapes, de la première pub au dernier retour. À chacune, un partenaire expert partage les leviers qui font gagner le Black Friday, la Cyber Week et Noël.",
    heroCta: "Explorer le parcours",
    editedBy: "Édité par",
    mapTitle: "Les 9 étapes du parcours Q4",
    mapSub: "Cliquez sur une étape pour débloquer ses conseils d'experts.",
    variantAbstract: "Tracé du parcours",
    variantVertical: "Scroll narratif",
    layoutLabel: "Affichage",
    free: "Offert",
    locked: "Verrouillé",
    tapToOpen: "Cliquer pour ouvrir",
    tapToUnlock: "Cliquer pour débloquer",
    stageOf: "Étape {n} / 9",
    broughtBy: "Proposé par",
    inThisChapter: "Dans ce chapitre",
    keyStatLabel: "Le chiffre qui compte",
    source: "Source",
    expertTips: "Conseils d'experts",
    visualSlot: "Emplacement visuel",
    stagePartner: "Partenaire de l'étape",
    visit: "Visiter {name}",
    backToMap: "Retour à la frise",
    prev: "Étape précédente",
    next: "Étape suivante",
    upNext: "À suivre",
    jumpTo: "Aller à une étape",
    gateTitle: "Débloquez les 9 étapes du parcours et tous les conseils de nos experts",
    gateSub: "Accès complet à l'expérience interactive et à tous les conseils partenaires. Un seul formulaire, tout le parcours.",
    fieldEmail: "Email professionnel",
    fieldCompany: "Nom de l'entreprise",
    fieldJob: "Fonction",
    fieldWebsite: "URL du site",
    fieldPriority: "Quelle est votre priorité n°1 pour le Q4 ?",
    phPriority: "Choisissez une étape",
    phEmail: "vous@entreprise.com",
    phCompany: "Acme Commerce",
    phJob: "Responsable fidélisation",
    phWebsite: "https://votreboutique.com",
    consent: "J'accepte que mes coordonnées soient partagées avec Loyoly et les partenaires du playbook pour être recontacté.",
    privacy: "politique de confidentialité",
    submit: "Débloquer le playbook",
    submitting: "Déblocage...",
    errRequired: "Ce champ est requis.",
    errEmail: "Saisissez un email professionnel valide.",
    errUrl: "Saisissez une URL de site valide.",
    errConsent: "Veuillez accepter pour continuer.",
    unlockedToast: "Playbook débloqué. Profitez des 9 étapes.",
    redirectHeading: "C'est débloqué",
    redirectMessage: "Direction votre priorité : {stage}…",
    reduceHint: "",
    footNote: "Prototype avec données statiques. La capture de lead est simulée.",
  },
  es: {
    kicker: "The Ultimate Q4 Playbook 2026",
    heroTitle: "El Q4 puede ser el 30-40% de tu año. Aquí tienes el playbook de 9 etapas para no dejar ventas sin cerrar.",
    heroSub: "Nueve etapas, del primer anuncio a la última devolución. En cada una, un partner experto comparte las claves para ganar el Black Friday, la Cyber Week y Navidad.",
    heroCta: "Explorar el recorrido",
    editedBy: "Editado por",
    mapTitle: "Las 9 etapas del recorrido Q4",
    mapSub: "Toca una etapa para desbloquear sus consejos de expertos.",
    variantAbstract: "Trazado del recorrido",
    variantVertical: "Scroll narrativo",
    layoutLabel: "Vista",
    free: "Gratis",
    locked: "Bloqueado",
    tapToOpen: "Toca para abrir",
    tapToUnlock: "Toca para desbloquear",
    stageOf: "Etapa {n} / 9",
    broughtBy: "Presentado por",
    inThisChapter: "En este capítulo",
    keyStatLabel: "El dato que importa",
    source: "Fuente",
    expertTips: "Consejos de expertos",
    visualSlot: "Espacio visual",
    stagePartner: "Partner de la etapa",
    visit: "Visitar {name}",
    backToMap: "Volver al recorrido",
    prev: "Etapa anterior",
    next: "Etapa siguiente",
    upNext: "A continuación",
    jumpTo: "Ir a una etapa",
    gateTitle: "Desbloquea las 9 etapas del recorrido y todos los consejos de nuestros expertos",
    gateSub: "Acceso completo a la experiencia interactiva y a todos los consejos de los partners. Un solo formulario, todo el recorrido.",
    fieldEmail: "Email profesional",
    fieldCompany: "Nombre de la empresa",
    fieldJob: "Cargo",
    fieldWebsite: "URL del sitio",
    fieldPriority: "¿Cuál es tu prioridad n.º 1 para el Q4?",
    phPriority: "Elige una etapa",
    phEmail: "tu@empresa.com",
    phCompany: "Acme Commerce",
    phJob: "Responsable de fidelización",
    phWebsite: "https://tutienda.com",
    consent: "Acepto que mis datos se compartan con Loyoly y los partners del playbook para que puedan contactarme.",
    privacy: "política de privacidad",
    submit: "Desbloquear el playbook",
    submitting: "Desbloqueando...",
    errRequired: "Este campo es obligatorio.",
    errEmail: "Introduce un email profesional válido.",
    errUrl: "Introduce una URL de sitio válida.",
    errConsent: "Acepta para continuar.",
    unlockedToast: "Playbook desbloqueado. Disfruta las 9 etapas.",
    redirectHeading: "Listo",
    redirectMessage: "Te llevamos a tu prioridad: {stage}…",
    reduceHint: "",
    footNote: "Prototipo con datos estáticos. La captura de leads está simulada.",
  },
};

// helper to build a tip
const tip = (t: string, paras: string[], visuals?: VisualSlot[]): Tip => ({ title: t, paragraphs: paras, visuals: visuals || [] });
const V = (label: string, src?: string): VisualSlot => ({ label, src });

type StepContent = { title: string; teaser: string; keyStat: KeyStat; partners: Partner[] };

// -------------------------------------------------------------
// Per-market step content. Keyed by locale then slug.
// chapterAnchors are derived from tips at runtime.
// -------------------------------------------------------------
export const CONTENT: Record<Locale, Record<string, StepContent>> = {
  en: {
    "acquisition-ads": {
      title: "Acquisition & Ads",
      teaser: "Buy attention that converts when everyone is bidding.",
      keyStat: { value: 38, unit: "%", prefix: "+", label: "higher ROAS for brands that pre-build Q4 audiences before November", source: "AdPeak Q4 benchmark, 2025" },
      partners: [{
        name: "AdPeak", pitch: "Paid acquisition, tuned for peak season.", url: "#",
        tips: [
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
        ],
      }],
    },
    "crm-activation": {
      title: "CRM: Activation & Nurturing",
      teaser: "Turn first-time buyers into a list that opens.",
      keyStat: { value: 4.2, unit: "x", prefix: "", label: "more revenue per send from segmented welcome flows vs one-off blasts", source: "Flowmail data, 2025" },
      partners: [
        { name: "Flowmail", pitch: "Lifecycle email and automation.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Pulsecrm", pitch: "SMS and multi-channel nurturing.", url: "#",
          tips: [
            tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Make the right product impossible to miss.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "conversion lift from peak-tuned merchandising and clear urgency cues", source: "Shopfront study, 2025" },
      partners: [{
        name: "Shopfront", pitch: "On-site personalization and merchandising.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "payment-checkout": {
      title: "Payment & Checkout",
      teaser: "Remove every reason to abandon at the last step.",
      keyStat: { value: 18, unit: "%", prefix: "-", label: "checkout abandonment when express wallets and clear fees appear early", source: "PayGlide report, 2025" },
      partners: [{
        name: "PayGlide", pitch: "Frictionless checkout and payments.", url: "#",
        tips: [
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "logistics-delivery": {
      title: "Logistics & Delivery",
      teaser: "Promise a date you can actually keep.",
      keyStat: { value: 31, unit: "%", prefix: "+", label: "repeat intent when the delivery promise is met during peak", source: "Shipwise index, 2025" },
      partners: [{
        name: "Shipwise", pitch: "Delivery orchestration and tracking.", url: "#",
        tips: [
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "customer-support": {
      title: "Customer Support",
      teaser: "Answer fast when volume triples overnight.",
      keyStat: { value: 24, unit: "%", prefix: "+", label: "CSAT when peak tickets are deflected with self-serve answers", source: "Helply benchmark, 2025" },
      partners: [{
        name: "Helply", pitch: "Support automation and help center.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "crm-retention": {
      title: "CRM: Retention & Repurchase",
      teaser: "Win the second order before January.",
      keyStat: { statement: "CRM accounts for an average of 36% of total revenue for Underground Ecom's clients, making retention the highest-ROI channel in Q4, not an afterthought.", highlight: "36%", source: "Underground Ecom client data, Fashion & Apparel niche" },
      partners: [
        {
          name: "Underground Ecom",
          logo: "/assets/partners/underground-ecom-logo.png",
          pitch: "Underground Ecom is a rapidly growing Email marketing agency specialising in helping ecommerce businesses reach their full potential through retention marketing. We help global brands achieve an extra 20-30% in total revenue using our data-driven email marketing strategies.",
          url: "https://www.undergroundecom.com/",
          tips: [
            tip("Give Your Best Customers First Access - Before the Sale Goes Public", ["Q4 is the moment to reward loyalty, not dilute it. Before opening your BFCM offers to the world, create an exclusive 24-48 hour early-access window for your highest-value repeat buyers.", "This signals that their loyalty matters, drives high-intent purchases before peak demand hits, and means your deepest discounts are reserved for converting new or lapsed customers, not handed to people who would have bought regardless. Done well, it deepens loyalty and protects margin at the same time."], [V("Underground Ecom, Creative Is King", "/assets/partners/UK-CRM-Retention-Repurchase-underground-ecom-tip1.png")]),
            tip("Trigger Replenishment Campaigns Based on What You Already Know", ["The most powerful retention message is one sent at exactly the right moment. Use purchase history and average product lifecycle data to trigger replenishment campaigns before a customer runs out: a reorder reminder for a consumable, a refill prompt for a seasonal product, or a timely bundle at the natural restock window.", "These triggered sends consistently outperform broadcast campaigns on conversion rate and margin because they're relevant by design, not by luck."]),
            tip("Win Back Lapsed Customers in October - Before the Noise Hits", ["October is your quiet window before the Q4 storm. Launch a three-step win-back sequence (a re-introduction, an early-access or exclusive offer, and a final last-chance message) to re-engage customers who haven't purchased in six to twelve months.", "Competing in a less-crowded inbox means your offer feels like a privilege, not another BFCM blast. Brands that reactivate their lapsed segment in October consistently see stronger Q4 revenue from CRM than those who wait until November."], [V("Underground Ecom, Our Proven Impact", "/assets/partners/UK-CRM-Retention-Repurchase-underground-ecom-tip3.png")]),
            tip("Build a Post-Purchase Flow That Turns BFCM Buyers Into Loyal Customers", ["Q4 drives a wave of first-time and deal-motivated buyers who will not return without the right follow-up. Set up a post-purchase nurturing sequence that goes beyond the order confirmation: a product education touchpoint at day 2, a brand story or community moment at day 5, and a cross-sell or loyalty incentive at day 10.", "This flow consistently lifts 90-day repeat purchase rates and converts seasonal volume into sustainable lifetime value, regardless of which platform or channel you use."]),
            tip("Don't Go Dark in January - Your Competitors Will", ["Most brands switch off the moment the Christmas period ends, making January one of the most underused retention windows of the year. Your Q4 cohort (new customers, gift card recipients, and reactivated lapsed buyers) is still fresh but fading fast.", "A January nurturing sequence that acknowledges the new year, deepens the brand relationship, and gives customers a compelling reason to return can turn what brands write off as a quiet month into one of the strongest CRM revenue periods on the calendar."], [V("Underground Ecom, Our Proven Impact", "/assets/partners/UK-CRM-Retention-Repurchase-underground-ecom-tip5.png")]),
          ],
        },
        {
          name: "Paper Run",
          logo: "/assets/partners/paper-run-logo.png",
          pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris.",
          url: "#",
          keyStat: { value: 42, unit: "%", prefix: "+", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.", source: "Lorem ipsum" },
          tips: [
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
            tip("Consectetur adipiscing elit", ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."]),
            tip("Sed do eiusmod tempor incididunt", ["Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure."], [V("Lorem ipsum")]),
          ],
        },
      ],
    },
    "loyalty-engagement": {
      title: "Loyalty & Engagement",
      teaser: "Turn peak buyers into ambassadors, not one-offs.",
      keyStat: { value: 40, unit: "", prefix: "+", label: "engagement mechanics to reward every meaningful action after purchase", source: "Loyoly platform, 2026" },
      partners: [{
        name: "Loyoly", pitch: "The #1 post-purchase engagement platform for ecommerce brands.", url: "https://loyoly.io",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "returns-after-sales": {
      title: "Returns & After-sales",
      teaser: "Make returns a reason to buy again.",
      keyStat: { value: 92, unit: "%", prefix: "", label: "of shoppers rebuy from a brand after an easy return experience", source: "ReturnHero survey, 2025" },
      partners: [{
        name: "ReturnHero", pitch: "Returns and exchanges, self-serve.", url: "#",
        tips: [
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
  },
  fr: {
    "acquisition-ads": {
      title: "Acquisition & Ads",
      teaser: "Acheter une attention qui convertit quand tout le monde enchérit.",
      keyStat: { value: 38, unit: "%", prefix: "+", label: "de ROAS pour les marques qui préparent leurs audiences Q4 avant novembre", source: "Benchmark Adklix Q4, 2025" },
      partners: [{
        name: "Adklix", pitch: "L'acquisition payante, calibrée pour le pic.", url: "#",
        tips: [
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
        ],
      }],
    },
    "crm-activation": {
      title: "CRM : Activation & Nurturing",
      teaser: "Transformer les premiers acheteurs en une base qui ouvre.",
      keyStat: { value: 4.2, unit: "x", prefix: "", label: "de revenu par envoi grâce aux flows de bienvenue segmentés vs les envois de masse", source: "Données Sendora, 2025" },
      partners: [
        { name: "Sendora", pitch: "Email cycle de vie et automatisation.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Mailpulse", pitch: "SMS et nurturing multicanal.", url: "#",
          tips: [
            tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Rendre le bon produit impossible à manquer.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "de conversion grâce à un merchandising calibré pour le pic et des repères d'urgence clairs", source: "Étude Vitrina, 2025" },
      partners: [{
        name: "Vitrina", pitch: "Personnalisation on-site et merchandising.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "payment-checkout": {
      title: "Payment & Checkout",
      teaser: "Retirer toute raison d'abandonner à la dernière étape.",
      keyStat: { value: 18, unit: "%", prefix: "-", label: "d'abandon panier quand les wallets express et les frais clairs apparaissent tôt", source: "Rapport Paylibre, 2025" },
      partners: [{
        name: "Paylibre", pitch: "Checkout et paiement sans friction.", url: "#",
        tips: [
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "logistics-delivery": {
      title: "Logistics & Delivery",
      teaser: "Promettre une date que vous pouvez vraiment tenir.",
      keyStat: { value: 31, unit: "%", prefix: "+", label: "d'intention de rachat quand la promesse de livraison est tenue en période de pic", source: "Indice Cargoo, 2025" },
      partners: [{
        name: "Cargoo", pitch: "Orchestration de livraison et suivi.", url: "#",
        tips: [
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "customer-support": {
      title: "Customer Support",
      teaser: "Répondre vite quand le volume triple du jour au lendemain.",
      keyStat: { value: 24, unit: "%", prefix: "+", label: "de CSAT quand les tickets de pic sont déviés vers du self-service", source: "Benchmark Assista, 2025" },
      partners: [{
        name: "Assista", pitch: "Automatisation du support et centre d'aide.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "crm-retention": {
      title: "CRM : Retention & Repurchase",
      teaser: "Gagner la deuxième commande avant janvier.",
      keyStat: { value: 5, unit: "x", prefix: "", label: "moins cher de réactiver un acheteur Q4 que d'en acquérir un nouveau au Q1", source: "Analyse Reveni, 2025" },
      partners: [
        { name: "Reveni", pitch: "Flows de réactivation post-achat.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Fidelio", pitch: "Prédiction de churn et win-back.", url: "#",
          tips: [
            tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "loyalty-engagement": {
      title: "Loyalty & Engagement",
      teaser: "Transformer les acheteurs de pic en ambassadeurs, pas en one-shots.",
      keyStat: { value: 40, unit: "", prefix: "+", label: "mécaniques d'engagement pour récompenser chaque action utile après l'achat", source: "Plateforme Loyoly, 2026" },
      partners: [{
        name: "Loyoly", pitch: "La plateforme n°1 d'engagement post-achat pour les marques e-commerce.", url: "https://loyoly.io",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "returns-after-sales": {
      title: "Returns & After-sales",
      teaser: "Faire du retour une raison de racheter.",
      keyStat: { value: 92, unit: "%", prefix: "", label: "des acheteurs rachètent après une expérience de retour simple", source: "Enquête Retourna, 2025" },
      partners: [{
        name: "Retourna", pitch: "Retours et échanges en self-service.", url: "#",
        tips: [
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
  },
  es: {
    "acquisition-ads": {
      title: "Acquisition & Ads",
      teaser: "Comprar atención que convierte cuando todos pujan.",
      keyStat: { value: 38, unit: "%", prefix: "+", label: "de ROAS para las marcas que preparan sus audiencias Q4 antes de noviembre", source: "Benchmark Adverta Q4, 2025" },
      partners: [{
        name: "Adverta", pitch: "La adquisición de pago, ajustada al pico.", url: "#",
        tips: [
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
        ],
      }],
    },
    "crm-activation": {
      title: "CRM: Activation & Nurturing",
      teaser: "Convertir a los primeros compradores en una base que abre.",
      keyStat: { value: 4.2, unit: "x", prefix: "", label: "más ingresos por envío con flows de bienvenida segmentados frente a envíos masivos", source: "Datos Correara, 2025" },
      partners: [
        { name: "Correara", pitch: "Email de ciclo de vida y automatización.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Pulsomail", pitch: "SMS y nurturing multicanal.", url: "#",
          tips: [
            tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Hacer que el producto correcto sea imposible de pasar por alto.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "de conversión con un merchandising ajustado al pico y señales de urgencia claras", source: "Estudio Escaparate, 2025" },
      partners: [{
        name: "Escaparate", pitch: "Personalización on-site y merchandising.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "payment-checkout": {
      title: "Payment & Checkout",
      teaser: "Eliminar cualquier motivo para abandonar en el último paso.",
      keyStat: { value: 18, unit: "%", prefix: "-", label: "de abandono de carrito cuando los wallets express y los gastos claros aparecen pronto", source: "Informe Pagalibre, 2025" },
      partners: [{
        name: "Pagalibre", pitch: "Checkout y pagos sin fricción.", url: "#",
        tips: [
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "logistics-delivery": {
      title: "Logistics & Delivery",
      teaser: "Prometer una fecha que puedas cumplir de verdad.",
      keyStat: { value: 31, unit: "%", prefix: "+", label: "de intención de recompra cuando se cumple la promesa de entrega en pico", source: "Índice Enviaya, 2025" },
      partners: [{
        name: "Enviaya", pitch: "Orquestación de entrega y seguimiento.", url: "#",
        tips: [
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "customer-support": {
      title: "Customer Support",
      teaser: "Responder rápido cuando el volumen se triplica de la noche a la mañana.",
      keyStat: { value: 24, unit: "%", prefix: "+", label: "de CSAT cuando los tickets de pico se desvían a self-service", source: "Benchmark Ayudame, 2025" },
      partners: [{
        name: "Ayudame", pitch: "Automatización de soporte y centro de ayuda.", url: "#",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "crm-retention": {
      title: "CRM: Retention & Repurchase",
      teaser: "Ganar el segundo pedido antes de enero.",
      keyStat: { value: 5, unit: "x", prefix: "", label: "más barato reactivar a un comprador Q4 que adquirir uno nuevo en Q1", source: "Análisis Recupera, 2025" },
      partners: [
        { name: "Recupera", pitch: "Flows de reactivación post-compra.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Fidelia", pitch: "Predicción de churn y win-back.", url: "#",
          tips: [
            tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "loyalty-engagement": {
      title: "Loyalty & Engagement",
      teaser: "Convertir a los compradores de pico en embajadores, no en compras únicas.",
      keyStat: { value: 40, unit: "", prefix: "+", label: "mecánicas de engagement para recompensar cada acción útil tras la compra", source: "Plataforma Loyoly, 2026" },
      partners: [{
        name: "Loyoly", pitch: "La plataforma n.º 1 de engagement post-compra para marcas de ecommerce.", url: "https://loyoly.io",
        tips: [
          tip("Consectetur adipiscing elit", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Sed do eiusmod tempor incididunt", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "returns-after-sales": {
      title: "Returns & After-sales",
      teaser: "Hacer de la devolución una razón para volver a comprar.",
      keyStat: { value: 92, unit: "%", prefix: "", label: "de los compradores vuelven a comprar tras una devolución sencilla", source: "Encuesta Devolvia, 2025" },
      partners: [{
        name: "Devolvia", pitch: "Devoluciones y cambios en self-service.", url: "#",
        tips: [
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
  },
};
