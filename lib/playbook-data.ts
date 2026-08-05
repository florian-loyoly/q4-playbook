// =============================================================
// Q4 Playbook 2026 — structured content (static data)
// Separated from components for easy Next.js pickup + i18n.
// Markets and locale are coupled 1:1 (market = country = language).
// No em dash "—" anywhere in copy (comma / colon / parentheses only).
// =============================================================

import type { MarketMeta, StepMeta, UIStrings, Tip, VisualSlot, KeyStat, Partner, Locale, TipBlock } from "./types";

// Selector order: UK (default), FR, ES. flag = country, label = "market" localized.
export const MARKETS_META: MarketMeta[] = [
  { id: "uk", locale: "en", flag: "\uD83C\uDDEC\uD83C\uDDE7", label: "Market" },
  { id: "fr", locale: "fr", flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "Marché" },
  { id: "es", locale: "es", flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Mercado" },
];

// Shared step meta (identical across markets, so switch mapping is direct).
export const STEP_META: StepMeta[] = [
  { order: 1, slug: "acquisition-ads",      accent: "#F2724B", icon: "target" },
  { order: 2, slug: "crm-activation",       accent: "#F0A93B", icon: "mail" },
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
    freeTip: "1st tip free",
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
    viewCaseStudy: "View the case study",
    backToMap: "Back to the journey",
    prev: "Previous stage",
    next: "Next stage",
    upNext: "Up next",
    jumpTo: "Jump to a stage",
    // gating
    gateTitle: "Unlock all 9 stages and every expert tip",
    gateSub: "Full access to the interactive experience and all partner playbooks. One form, the whole journey.",
    gateInlineNote: "You've read the first tip. Unlock the rest of the playbook to keep reading, every stage and every partner tip.",
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
    marketSwitchHeading: "Switching market",
    marketSwitchMessage: "Each market has its own local partners and expert tips. We're taking you to the {market} playbook, keeping you on the same stage.",
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
    freeTip: "1er conseil offert",
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
    viewCaseStudy: "Voir le cas client",
    backToMap: "Retour à la frise",
    prev: "Étape précédente",
    next: "Étape suivante",
    upNext: "À suivre",
    jumpTo: "Aller à une étape",
    gateTitle: "Débloquez les 9 étapes du parcours et tous les conseils de nos experts",
    gateSub: "Accès complet à l'expérience interactive et à tous les conseils partenaires. Un seul formulaire, tout le parcours.",
    gateInlineNote: "Vous avez lu le premier conseil. Débloquez la suite du playbook pour continuer, toutes les étapes et tous les conseils partenaires.",
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
    marketSwitchHeading: "Changement de marché",
    marketSwitchMessage: "Chaque marché a ses propres partenaires locaux et conseils d'experts. On vous emmène vers le playbook {market}, en gardant la même étape.",
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
    freeTip: "1er consejo gratis",
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
    viewCaseStudy: "Ver el caso de cliente",
    backToMap: "Volver al recorrido",
    prev: "Etapa anterior",
    next: "Etapa siguiente",
    upNext: "A continuación",
    jumpTo: "Ir a una etapa",
    gateTitle: "Desbloquea las 9 etapas del recorrido y todos los consejos de nuestros expertos",
    gateSub: "Acceso completo a la experiencia interactiva y a todos los consejos de los partners. Un solo formulario, todo el recorrido.",
    gateInlineNote: "Has leído el primer consejo. Desbloquea el resto del playbook para seguir, todas las etapas y todos los consejos de los partners.",
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
    marketSwitchHeading: "Cambio de mercado",
    marketSwitchMessage: "Cada mercado tiene sus propios partners locales y consejos de expertos. Te llevamos al playbook {market}, manteniéndote en la misma etapa.",
    reduceHint: "",
    footNote: "Prototipo con datos estáticos. La captura de leads está simulada.",
  },
};

// helper to build a tip
const tip = (t: string, paras: string[], visuals?: VisualSlot[]): Tip => ({ title: t, paragraphs: paras, visuals: visuals || [] });
const V = (label: string, src?: string): VisualSlot => ({ label, src });

// Rich-tip helpers: build a tip from an ordered mix of blocks.
const tipB = (t: string, blocks: TipBlock[], visuals?: VisualSlot[]): Tip => ({ title: t, paragraphs: [], blocks, visuals: visuals || [] });
const PB = (text: string): TipBlock => ({ kind: "p", text });
const LB = (...items: string[]): TipBlock => ({ kind: "list", items });
const QB = (text: string): TipBlock => ({ kind: "quote", text });
const BOX = (heading: string, text: string, href?: string): TipBlock => ({ kind: "callout", heading: heading || undefined, text, href });

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
        name: "Lorem Ipsum", pitch: "Paid acquisition, tuned for peak season.", url: "#",
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
        {
          name: "Visualsoft",
          logo: "/assets/partners/visualsoft-logo.png",
          pitch: "We are the UK's unified retail agency. For over 25 years, Visualsoft has helped high street and multi-site brands bring their in-store and online worlds together, creating seamless experiences that drive loyalty, efficiency, and growth.",
          url: "https://www.visualsoft.co.uk/",
          author: { name: "Niall Young O'Brien", role: "eCommerce Consultant", photo: "/assets/partners/visualsoft-author.jpeg" },
          keyStat: { statement: "A targeted \"high-intent non-purchaser\" flow (triggered for subscribers who viewed products three times and abandoned checkout) converted at 2.20%, backed by a 42.39% open rate and a negligible 0.45% unsubscribe rate.", highlight: "2.20%", source: "Visualsoft internal data" },
          tips: [
            tip("Segment your high-LTV audience before the noise starts.", [
              "Identify your VIPs and repeat purchasers ahead of Black Friday and give them early or exclusive access.",
              "It sets the tone for the peak period, protects margin versus a blanket discount, and rewards the customers who matter most before they're competing with a flood of new, discount-only traffic.",
            ]),
            tip("Build a dedicated nurture flow for Q4-acquired subscribers.", [
              "A huge share of new sign-ups in Q4 come in through paid and social, chasing a deal. Don't drop them straight into your always-on newsletter.",
              "Build a short, purpose-built welcome/activation flow that introduces the brand, gets them into loyalty early, and sets expectations, rather than relying on generic BFCM blasts to do the work.",
            ]),
            tip("Prioritise the post-purchase window as hard as the pre-purchase one.", [
              "Q4 buyers are disproportionately one-and-done.",
              "A structured post-purchase nurture flow in the 30 days after a first order, covering replenishment prompts, complementary product suggestions, and loyalty enrolment, is one of the highest-leverage things you can do to turn a Q4 discount shopper into a repeat customer.",
            ]),
            tip("Personalise nurture content off real behaviour, not assumptions.", [
              "Static, one-size-fits-all nurture emails get lost in an inbox that's more crowded than any other point in the year.",
              "Use browse and purchase behaviour to dynamically tailor content and offers within your activation flows. Even simple category-based personalisation will outperform a generic send during Q4.",
            ]),
            tip("Align your CRM cadence with the paid and social calendar.", [
              "Q4 send frequency naturally increases, and if CRM isn't coordinated with paid promotions, you end up either competing with your own ads or fatiguing the same audience twice.",
              "Map your nurture and activation sends against the wider marketing calendar so each channel is doing a distinct job, not duplicating the same message.",
            ]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Make the right product impossible to miss.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "conversion lift from peak-tuned merchandising and clear urgency cues", source: "Shopfront study, 2025" },
      partners: [{
        name: "Kubix",
        logo: "/assets/partners/kubix-logo.svg",
        pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://kubixmedia.co.uk",
        noAuthor: true,
        tips: [
          tipB("Turn simple navigation into a merchandising tool", [
            PB("Most people arrive already knowing roughly what they want, so the fundamentals have not changed: navigation needs to be simple, clear and quick to scan."),
            PB("Once that is right, the menu becomes a merchandising tool in its own right. Test visual cues within the menu to surface seasonal offers, gift edits or new launches tied to specific collections and ranges."),
            PB("Keep testing what earns its place, because a menu built to promote everything ends up promoting nothing."),
          ], [V("Kubix", "/assets/partners/UK-onsite-experience-merchandising-kubix-tip1.png")]),
          tipB("Make collection pages an experience, without getting in the way", [
            PB("Collection pages are where a lot of peak browsing actually happens, and shoppers respond to pages that feel considered and visually rich rather than a flat grid of products."),
            PB("The aim is a collection that feels like an experience, with editorial imagery, clear seasonal framing and thoughtful grouping, but not so much design that it distracts from the products or slows the page down."),
            PB("Design for mobile first, since that is where most of this browsing takes place and where heavy layouts do the most damage."),
            PB("Done well, a merchandised collection guides people to the right products faster while still feeling like a brand worth buying from."),
          ], [V("Kubix", "/assets/partners/UK-onsite-experience-merchandising-kubix-tip2.png")]),
          tipB("Publish genuinely useful content that helps guide customers to purchase", [
            PB("Blog and guide content used to be a slow burn justified mainly by SEO, but that has changed."),
            PB("Shoppers now research and compare through ChatGPT and other LLMs, and useful, specific content is what makes your brand visible and quotable in those answers."),
            PB("A well-made gift guide or buying guide gives human visitors something worth reading during a decision-heavy peak period, while doing real commercial work for SEO, GEO and AEO. Write from genuine experience with the products rather than rewording a feed, because that specificity is exactly what search engines and AI platforms reward."),
          ], [V("Kubix", "/assets/partners/UK-onsite-experience-merchandising-kubix-tip3a.png"), V("Kubix", "/assets/partners/UK-onsite-experience-merchandising-kubix-tip3b.png")]),
          tipB("Match every marketing promotion with the page it promises", [
            PB("This is foundational and a lot of brands still miss it, especially at peak when ad spend is at its highest. Send paid traffic to the specific product or collection page that matches the advert, never the homepage, and make sure the offer and the creative someone saw in the ad are repeated on the PDP they land on."),
            PB("If a customer clicks a gifting ad for a particular product at a particular discount, that product, that price and that creative should be the first thing they see. Any gap between the ad and the page reintroduces doubt and wastes attention you have paid a premium for."),
            PB("Be sure to test before launch."),
            BOX("", "After Kubix rebuilt Scotch & Soda's Shopify store to strengthen navigation, UX and merchandising ahead of peak, the Amsterdam fashion brand saw total sales increase by over 40% year on year, with sessions up 66%.", "https://kubixmedia.co.uk/case-study/scotch-soda"),
          ], [V("Kubix", "/assets/partners/UK-onsite-experience-merchandising-kubix-tip4.png")]),
          tipB("Bring live shopping onto your Shopify store", [
            PB("Most brands now sell and engage across many channels, but the activity often lives everywhere except their own website. A dedicated hub or live shopping page inside your Shopify store gives customers one place to join live events, follow drops and get involved with the community, which matters most at peak when attention and urgency are high."),
            PB("It keeps that engagement on a property you own and can merchandise directly, rather than renting it on a social platform."),
            PB("Even a simple, well-signposted hub can turn a one-off peak shopper into a returning audience."),
          ]),
        ],
      }],
    },
    "payment-checkout": {
      title: "Payment & Checkout",
      teaser: "Remove every reason to abandon at the last step.",
      keyStat: { value: 18, unit: "%", prefix: "-", label: "checkout abandonment when express wallets and clear fees appear early", source: "PayGlide report, 2025" },
      partners: [{
        name: "Incididunt Labore", pitch: "Frictionless checkout and payments.", url: "#",
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
        name: "Dolore Magna", pitch: "Delivery orchestration and tracking.", url: "#",
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
        name: "Aliqua Enim", pitch: "Support automation and help center.", url: "#",
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
          logoScale: 1.4,
          pitch: "Underground Ecom is a rapidly growing Email marketing agency specialising in helping ecommerce businesses reach their full potential through retention marketing. We help global brands achieve an extra 20-30% in total revenue using our data-driven email marketing strategies.",
          url: "https://www.undergroundecom.com/",
          author: { name: "Emini Jaggan-Hilton", role: "Head of Partnerships, Events & Marketing", photo: "/assets/partners/underground-ecom-author.webp" },
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
        name: "Reveni",
        logo: "/assets/partners/reveni-logo.png",
        pitch: "We help eCommerce retailers optimise their returns process and enhance customer loyalty thanks to our instant refunds and exchanges solutions.",
        url: "https://www.reveni.com/",
        author: { name: "Kevin Paiser", role: "VP Global Marketing and Partnerships", photo: "/assets/partners/reveni-author.png" },
        keyStat: { statement: "Brands using Reveni's instant refunds see a 35% increase in their repurchase rate, and 37% of customers who receive an instant refund buy again within the first 24 hours.", highlight: "35%", source: "Reveni internal data" },
        tips: [
          tipB("Move your returns policy from the footer to the purchase decision", [
            PB("In Q4 a large share of your traffic is first-time buyers and gift-givers who do not know your brand yet, so returns anxiety peaks exactly when conversion matters most."),
            PB("Surface the policy on the PDP, cart and checkout as a benefit, \"Instant refund · Extended until 15 January\" not as legal fine print. Return policy terms are now a top-three purchase decision factor for 73% of global online shoppers, ranking above product reviews for shoppers aged 18-34."),
            PB("Returns are not only a post-purchase topic: they are a pre-purchase conversion lever, especially during holiday season."),
            QB("Make it clear in a welcome pop-up message."),
          ], [V("Reveni", "/assets/partners/UK-return-aftersales-reveni-tip1.png")]),
          tipB("Offer instant refunds to allow customers to buy more during the Black Friday / Discount period", [
            PB("Most refunds take 10-14 days from return to completion, which means customers could be receiving their money after the seasonal promotions have ended. Offering instant refunds means the customer receives their money in 5 seconds, which means they can continue purchasing before the offers expire."),
            PB("On average 37% of customers who receive an instant refund repurchase within the first 24 hours, and nearly half within three days."),
            PB("In the most expensive acquisition month of the year, turning a return into a sale is the most cost efficient way to drive revenue."),
            QB("Younger customers expect fast experiences, an Instant Refund experience will drive positive reviews and loyalty up."),
          ], [V("Reveni", "/assets/partners/UK-return-aftersales-reveni-tip2.png")]),
          tipB("Make exchange the default and refund the fallback", [
            PB("The January return wave is driven mostly by size and fit issues, not by rejection of the product, so a return only becomes a lost sale if your flow lets it."),
            PB("Provide a smart return flow to drive an exchange, and even an upsell, before a refund: offer Instant exchange with real-time stock availability first, then store credit with a small bonus, then refund."),
            PB("At Pompeii, 40% of customers now choose an exchange or store credit over a refund. Keeping revenue in the business during your weakest cash-flow month is a must."),
            QB("Offering Instant exchanges with an intuitive returns portal can drive cross-sell opportunities, increasing revenues from returns, as well as avoid holding stock waiting for the return item to arrive."),
          ], [V("Reveni", "/assets/partners/UK-return-aftersales-reveni-tip3.png")]),
          tipB("Extend the returns window, and announce it in November", [
            PB("Gifts bought on Black Friday are opened five weeks later, by which point a standard 14-30 day window has already expired."),
            PB("Announce an extended holiday policy explicitly (e.g. orders from 1 November returnable until 15 January) across ads, PDP and order confirmation emails. It removes a concrete objection on high-AOV gift orders, and it spreads return volume over several weeks instead of concentrating it in the first week of January."),
            PB("Ensure your returns portal provides enough flexibility to build out these seasonal rules and avoid manual tasks."),
            QB("This also helps reduce the number of Customer Service tickets from customers requesting exceptions."),
          ], [V("Reveni", "/assets/partners/UK-return-aftersales-reveni-tip4.png")]),
          tipB("Automate operations in October, analyse the data in January", [
            PB("Return volume peaks exactly when your support team is already at capacity, so the portal, approvals, labels and fraud rules need to be automated before the season starts, not during it."),
            PB("Bella Freud moved from refunds taking up to 10 days to instant refunds, less than 10 seconds: support calls dropped 20% and their Trustpilot score climbed from 4.3 to 4.8."),
            PB("Then use January return-reason data by SKU and market to fix your top offenders before the next campaign, Q4 is the largest sample of returns data you will get all year."),
            QB("Randomise the returns reasons during the portal flow to ensure higher data quality."),
          ], [V("Reveni", "/assets/partners/UK-return-aftersales-reveni-tip5.png")]),
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
        name: "Ben&Vic",
        logo: "/assets/partners/benandvic-logo.svg",
        pitch: "Ben&Vic transforme vos Ads en leviers de croissance rentables. Google Ads, Social Ads, Creative Ads & UGC : des campagnes pilotées par des experts.",
        url: "https://www.benandvic.com/",
        author: { name: "Victor Montaucet", role: "CEO", photo: "/assets/partners/benandvic-author.png" },
        keyStat: { statement: "Une créa vue 4 fois convertit environ 45% de moins. Au pic, c'est pas le budget qui manque. C'est la diversité créative.", highlight: "45%", source: "Analytics at Meta, Meta, 2025" },
        tips: [
          tipB("Teste tes offres avant le Black Friday", [
            PB("Le Black Friday, c'est pas le moment de découvrir si votre offre convertit. C'est le moment de la scaler. On voit trop de marques débarquer en novembre avec un -30% sur tout, jamais testé, poussé à gros budget. Et regarder en direct l'offre ne pas prendre. Alors que vous avez tout ce qu'il faut juste avant : la rentrée, les French Days, Halloween, le pré-BF. Des fenêtres parfaites pour tester à petit budget."),
            LB(
              "Testez dès la rentrée : offres, hooks, paliers de remise, à petit budget",
              "Cherchez le bon mécanisme, pas juste le pourcentage : bundle, cadeau offert, palier, early-access",
              "Laissez chaque test aller au bout : 3-4× votre CPA cible dépensé avant de trancher, pas une journée",
              "Arrivez au BF avec 2-3 offres validées, et un algo qui a déjà appris dessus",
            ),
            QB("Le Black Friday se gagne en septembre-octobre. On y scale des offres prouvées, on n'y teste rien."),
          ], [V("Ben&Vic", "/assets/partners/FR-acquisition-ads-benandvic-tip1.png")]),
          tipB("Surveillez votre taux de pénétration : une perte de signal peut faire ×4 sur votre CPA", [
            PB("Le taux de pénétration, c'est le ratio entre les vues de votre page de destination et les clics. En clair : sur 10 personnes qui cliquent, combien Meta voit vraiment arriver sur votre site. C'est la quantité de signal que vous renvoyez à l'algo. Et c'est au pic, quand vous scalez et que l'enchère s'emballe, que Meta a le plus besoin de voir qui achète. Problème : c'est exactement là que le signal se dégrade le plus. Refonte de site pour le BF, nouvelle bannière de consentement, tags déplacés."),
            LB(
              "Signal haut = Meta voit, le CPA descend, vous pouvez scaler.",
              "Signal bas = Meta est aveugle, le CPA grimpe. Pas parce que votre pub est mauvaise. Parce que l'info manque.",
            ),
            PB("Un tracking qui lâche le 20 novembre, c'est trois semaines de budget de pic optimisées à l'aveugle."),
            BOX("Un CPA ×4 sans que la pub ait bougé", "Compte e-commerce, taux stable à 0,50, CPA autour de 40€. En quelques mois, le taux tombe à 0,20 et le CPA grimpe à 160€. Le réflexe de tout le monde : couper le budget. Sauf que la pub n'y était pour rien. Une bannière cookie reconfigurée avait coupé le signal. On corrige le tracking : le taux remonte à 0,52, le CPA est divisé par 2,7 en 4 à 6 semaines. Sans toucher aux créas."),
            LB(
              "Contrôlez votre taux de pénétration avant le lancement Q4 : un décrochage = un problème de signal, pas de créa",
              "Un CPA ne se lit jamais seul : avant de couper, vérifiez que Meta enregistre bien vos conversions",
              "Pilotez sur CP ATC → CPC → CPA, et mesurez l'incrémental (+24% de conversions que l'attribution standard ne voit pas, selon Meta)",
              "Connectez vos conversions hors-ligne : au BF, l'omnicanal fait -21% de CPA contre +8% en online-only",
            ),
            QB("Un CPA qui grimpe n'accuse pas toujours la pub. Souvent, c'est Meta qui est devenu aveugle. Rétablissez le signal avant de couper quoi que ce soit."),
          ], [V("Ben&Vic", "/assets/partners/FR-acquisition-ads-benandvic-tip2.png")]),
          tipB("Misez sur la vidéo verticale : +48% de CPM au pic, contre +61% pour les autres formats", [
            PB("Quand tout le monde enchérit en même temps, la vidéo devient un levier de coût. Pendant le Black Friday, les vidéos 9:16 avec son ont pris +48% de CPM. Tous les autres formats : +61%. Même pic, moins de pression sur vos coûts."),
            PB("Pourquoi : la vidéo verticale, c'est le format que les gens consomment déjà toute la journée. Elle génère plus d'interactions, donc un meilleur score de qualité, donc un CPM plus bas dans l'enchère. Et côté conversion, 53% des utilisateurs disent acheter plus facilement quand un créateur présente le produit en Reels."),
            LB(
              "Constituez votre bibliothèque de vidéos verticales avec son avant la saison : la prod se rembourse en coûts de diffusion",
              "Une vidéo native = meilleur score de qualité = CPM plus bas dans l'enchère chaude",
              "Plus de la moitié du temps passé sur Instagram se joue en vidéo courte : misez sur les Reels et les créateurs",
              "Bonus : vos vidéos tiennent mieux la baisse de Noël (CVR -18% contre -33% pour les autres formats)",
            ),
            QB("En enchère saturée, une bonne vidéo ne coûte pas seulement moins cher à diffuser. Elle convertit mieux, plus longtemps."),
          ], [V("Ben&Vic", "/assets/partners/FR-acquisition-ads-benandvic-tip3.png")]),
          tipB("Rafraîchissez vos créas avant novembre : au rythme du Q4, une créa s'use en quelques jours", [
            PB("Le signe qui ne trompe pas : votre CTR baisse alors que votre CPM reste stable. C'est pas la concurrence. C'est votre créa qui fatigue. Et au rythme du Q4, ça arrive en quelques jours."),
            PB("La bonne nouvelle : la production n'est plus le goulot. L'IA a fait sauter le verrou (adoption des outils IA : +70% en un an, Air France a testé jusqu'à 150 combinaisons automatiquement). Mais l'IA produit du volume. L'angle, lui, reste votre travail."),
            LB(
              "Surveillez le duo CTR qui baisse / CPM stable = créa qui fatigue → refresh avant le pic",
              "Préparez plusieurs angles et hooks en amont, pas dix variantes du même",
              "Utilisez l'IA pour la prod (volume, déclinaisons), gardez la main sur l'angle",
              "Testez tôt : une créa se juge après 3-4× son CPA cible dépensé, pas à la journée",
            ),
            QB("Au pic, c'est pas le budget qui manque. C'est l'angle créatif. Préparez la réserve avant novembre."),
          ], [V("Ben&Vic", "/assets/partners/FR-acquisition-ads-benandvic-tip4.png")]),
          tipB("Lancez en Cost Cap avec de gros budgets : le volume, sans lâcher la rentabilité", [
            PB("La peur n°1 au pic : le CPA qui s'emballe dès qu'on ouvre les budgets."),
            PB("Le Cost Cap répond exactement à ça. Vous fixez un coût par résultat à ne pas dépasser en moyenne, et l'algo ne dépense que quand il peut le tenir. Vous pouvez lancer avec des budgets larges sans craindre le dérapage."),
            PB("Vous n'arbitrez plus entre volume et rentabilité : vous allez chercher tout le volume que votre cible de coût autorise. Le seul piège : un cap trop serré face à des enchères qui montent finit par brider votre diffusion."),
            LB(
              "Lancez en Cost Cap, pas en « coût le plus bas » : vous posez le plafond de CPA, l'algo maximise le volume en dessous",
              "Ouvrez des budgets larges : le budget n'est plus le frein, c'est le plafond de coût qui régule",
              "Calez votre cap sur votre vraie cible de CAC (marge déduite, issue de votre LTV par cohorte), pas sur un CPA au feeling",
              "Si la diffusion se bride au pic, desserrez le cap de quelques % plutôt que de couper : enchères hautes ≠ campagne ratée",
            ),
            QB("Le Cost Cap transforme votre budget en accélérateur : vous poussez le volume, le plafond garantit que chaque euro reste rentable."),
          ], [V("Ben&Vic", "/assets/partners/FR-acquisition-ads-benandvic-tip5.png")]),
        ],
      }],
    },
    "crm-activation": {
      title: "CRM : Activation & Nurturing",
      teaser: "Transformer les premiers acheteurs en une base qui ouvre.",
      keyStat: { value: 4.2, unit: "x", prefix: "", label: "de revenu par envoi grâce aux flows de bienvenue segmentés vs les envois de masse", source: "Données Sendora, 2025" },
      partners: [
        {
          name: "Klaviyo",
          logo: "/assets/partners/klaviyo-logo.png",
          pitch: "Klaviyo est un CRM B2C autonome et une plateforme de marketing IA qui centralise les données clients et automatise les messages par e-mail, SMS, RCS, WhatsApp et notification push permettant de piloter des campagnes personnalisées qui convertissent.",
          url: "https://www.klaviyo.com/fr/",
          author: { name: "Henri Soropogui Viret", role: "Responsable Marketing Europe du Sud", photo: "/assets/partners/klaviyo-author.jpg" },
          keyStat: { statement: "Les flows, comme la welcome series et l'abandon de panier, ne représentent que 5,3 % des envois mais génèrent 41 % du revenu email total, avec un revenu par destinataire près de 18 fois supérieur à celui des campagnes one-shot.", highlight: "41 %", source: "Email marketing benchmarks by Industry, Klaviyo, 2026" },
          tips: [
            tip("Commencez le list building bien avant le peak", [
              "Les shoppers pensent au Black Friday et à Noël bien avant que la saison ne démarre, alors votre acquisition d'opt-ins devrait suivre le même tempo. L'accès en avant-première est un levier simple : offrez un accès prioritaire à des produits en série limitée ou à des offres saisonnières en échange des coordonnées. Les outils interactifs comme les gift finders ou les quiz de style sont encore plus efficaces, car ils collectent de la donnée déclarative en plus de l'email ou du numéro.",
              "Résultat : dès l'opt-in, les réponses d'un nouvel abonné vous en disent déjà long sur son intention, qu'il achète pour lui en novembre ou pour un proche en décembre. Les auto-replies sur les réseaux sociaux sont une autre porte d'entrée redoutable : elles permettent de s'inscrire en email, SMS ou WhatsApp directement depuis une interaction Instagram.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-activation-nurturing-klaviyo-tip1.png")]),
            tip("Activez vos flows clés avant le pic de volume", [
              "Nos données sont claires : les top marques abordent le peak avec au moins 8 flows générateurs de revenus déjà en place, jusqu'à 13 pour les plus grosses. Au menu : welcome series, abandon de panier, abandon de navigation, post-achat, win-back, back-in-stock et VIP.",
              "Les marques les plus performantes misent sur l'activation et l'optimisation des flows qu'elles ont déjà, plutôt que d'en créer de nouveaux une fois que le trafic s'emballe. Le principe : les mettre en ligne et bien les roder en amont. La welcome series et les abandons de navigation ou de panier restent les flows les plus déployés, et pour cause : ce sont eux qui portent l'essentiel du nurturing des nouveaux abonnés et de la récupération des ventes perdues quand le volume grimpe.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-activation-nurturing-klaviyo-tip2.png")]),
            tip("Segmentez plus finement pour personnaliser vos envois", [
              "Nos données montrent que les marques les plus performantes ventilent 66 % de leurs envois sur au moins 6 segments, au lieu de traiter le peak comme un gros blast à toute la base. Les segments qui font vraiment bouger l'aiguille sont comportementaux, pas seulement démographiques : chasseurs de promos vs clients fidèles, actifs vs dormants, AOV élevé vs faible.",
              "Tout repose ici sur une règle : faire de votre CRM la single source of truth de votre donnée client. Plus cette donnée est complète, plus vous ciblez ces poches avec précision et adressez à chacune un message calé sur son intention, au lieu d'espérer qu'un envoi générique parle à tout le monde.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-activation-nurturing-klaviyo-tip3b.png")]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Rendre le bon produit impossible à manquer.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "de conversion grâce à un merchandising calibré pour le pic et des repères d'urgence clairs", source: "Étude Vitrina, 2025" },
      partners: [{
        name: "Webyn",
        logo: "/assets/partners/webyn-logo.png",
        pitch: "Webyn est une plateforme CRO (Conversion Rate Optimization) qui aide les e-commerçants à augmenter leur chiffre d'affaires sans augmenter leur budget acquisition. Grâce à une approche combinant analyse comportementale, expérimentation A/B et personnalisation on-site, Webyn identifie les frictions invisibles sur les sites e-commerce et les transforme en leviers de croissance mesurables.",
        url: "https://www.webyn.ai",
        author: { name: "Alexandre Farhat", role: "Co-fondateur", photo: "/assets/partners/webyn-author.png" },
        keyStat: { statement: "Sur mobile, seulement 1 % des visiteurs utilisent la recherche interne. Pourtant, ce segment convertit 2 à 3 fois mieux que les visiteurs qui naviguent via les menus.", highlight: "1 %", source: "Données propriétaires Webyn - analyse comportementale réalisée sur le site Nutrimuscle (2024)" },
        tips: [
          tipB("Votre barre de recherche convertit 2 à 3× mieux que le reste du site. Arrêtez de l'ignorer.", [
            PB("En Q4, vos visiteurs cherchent vite et partent vite. Pourtant, la majorité des sites e-commerce traitent la recherche interne comme un détail d'UX. C'est une erreur coûteuse."),
            PB("Chez l'un de nos clients, Nutrimuscle, nous avons analysé le comportement mobile : seulement 1 % des visiteurs mobiles utilisent la recherche interne, mais ce segment convertit 2 à 3 fois mieux que les visiteurs qui naviguent via les menus. Un potentiel énorme, totalement inexploité."),
            PB("En optimisant l'expérience de recherche (repositionnement de la barre, affichage des suggestions intelligentes, mise en avant des résultats pertinents) nous avons généré +5,3 % de taux de conversion et +14 405 € de revenus additionnels, mesurés en A/B test sur 4 semaines."),
            BOX("Action concrète pour Q4", "Avant le Black Friday, testez un repositionnement de votre barre de recherche en position haute sur mobile, et activez des suggestions prédictives orientées vers vos bestsellers et vos offres promotionnelles. L'impact est rapide et mesurable."),
          ], [V("Webyn", "/assets/partners/FR-onsite-experience-merchandising-webyn-tip1.png")]),
          tipB("La homepage générique coûte des conversions. Personnalisez-la selon le profil visiteur.", [
            PB("En période de pic, votre homepage accueille des profils très différents : nouveaux visiteurs, clients fidèles, visiteurs qui reviennent après abandon. Leur servir le même contenu statique, c'est rater l'opportunité de capter chacun au bon moment avec le bon message."),
            PB("Chez AIME Skincare nous avons identifié un frein majeur : les utilisateurs arrivant sur leur page de résultats de diagnostic voyaient un bloc de connexion en haut de page, créant une friction immédiate avant même d'accéder à la valeur. En le supprimant et en reorganisant la hiérarchie visuelle autour des résultats, nous avons obtenu +31 % d'ajouts au panier et +59 % de revenu par session."),
            BOX("Action concrète pour Q4", "Identifiez les 2-3 segments de visiteurs les plus importants sur votre site (nouveaux vs. revenants, mobile vs. desktop) et créez des variations de vos blocs hero et CTA principaux adaptées à chaque segment. Même un changement simple (un message différent, une offre mise en avant différemment) peut avoir un impact significatif en période de forte concurrence."),
          ], [V("Webyn", "/assets/partners/FR-onsite-experience-merchandising-webyn-tip2.png")]),
          tipB("Vos menus reflètent votre catalogue, pas les intentions de vos clients. Changez ça avant le Q4.", [
            PB("Beaucoup d'e-commerçants construisent leur navigation selon la logique de leur catalogue produit. Mais vos visiteurs, eux, naviguent selon leurs propres priorités. L'écart entre les deux, c'est du trafic perdu et des conversions ratées, surtout quand l'attention est rare, comme en Q4."),
            PB("Chez Fusalp, l'analyse des données comportementales a révélé une asymétrie frappante : 26 % des visiteurs allaient spontanément vers les pages Ski, contre seulement 13 % vers les pages Prêt-à-Porter. Pourtant, la navigation principale ne reflétait pas cette priorité. En repositionnant la catégorie Ski en position dominante dans le menu, nous avons mesuré +30 % de taux de conversion et +56 % de clics vers les catégories Ski."),
            BOX("Action concrète pour Q4", "Analysez dès maintenant vos données de navigation (heatmaps, flux de clics, analytics) pour identifier vos pages et catégories les plus visitées. Si votre menu ne reflète pas ces priorités, testez un repositionnement avant le Black Friday. C'est l'un des A/B tests les plus rapides à mettre en place et les plus impactants en période de pic."),
          ], [V("Webyn", "/assets/partners/FR-onsite-experience-merchandising-webyn-tip3.png")]),
          tipB("En Q4, vos promos doivent sauter aux yeux, pas se noyer dans votre catalogue", [
            PB("Black Friday, Cyber Monday, Noël : les consommateurs cherchent activement les bonnes affaires. Si vos promotions sont noyées dans votre catalogue sans moyen de les filtrer rapidement, vous perdez des ventes au profit de concurrents plus lisibles."),
            PB("Chez Passage du Désir, nous avons observé que malgré un catalogue promotionnel actif, les visiteurs ne trouvaient pas facilement les articles soldés dans les pages listing. La solution a été simple et efficace : ajouter une option de tri \"Meilleures promotions\" en tête de liste dans les pages catégories. Résultat : +7 % d'uplift de conversion mesuré en A/B test."),
            BOX("Action concrète pour Q4", "Avant le Black Friday, auditez votre parcours promotionnel : est-ce qu'un visiteur qui arrive sur votre site peut trouver vos meilleures offres en moins de 2 clics ? Ajoutez un filtre ou un tri dédié aux promotions dans vos pages listing, et testez une mise en avant visuelle distincte (badge, couleur, position) pour les produits en promotion."),
          ], [V("Webyn", "/assets/partners/FR-onsite-experience-merchandising-webyn-tip4.png")]),
          tipB("Un A/B test sur la couleur de votre bouton \"Ajouter au panier\" peut générer +23 % d'ajouts, en quelques jours", [
            PB("On sous-estime souvent l'impact des micro-détails sur la conversion. Couleur, wording, taille, position d'un bouton… Ces éléments paraissent anodins mais influencent directement la décision d'achat, surtout quand l'attention du visiteur est limitée en période de Q4."),
            PB("Chez France Toner, revendeur de consommables d'impression, nous avons repositionné les résultats de recherche interne pour mieux correspondre à l'intention des visiteurs : résultat, +18 % d'accès aux pages produits. Dans un second test, une simple modification de la couleur du CTA \"Ajouter au panier\" a suffi à générer +23 % d'ajouts au panier, sans changer le prix, le texte, ni le contenu de la page."),
            BOX("Action concrète pour Q4", "Ne partez pas en période de pic avec des hypothèses non testées. Lancez dès maintenant un A/B test sur vos CTAs principaux (couleur, wording \"Ajouter au panier\" vs \"Commander maintenant\", taille). Ces tests se paramètrent en moins d'une heure et livrent des résultats en 1 à 2 semaines, largement avant le Black Friday."),
          ], [V("Webyn", "/assets/partners/FR-onsite-experience-merchandising-webyn-tip5.png")]),
        ],
      }],
    },
    "payment-checkout": {
      title: "Payment & Checkout",
      teaser: "Retirer toute raison d'abandonner à la dernière étape.",
      keyStat: { value: 18, unit: "%", prefix: "-", label: "d'abandon panier quand les wallets express et les frais clairs apparaissent tôt", source: "Rapport Paylibre, 2025" },
      partners: [{
        name: "Payplug",
        logo: "/assets/partners/payplug-logo.png",
        pitch: "Payplug est la solution la plus simple pour accepter les paiements en ligne. Elle s'adresse aux e-marchands et leur permet d'accepter les paiements par carte bancaire.",
        url: "https://www.payplug.com/fr/",
        keyStat: { statement: "Une optimisation rigoureuse du checkout peut permettre de récupérer jusqu'à 35 % des ventes perdues, sans générer plus de trafic.", highlight: "35 %", source: "Baymard Institute" },
        tips: [
          tip("Optimisez parfaitement votre checkout", [
            "Plus de 70 % des abandons de panier ont lieu au moment du checkout, et 18 % d'entre eux sont directement liés à un processus de paiement trop complexe (Baymard Institute, 2025).",
            "Demandez uniquement les informations indispensables : fusionnez facturation et livraison, activez l'autocomplétion et proposez l'achat invité par défaut (guest-first).",
            "Pour maximiser vos conversions, pensez au One Page Checkout (OPC) : en rassemblant l'adresse, le transporteur et le paiement sur un seul écran sans rechargement de page, vous supprimez les frictions inutiles, particulièrement sur mobile.",
            "Preuve que ce modèle s'impose comme la norme : PrestaShop répond à une attente historique en intégrant un One Page Checkout natif dans sa version 9.2 (disponible en octobre 2026). Une nouveauté out-of-the-box majeure à activer avant la fin d'année pour offrir une expérience d'achat ultra-fluide.",
          ], [V("Payplug", "/assets/partners/FR-payment-checkout-payplug-tip1.jpg")]),
          tip("Calibrez votre curseur fraude au lieu de le durcir uniformément", [
            "Le BFCM est une période particulièrement exposée à la fraude CNP (carte non présente) : au milieu de milliers de commandes légitimes, les fraudeurs savent que leurs transactions passent plus facilement inaperçues. Mais un système trop rigide déclenche une authentification forte sur chaque transaction.",
            "Résultat : des frictions inutiles qui font fuir des acheteurs légitimes au moment de l'achat. Le Smart 3DS évalue plutôt le risque de chaque transaction en temps réel, et ne déclenche l'authentification forte que si le profil le justifie.",
            "Concrètement, définissez des règles d'exemption selon le montant, l'historique du client ou le mode de livraison, plutôt qu'un seuil unique pour tous.",
            "Suivez aussi votre taux de refus de paiement : une hausse soudaine pendant le pic de trafic est souvent le signe d'un système trop strict, pas d'une vague de fraude.",
          ], [V("Payplug", "/assets/partners/FR-payment-checkout-payplug-tip2.jpg")]),
          tip("Proposez des moyens de paiement alternatifs : préparez l'arrivée de Wero", [
            "Diversifier ses moyens de paiement est un levier de conversion majeur (Apple Pay, moyens de paiement locaux etc.).",
            "Parmi les options, le paiement fractionné (Buy Now Pay Later) fait figure d'incontournable en cette période de fin d'année avec des résultats prouvés : un taux de conversion en hausse de 20 à 30 %, un panier moyen en hausse de 30 à 50 % et jusqu'à 35 % d'abandon de panier en moins (E-commerce Nation, Étude BNPL).",
            "Avec Payplug, vous intégrez simplement l'option à vos moyens de paiement avec Scalapay (disponibles sur Shopify, PrestaShop, WooCommerce et Magento) ou Oney.",
            "En parallèle, une nouveauté est à surveiller cette année : Wero, la solution de paiement souveraine européenne forte de plus de 55 millions d'utilisateurs (données EPI/Wero, juin 2026). Déjà disponible sur Payplug en Allemagne et en Belgique, la solution pour la France est en phase pilote avant un lancement à l'automne 2026, alors contactez nos équipes pour être parmi les premiers marchands prêts d'ici la fin d'année.",
          ], [V("Payplug", "/assets/partners/FR-payment-checkout-payplug-tip3.jpg")]),
          tip("En boutique, ne faites pas attendre vos clients", [
            "51 % des consommateurs ont déclaré préférer faire leurs achats en magasin pendant le Black Friday 2025, souvent après avoir repéré le produit en ligne (Bilan Black Friday 2025, Payplug).",
            "Pour éviter la file d'attente aux heures de pointe, équipez vos vendeurs d'un encaissement mobile (SoftPOS / Tap to Pay) qui permet de finaliser la vente directement en rayon, en cabine d'essayage, ou là où se trouve le client plutôt qu'uniquement à la caisse.",
            "Avec le SoftPOS, l'encaissement n'est plus un lieu fixe mais une fonction mobile : chaque vendeur devient capable de finaliser une transaction à tout moment. Le marché mondial du SoftPOS doit plus que tripler d'ici 2034, signe que cet usage devient un standard plutôt qu'un simple gadget (Fortune Business Insights).",
          ]),
          tip("Appuyez-vous sur l'IA pour gagner du temps en SAV et limiter les risques d'erreur", [
            "Pendant le BFCM, la précipitation du rush peut vite transformer chaque manipulation manuelle en risque d'erreur, alors que votre trafic peut être multiplié par 5, 10, voire 15 en quelques minutes (Payplug, \"MCP PrestaShop : pilotez vos commandes et vos paiements avec l'IA\", juillet 2026).",
            "Pour y faire face, l'IA peut vous assister dans la gestion commerciale et celle du service client. Avec le Model Context Protocol (MCP) Payplug, votre assistant IA devient un véritable copilote financier, capable de générer un lien de paiement ou de déclencher un remboursement en langage naturel.",
            "L'IA prépare chaque action en 2 secondes, mais rien n'est exécuté sans votre validation manuelle : vous gagnez en vitesse sans jamais perdre la main sur vos finances. De quoi transformer la pression opérationnelle du Q4 en avantage compétitif.",
          ], [V("Payplug", "/assets/partners/FR-payment-checkout-payplug-tip5.jpg")]),
        ],
      }],
    },
    "logistics-delivery": {
      title: "Logistics & Delivery",
      teaser: "Promettre une date que vous pouvez vraiment tenir.",
      keyStat: { value: 31, unit: "%", prefix: "+", label: "d'intention de rachat quand la promesse de livraison est tenue en période de pic", source: "Indice Cargoo, 2025" },
      partners: [{
        name: "Dolore Magna", pitch: "Orchestration de livraison et suivi.", url: "#",
        tips: [
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Lorem ipsum dolor sit amet", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
    "customer-support": {
      title: "Customer Support",
      teaser: "Répondre vite quand le volume triple du jour au lendemain.",
      keyStat: { statement: "Les marques les plus performantes sur Yuma automatisent jusqu'à 87% des tickets de support éligibles sur un trimestre complet, tout en maintenant un CSAT de 4,5 sur 5.", highlight: "87%", source: "Yuma AI, State of CX Automation in Ecommerce 2026 (benchmark de plus de 100 marchands Shopify et Shopify Plus)." },
      partners: [{
        name: "Yuma AI",
        logo: "/assets/partners/Yuma-logo.png",
        pitch: "Yuma is the most advanced AI platform built for e-commerce. Our agentic AI products help merchants automate customer interactions across every stage of the customer journey. Whether it’s answering support tickets, recovering abandoned carts, or offering personalized product recommendations, Yuma’s AI Agents work 24/7 to deliver results: Happier customers, higher revenue, and lower costs.",
        url: "https://yuma.ai",
        author: { name: "Guillaume Luccisano", role: "Founder & CEO", photo: "/assets/partners/yuma-author.png" },
        tips: [
          tip("Automatisez les actions, pas seulement les réponses", [
            "Voici la vraie ligne de partage dans l'automatisation du support : votre IA se contente-t-elle de rédiger une réponse, ou fait-elle réellement le job ?",
            "La valeur apparaît quand l'IA passe à l'action, elle émet le remboursement, modifie la commande, traite l'échange, annule l'abonnement, puis clôture le ticket toute seule. La rédaction laisse encore le travail sur les bras de votre équipe ; l'action l'enlève complètement.",
            "Notre benchmark est sans détour sur ce point : le plafond de l'automatisation, ce n'est pas l'intelligence de l'IA, ce sont les droits et les intégrations que vous lui donnez. Connectez votre IA à vos workflows qui touchent à l'argent avant le Q4, car c'est précisément là que se cachent les plus gros gains.",
          ], [V("Yuma AI", "/assets/partners/FR-Customer Support-yuma-tip1.png")]),
          tip("Gardez vos meilleurs agents concentrés sur les conversations à forte valeur", [
            "Le Q4 n'ajoute pas seulement des tickets, il ajoute du bruit. Laissez l'IA absorber le répétitif, statut de commande, changement d'adresse, retours simples, pour que vos meilleurs éléments ne croulent pas sous les mêmes cinq questions tout le mois de décembre.",
            "Ça libère vos agents pour les cas qui font vraiment la différence : sujets complexes, clients VIP et conversations avec du chiffre en jeu. Ce n'est pas l'IA contre votre équipe, c'est l'IA qui gère le volume pour que votre équipe gère la valeur.",
            "Vos agents terminent le peak en donnant le meilleur d'eux-mêmes, pas en faisant les tâches les plus ingrates.",
          ], [V("Yuma AI", "/assets/partners/FR-Customer Support-yuma-tip2.png")]),
          tip("Le vrai KPI du Q4, ce sont les recrutements que vous n'avez pas eu à faire", [
            "Le taux d'automatisation fait joli sur un dashboard, mais le ROI que votre équipe finance ressent vraiment, ce sont les renforts saisonniers que vous n'avez jamais eu à embaucher.",
            "Le volume de support explose de 1,5x à 6x au pic, et dimensionner ses effectifs sur ce pic revient à payer des agents inoccupés les dix autres mois de l'année.",
            "La capacité de l'IA est élastique : elle absorbe la vague, puis se réduit, sans course au recrutement ni licenciements post-fêtes. Comme le résumait une marque de notre taille, chaque point d'automatisation, c'est du headcount bien réel. Comptez les embauches que vous vous êtes épargnées : voilà votre vrai ROI de peak season.",
          ], [V("Yuma AI", "/assets/partners/FR-Customer Support-yuma-tip3.png")]),
          tip("Ne laissez pas votre CSAT chuter quand le volume de tickets explose", [
            "Le vieux réflexe partait du principe qu'automatiser plus, c'est offrir un moins bon service. Les données enterrent ce mythe : sur plus de 100 marques, plus d'automatisation ne s'est traduite par aucun compromis sur la satisfaction, et le CSAT se maintient autour de 4,5 sur 5 même chez les plus gros automatisateurs.",
            "Une IA bien configurée répond vite, de façon cohérente et 24/7, si bien que la qualité ne craque pas quand le volume double ou triple.",
            "Le client reçoit la même réponse fidèle à votre marque à 2h du matin un jour de Black Friday que celle qu'il aurait eue un mardi creux. Le peak, c'est justement le moment où la cohérence compte le plus, et justement celui où les équipes 100 % humaines commencent à décrocher.",
          ], [V("Yuma AI", "/assets/partners/FR-Customer Support-yuma-tip4.png")]),
        ],
      }],
    },
    "crm-retention": {
      title: "CRM : Retention & Repurchase",
      teaser: "Gagner la deuxième commande avant janvier.",
      keyStat: { value: 5, unit: "x", prefix: "", label: "moins cher de réactiver un acheteur Q4 que d'en acquérir un nouveau au Q1", source: "Analyse Reveni, 2025" },
      partners: [
        {
          name: "ThirtyFive",
          logo: "/assets/partners/thirtyfive-logo.svg",
          pitch: "ThirtyFive accompagne les marques e-commerce dans la structuration, l'analyse et le pilotage de leur stratégie CRM. Nous transformons vos données en décisions et votre rétention en croissance incrémentale, grâce à une approche sur-mesure pensée pour vos enjeux business.",
          url: "https://www.thirtyfive.fr/",
          author: { name: "Maxime Cal", role: "CEO", photo: "/assets/partners/thirtyfive-author.png" },
          keyStat: { statement: "+5% de rétention = +25% à +95% de profitabilité. Autrement dit : le vrai retour sur votre Q4 ne se joue pas sur le CA de novembre, mais sur ce que vous faites de vos clients en décembre, janvier et après.", highlight: "+5%", source: "Bain & Company (effet Reichheld)" },
          tips: [
            tipB("Taguez chaque client à l'entrée, ou votre base sera illisible en janvier", [
              PB("En 48h de Black Friday, vous recrutez plus de clients qu'en deux mois normaux. Le 15 janvier, vous voudrez savoir lesquels rappeler en priorité. Et là, c'est trop tard : dans votre base, ils se ressemblent tous."),
              PB("Un client entré à plein tarif et un chasseur de -40% sont devenus la même ligne dans Klaviyo. Le tag posé à chaud, c'est la seule chose qui sépare une base pilotable d'un brouillard. Capturez-le dès la 1ʳᵉ commande :"),
              LB(
                "Entrée avec ou sans code promo, et niveau de remise obtenu",
                "Mécanique déclencheuse : remise globale, bundle, offre VIP, cadeau",
                "Produit d'entrée : produit phare seul, pack, gifting",
              ),
              QB("C'est le geste le plus négligé de Q4, et le moins cher : cinq minutes de paramétrage qui rendent lisibles les trois mois suivants."),
            ]),
            tipB("Votre client Black Friday n'est pas un mauvais client, il est ancré au prix", [
              PB("On entend souvent que les clients Black Friday ne reviennent jamais, et les courbes de janvier semblent parfois le confirmer. Mais comparer une cohorte BF à une cohorte de mars, c'est comparer deux personnes qui ne sont pas entrées par la même porte : l'une cherchait votre marque, l'autre cherchait une affaire. Le clivage « nouveau contre récurrent » est bien trop grossier pour voir cette différence."),
              PB("Segmentez plutôt par comportement réel :"),
              LB(
                "Nouveau avec promo ou nouveau sans promo",
                "Acheteur de bundle / pack BF ou acheteur du produit phare seul",
                "Acheteur gifting (cadeau) ou usage perso",
                "Récurrent au panier anormalement élevé = signal de stockage",
              ),
              QB("L'objectif n'est pas de juger ce client, mais de le désancrer. La vraie question n'est pas de savoir s'il est bon ou mauvais, c'est de savoir comment vous allez le faire évoluer."),
            ], [V("ThirtyFive", "/assets/partners/FR-CRM-retention-repurchase-thirtyfive-tip2.png")]),
            tipB("Déclenchez votre flow de seconde commande entre J+30 et J+60", [
              PB("Il y a un compte à rebours que personne ne regarde. Passé 60 jours après la première commande, la probabilité qu'un client repasse à l'action s'effondre. Et pendant que vous soldez encore vos stocks, votre cohorte Black Friday traverse cette fenêtre en silence, avant qu'on ne la déclare « mauvaise » alors qu'on ne lui a jamais tendu la main. Ce sont les flows, pas les campagnes ponctuelles, qui rattrapent ce moment."),
              PB("La règle : provoquer un 2ᵉ achat qui ne repose pas sur une nouvelle remise."),
              LB(
                "Relancez sur la valeur, l'usage, le contenu, pas sur un rabais de plus",
                "Recommandez selon le produit d'entrée, pas une remise généralisée sur tout le site",
                "Réservez les incitations aux seuls segments qui ne bougent que sur offre",
                "Orchestrez sans doublonner : Email (J) → SMS (J+1) → WhatsApp (J+2)",
              ),
              QB("C'est ce 2ᵉ achat sans rabais qui transforme un chasseur de promo en client tout court."),
            ], [V("ThirtyFive", "/assets/partners/FR-CRM-retention-repurchase-thirtyfive-tip3.png")]),
            tipB("Coupez la pression promo dès janvier, sinon vous fabriquez des accros", [
              PB("En janvier, les ventes retombent et la tentation est réelle : relancer une petite promo pour garder le rythme, puis une autre la semaine suivante. Sans le voir, vous apprenez à toute votre base une seule chose : il suffit d'attendre le prochain code. Un client qui n'achète que sous promo n'a pas de valeur perçue stable, et c'est en janvier que ça se joue, pas au prochain BF."),
              LB(
                "Baissez volontairement la fréquence des offres après le pic",
                "Revenez à une communication de valeur (produit, marque, usage, contenu)",
                "Réservez les remises à des déclencheurs précis, segment par segment",
                "Traitez à part les segments désancrés et ceux encore accros au prix",
              ),
              QB("Promo en continu = dépendance. Promo ciblée + valeur = rétention."),
            ]),
            tipB("Mesurez la LTV par mode d'entrée, puis renvoyez-la au Paid", [
              PB("La vraie question de votre Q4 ne se pose pas en novembre, mais en avril : combien vaut, réellement, un client entré au Black Friday ? Tant que vous lisez votre base en bloc, vous ne le saurez jamais, et vous rachèterez les mêmes profils trop cher l'an prochain, persuadés que le Black Friday fonctionne."),
              PB("Suivez chaque cohorte selon la façon dont elle est entrée, marge déduite, et faites remonter le verdict à l'acquisition."),
              LB(
                "Réachat à M1 / M3 / M6, LTV promo vs non-promo, bundle vs produit seul",
                "Marge réelle par cohorte, une fois la remise déduite",
                "Repère FR : une rétention ~30% est déjà excellente, >35% satisfaisante (HubSpot FR)",
                "Une mécanique BF qui recrute à faible LTV → on ajuste le CAC cible l'an prochain",
              ),
              QB("Le CRM ne subit pas Q4, il apprend au Paid à mieux le préparer. La boucle se referme."),
            ], [V("ThirtyFive", "/assets/partners/FR-CRM-retention-repurchase-thirtyfive-tip5.png")]),
          ],
        },
        {
          name: "Klaviyo",
          logo: "/assets/partners/klaviyo-logo.png",
          pitch: "Klaviyo est un CRM B2C autonome et une plateforme de marketing IA qui centralise les données clients et automatise les messages par e-mail, SMS, RCS, WhatsApp et notification push permettant de piloter des campagnes personnalisées qui convertissent.",
          url: "https://www.klaviyo.com/fr/",
          author: { name: "Henri Soropogui Viret", role: "Responsable Marketing Europe du Sud", photo: "/assets/partners/klaviyo-author.jpg" },
          keyStat: { statement: "Les marques voient plus de nouveaux clients pendant le peak que sur les trois mois précédents réunis, et les 10 plus grosses journées de shopping à elles seules amènent plus de nouveaux acheteurs que tout le mois de février.", highlight: "10", source: "How BFCM Shapes Retail: Turning New Shoppers Into Lifelong Customers, Klaviyo, 2025" },
          tips: [
            tip("Faites de votre expérience post-achat votre premier levier de réachat", [
              "La relation ne s'arrête pas au checkout, c'est là que la rétention commence, et ce qui se passe ensuite décide si ce client rachètera ou non. Après la confirmation de commande, misez sur la pédagogie produit, anticipez les retards de livraison avant même que le client ne pose la question, et calez vos rappels de réassort sur la façon dont le produit se consomme réellement.",
              "Passez à l'échelle avec la segmentation : regroupez vos clients par historique d'achat (chasseurs de promos vs gros paniers), par région et saison, ou selon leur navigation en temps réel, puis laissez une recommandation cross-category vraiment pertinente faire le travail à la place d'un upsell générique.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-retention-repurchase-klaviyo-tip1.png")]),
            tip("Transformez les nouveaux acheteurs du peak en membres fidèles", [
              "Le peak amène une vague de nouveaux acheteurs one-time que vous ne verriez pas d'habitude, alors poussez votre programme de fidélité à fond tant que ce trafic est à son maximum, et pas seulement auprès de votre base existante. Affichez le solde de points et les récompenses dès le checkout et dans les messages post-achat, plutôt que de les enterrer dans un espace compte : un tout nouveau client voit ainsi l'intérêt de s'inscrire pendant que sa première commande est encore fraîche.",
              "Offrez des multiplicateurs de points plus généreux sur les gros paniers pendant la vente, au lieu de courir à la remise la plus agressive : c'est ce qui transforme un achat ponctuel en raison de revenir. Une fois le calme revenu, basculez tous ceux qui ont acheté sans s'inscrire dans un flow de nurturing qui présente le programme comme il faut, et calez l'expiration des points pour les pousser vers un deuxième achat.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-retention-repurchase-klaviyo-tip2.png")]),
            tip("Repérez vos clients à plus forte valeur avant qu'ils ne disparaissent", [
              "Identifiez vos clients à plus forte valeur en croisant la performance de vos campagnes, le scoring RFM, le comportement par cohorte et ce qui a réellement déclenché chaque achat pendant le peak : autant de signaux qui révèlent qui est susceptible de racheter et comment l'atteindre au mieux. Les nouveaux clients qui ont dépensé au-dessus de votre AOV, payé plein tarif ou acheté sur plusieurs catégories sont d'excellents indicateurs précoces de qui va rester.",
              "Les acheteurs qui ont interagi avec plusieurs messages avant de convertir méritent la même attention : ce schéma trahit souvent un vrai intérêt plutôt qu'un achat d'impulsion. Récompensez-les avec quelque chose qui prolonge leur dernier achat, comme un accès anticipé aux nouveautés.",
            ], [V("Klaviyo", "/assets/partners/FR-CRM-retention-repurchase-klaviyo-tip3.png")]),
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
        name: "Veniam Quis", pitch: "Retours et échanges en self-service.", url: "#",
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
        name: "Lorem Ipsum", pitch: "La adquisición de pago, ajustada al pico.", url: "#",
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
        { name: "Dolor Amet", pitch: "Email de ciclo de vida y automatización.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
      ],
    },
    "onsite-experience": {
      title: "On-site Experience & Merchandising",
      teaser: "Hacer que el producto correcto sea imposible de pasar por alto.",
      keyStat: { value: 27, unit: "%", prefix: "+", label: "de conversión con un merchandising ajustado al pico y señales de urgencia claras", source: "Estudio Escaparate, 2025" },
      partners: [{
        name: "Sed Tempor", pitch: "Personalización on-site y merchandising.", url: "#",
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
        name: "Incididunt Labore", pitch: "Checkout y pagos sin fricción.", url: "#",
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
        name: "Dolore Magna", pitch: "Orquestación de entrega y seguimiento.", url: "#",
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
        name: "Aliqua Enim", pitch: "Automatización de soporte y centro de ayuda.", url: "#",
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
        { name: "Nostrud Exercitation", pitch: "Flows de reactivación post-compra.", url: "#",
          tips: [
            tip("Ut enim ad minim veniam", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
            tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
          ],
        },
        { name: "Ullamco Laboris", pitch: "Predicción de churn y win-back.", url: "#",
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
        name: "Veniam Quis", pitch: "Devoluciones y cambios en self-service.", url: "#",
        tips: [
          tip("Quis nostrud exercitation ullamco", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."], [V("Lorem ipsum")]),
          tip("Duis aute irure dolor", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]),
        ],
      }],
    },
  },
};
