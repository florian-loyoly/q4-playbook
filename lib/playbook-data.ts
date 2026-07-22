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
    heroTitle: "The Q4 customer journey, sponsored by the experts who master it.",
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
    reduceHint: "",
    footNote: "Prototype with static data. Lead capture is simulated.",
  },
  fr: {
    kicker: "The Ultimate Q4 Playbook 2026",
    heroTitle: "Le parcours client du Q4, parrainé par les experts qui le maîtrisent.",
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
    reduceHint: "",
    footNote: "Prototype avec données statiques. La capture de lead est simulée.",
  },
  es: {
    kicker: "The Ultimate Q4 Playbook 2026",
    heroTitle: "El recorrido del cliente en el Q4, presentado por los expertos que lo dominan.",
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
    reduceHint: "",
    footNote: "Prototipo con datos estáticos. La captura de leads está simulada.",
  },
};

// helper to build a tip
const tip = (t: string, paras: string[], visuals?: VisualSlot[]): Tip => ({ title: t, paragraphs: paras, visuals: visuals || [] });
const V = (label: string): VisualSlot => ({ label });

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
          tip("Warm your audiences 6 weeks early", ["Start seeding retargeting pools in mid-October so your Black Friday campaigns launch to warm, qualified traffic instead of cold prospecting at peak CPMs.", "A warm pool cuts your peak-week acquisition cost and protects margin when auction pressure is highest."], [V("Audience warm-up timeline")]),
          tip("Cap prospecting, scale retargeting", ["During peak week, shift budget from broad prospecting toward high-intent retargeting and lookalikes built on recent purchasers.", "Prospecting gets expensive fast in late November, retargeting stays efficient."], [V("Budget split, prospecting vs retargeting")]),
          tip("Refresh creative weekly", ["Fatigue accelerates during Q4. Rotate at least three creative angles per audience and retire anything below your frequency ceiling.", "Fresh creative keeps CTR up while everyone else's ads go stale."], [V("Creative rotation board")]),
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
            tip("Ship a welcome flow before the rush", ["A three-message welcome flow converts new subscribers while intent is highest. Launch it before November so peak traffic lands in a working funnel.", "Lead with value, then a first-order incentive, then social proof."], [V("Welcome flow map")]),
            tip("Segment by source, not just behavior", ["Subscribers from a Black Friday giveaway behave differently from organic ones. Tag by acquisition source and tailor the first month accordingly."], []),
          ],
        },
        { name: "Pulsecrm", pitch: "SMS and multi-channel nurturing.", url: "#",
          tips: [
            tip("Add SMS to your peak reminders", ["SMS cuts through a flooded inbox on Black Friday morning. Use it sparingly for time-sensitive drops and cart nudges only."], [V("SMS reminder sample")]),
            tip("Sync consent across channels", ["Keep email and SMS consent in one source of truth so a customer never gets double-messaged or contacted after opting out."], []),
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
          tip("Surface deals above the fold", ["During peak, visitors decide in seconds. Put your strongest offer and a clear deadline where no scroll is needed."], [V("Above-the-fold hero example")]),
          tip("Personalize collections by intent", ["Reorder collection pages so returning visitors see what they browsed, and new visitors see best sellers with proof."], []),
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
          tip("Offer express wallets first", ["Show Apple Pay, Google Pay and one-click options before the long form. Peak shoppers on mobile expect to pay in a tap."], [V("Express checkout layout")]),
          tip("State fees and delivery dates early", ["Surprise costs are the top abandonment cause. Show shipping, taxes and the delivery date before the final step."], []),
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
          tip("Publish an order-by cutoff", ["Tell customers the exact date to order for guaranteed holiday delivery, then honor it. Clarity beats vague promises."], [V("Order-by countdown banner")]),
          tip("Proactively flag delays", ["If a parcel slips, message the customer before they chase support. A heads-up protects the relationship more than silence."], []),
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
          tip("Automate the top 10 peak questions", ["Where is my order, can I change it, what is your returns window. Answer these instantly so agents focus on the hard cases."], [V("Self-serve deflection flow")]),
          tip("Staff for the Monday after", ["The support wave peaks days after the sale, not during it. Plan coverage for the delivery and returns window."], []),
        ],
      }],
    },
    "crm-retention": {
      title: "CRM: Retention & Repurchase",
      teaser: "Win the second order before January.",
      keyStat: { value: 5, unit: "x", prefix: "", label: "cheaper to reactivate a Q4 buyer than to acquire a new one in Q1", source: "Winback analysis, 2025" },
      partners: [
        { name: "Winback", pitch: "Post-purchase reactivation flows.", url: "#",
          tips: [
            tip("Trigger a replenishment nudge", ["For consumables, time a reorder reminder to the product's natural cycle. A well-timed nudge feels helpful, not pushy."], [V("Replenishment timing chart")]),
            tip("Reward the second order", ["A small, time-boxed incentive on order two converts a one-time gift buyer into a habit."], []),
          ],
        },
        { name: "Retaino", pitch: "Churn prediction and win-back.", url: "#",
          tips: [
            tip("Spot at-risk buyers early", ["Score Q4 buyers by engagement decay and reach the fading ones before the silence sets in."], [V("Churn risk cohorts")]),
            tip("Match the offer to the reason", ["A price-sensitive lapse needs a different message than a forgotten one. Segment win-backs by likely cause."], []),
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
          tip("Reward actions, not just spend", ["Points for reviews, referrals, UGC and social follows turn a single purchase into an ongoing relationship. Reward the behaviors that grow your brand."], [V("Rewards mechanics grid")]),
          tip("Launch VIP tiers before peak", ["Give Q4 buyers a reason to come back with visible status and escalating perks. Tiers make the second purchase feel earned."], [V("VIP tier ladder")]),
          tip("Make referral the default gift", ["Your happiest peak customers are your cheapest acquisition channel. Bake referral rewards into the post-purchase moment."], []),
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
          tip("Push exchanges over refunds", ["A guided exchange flow keeps the revenue and the customer. Make swapping easier than getting money back."], [V("Self-serve exchange screen")]),
          tip("Extend the window for gifts", ["Holiday gifts need a longer, clearly stated returns window. Say it up front to remove purchase hesitation."], []),
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
          tip("Réchauffez vos audiences 6 semaines avant", ["Alimentez vos pools de retargeting dès la mi-octobre pour lancer vos campagnes Black Friday sur un trafic chaud et qualifié, au lieu de prospecter à froid au CPM le plus cher.", "Un pool chaud réduit votre coût d'acquisition en pleine semaine de pic et protège votre marge."], [V("Calendrier de chauffe des audiences")]),
          tip("Plafonnez la prospection, scalez le retargeting", ["Pendant la semaine de pic, basculez le budget de la prospection large vers le retargeting à forte intention et les lookalikes d'acheteurs récents.", "La prospection devient vite chère fin novembre, le retargeting reste efficace."], [V("Répartition budget, prospection vs retargeting")]),
          tip("Rafraîchissez les créas chaque semaine", ["La fatigue publicitaire s'accélère au Q4. Faites tourner au moins trois angles créatifs par audience et coupez ce qui dépasse votre plafond de répétition.", "Des créas fraîches maintiennent le CTR quand celles des autres s'essoufflent."], [V("Board de rotation créative")]),
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
            tip("Lancez un flow de bienvenue avant la ruée", ["Un flow de bienvenue en trois messages convertit les nouveaux inscrits quand l'intention est au plus haut. Activez-le avant novembre pour que le trafic de pic tombe dans un tunnel qui fonctionne.", "Commencez par la valeur, puis une incitation au premier achat, puis la preuve sociale."], [V("Schéma du flow de bienvenue")]),
            tip("Segmentez par source, pas seulement par comportement", ["Un inscrit via un jeu-concours Black Friday n'a pas le même comportement qu'un inscrit organique. Taguez par source d'acquisition et adaptez le premier mois."], []),
          ],
        },
        { name: "Mailpulse", pitch: "SMS et nurturing multicanal.", url: "#",
          tips: [
            tip("Ajoutez le SMS à vos rappels de pic", ["Le SMS perce dans une boîte mail saturée le matin du Black Friday. Réservez-le aux drops urgents et aux relances de panier."], [V("Exemple de rappel SMS")]),
            tip("Synchronisez le consentement entre canaux", ["Gardez le consentement email et SMS dans une source unique pour ne jamais double-solliciter ni contacter après un désabonnement."], []),
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
          tip("Mettez les offres au-dessus de la ligne de flottaison", ["En pleine période, le visiteur décide en quelques secondes. Placez votre meilleure offre et une échéance claire sans scroll."], [V("Exemple de hero au-dessus de la ligne")]),
          tip("Personnalisez les collections par intention", ["Réordonnez les pages collection pour que le visiteur récurrent revoie ce qu'il a parcouru, et le nouveau voie les best-sellers avec preuve."], []),
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
          tip("Proposez les wallets express en premier", ["Affichez Apple Pay, Google Pay et le paiement en un clic avant le long formulaire. En pic, le mobile veut payer en un geste."], [V("Disposition du checkout express")]),
          tip("Annoncez frais et dates de livraison tôt", ["Les coûts surprises sont la première cause d'abandon. Affichez livraison, taxes et date d'arrivée avant l'étape finale."], []),
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
          tip("Publiez une date limite de commande", ["Indiquez la date exacte pour une livraison garantie avant les fêtes, puis tenez-la. La clarté vaut mieux que les promesses vagues."], [V("Bandeau compte à rebours de commande")]),
          tip("Signalez les retards de façon proactive", ["Si un colis prend du retard, prévenez le client avant qu'il ne contacte le support. Une alerte protège plus la relation que le silence."], []),
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
          tip("Automatisez les 10 questions les plus fréquentes", ["Où est ma commande, puis-je la modifier, quel est le délai de retour. Répondez-y instantanément pour que les agents se concentrent sur les cas difficiles."], [V("Flow de déviation self-service")]),
          tip("Renforcez l'équipe pour le lundi d'après", ["La vague de support culmine quelques jours après la vente, pas pendant. Prévoyez la couverture pour la fenêtre livraison et retours."], []),
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
            tip("Déclenchez une relance de réassort", ["Pour les consommables, calez un rappel de recommande sur le cycle naturel du produit. Un rappel bien minuté est utile, pas insistant."], [V("Courbe de timing du réassort")]),
            tip("Récompensez la deuxième commande", ["Une petite incitation limitée dans le temps sur la commande deux transforme un acheteur cadeau en habitude."], []),
          ],
        },
        { name: "Fidelio", pitch: "Prédiction de churn et win-back.", url: "#",
          tips: [
            tip("Repérez tôt les acheteurs à risque", ["Scorez les acheteurs Q4 selon la baisse d'engagement et adressez ceux qui s'éteignent avant que le silence ne s'installe."], [V("Cohortes de risque de churn")]),
            tip("Adaptez l'offre à la raison", ["Un départ lié au prix n'appelle pas le même message qu'un oubli. Segmentez les win-backs par cause probable."], []),
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
          tip("Récompensez les actions, pas seulement l'achat", ["Des points pour les avis, le parrainage, l'UGC et les follows transforment un achat unique en relation durable. Récompensez les comportements qui font grandir la marque."], [V("Grille des mécaniques de récompense")]),
          tip("Lancez les tiers VIP avant le pic", ["Donnez aux acheteurs Q4 une raison de revenir avec un statut visible et des avantages croissants. Les tiers rendent le deuxième achat mérité."], [V("Échelle des tiers VIP")]),
          tip("Faites du parrainage le cadeau par défaut", ["Vos clients de pic les plus satisfaits sont votre canal d'acquisition le moins cher. Intégrez le parrainage au moment post-achat."], []),
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
          tip("Poussez l'échange plutôt que le remboursement", ["Un parcours d'échange guidé garde le revenu et le client. Rendez l'échange plus simple que le remboursement."], [V("Écran d'échange self-service")]),
          tip("Allongez la fenêtre pour les cadeaux", ["Les cadeaux de fêtes ont besoin d'une fenêtre de retour plus longue et clairement affichée. Dites-le en amont pour lever l'hésitation."], []),
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
          tip("Calienta tus audiencias 6 semanas antes", ["Empieza a nutrir tus pools de retargeting a mediados de octubre para lanzar tus campañas de Black Friday sobre tráfico cálido y cualificado, en vez de prospectar en frío al CPM más caro.", "Un pool cálido reduce tu coste de adquisición en la semana pico y protege el margen."], [V("Calendario de calentamiento de audiencias")]),
          tip("Limita la prospección, escala el retargeting", ["Durante la semana pico, mueve presupuesto de la prospección amplia hacia el retargeting de alta intención y lookalikes de compradores recientes.", "La prospección se encarece rápido a finales de noviembre, el retargeting se mantiene eficiente."], [V("Reparto de presupuesto, prospección vs retargeting")]),
          tip("Renueva las creatividades cada semana", ["La fatiga se acelera en el Q4. Rota al menos tres ángulos creativos por audiencia y retira lo que supere tu tope de frecuencia.", "Las creatividades frescas mantienen el CTR cuando las de los demás se desgastan."], [V("Panel de rotación creativa")]),
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
            tip("Lanza un flow de bienvenida antes del aluvión", ["Un flow de bienvenida de tres mensajes convierte a los nuevos suscriptores cuando la intención es máxima. Actívalo antes de noviembre para que el tráfico pico caiga en un embudo que funciona.", "Empieza por el valor, luego un incentivo de primera compra, luego prueba social."], [V("Mapa del flow de bienvenida")]),
            tip("Segmenta por origen, no solo por comportamiento", ["Un suscriptor de un sorteo de Black Friday se comporta distinto a uno orgánico. Etiqueta por origen de adquisición y adapta el primer mes."], []),
          ],
        },
        { name: "Pulsomail", pitch: "SMS y nurturing multicanal.", url: "#",
          tips: [
            tip("Añade SMS a tus recordatorios de pico", ["El SMS destaca en una bandeja saturada la mañana del Black Friday. Resérvalo para drops urgentes y avisos de carrito."], [V("Ejemplo de recordatorio SMS")]),
            tip("Sincroniza el consentimiento entre canales", ["Mantén el consentimiento de email y SMS en una única fuente para no duplicar mensajes ni contactar tras una baja."], []),
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
          tip("Muestra las ofertas por encima del pliegue", ["En plena campaña, el visitante decide en segundos. Coloca tu mejor oferta y una fecha límite clara sin necesidad de scroll."], [V("Ejemplo de hero sobre el pliegue")]),
          tip("Personaliza las colecciones por intención", ["Reordena las páginas de colección para que el visitante recurrente vea lo que exploró y el nuevo vea los más vendidos con prueba."], []),
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
          tip("Ofrece los wallets express primero", ["Muestra Apple Pay, Google Pay y el pago en un clic antes del formulario largo. En pico, el móvil quiere pagar con un gesto."], [V("Disposición del checkout express")]),
          tip("Indica gastos y fechas de entrega pronto", ["Los costes sorpresa son la primera causa de abandono. Muestra envío, impuestos y fecha de entrega antes del paso final."], []),
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
          tip("Publica una fecha límite de pedido", ["Indica la fecha exacta para una entrega garantizada antes de las fiestas y cúmplela. La claridad gana a las promesas vagas."], [V("Banner de cuenta atrás de pedido")]),
          tip("Avisa de los retrasos de forma proactiva", ["Si un paquete se retrasa, avisa al cliente antes de que escriba al soporte. Un aviso protege la relación más que el silencio."], []),
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
          tip("Automatiza las 10 preguntas más frecuentes", ["Dónde está mi pedido, puedo cambiarlo, cuál es el plazo de devolución. Respóndelas al instante para que los agentes se centren en los casos difíciles."], [V("Flow de desvío self-service")]),
          tip("Refuerza el equipo para el lunes siguiente", ["La ola de soporte llega días después de la venta, no durante. Planifica cobertura para la ventana de entrega y devoluciones."], []),
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
            tip("Activa un aviso de reposición", ["Para consumibles, ajusta un recordatorio de recompra al ciclo natural del producto. Un aviso bien medido es útil, no insistente."], [V("Curva de timing de reposición")]),
            tip("Recompensa el segundo pedido", ["Un incentivo pequeño y limitado en el tiempo en el pedido dos convierte a un comprador de regalo en hábito."], []),
          ],
        },
        { name: "Fidelia", pitch: "Predicción de churn y win-back.", url: "#",
          tips: [
            tip("Detecta pronto a los compradores en riesgo", ["Puntúa a los compradores Q4 por caída de engagement y contacta a los que se apagan antes de que llegue el silencio."], [V("Cohortes de riesgo de churn")]),
            tip("Ajusta la oferta al motivo", ["Una baja por precio no pide el mismo mensaje que un olvido. Segmenta los win-backs por causa probable."], []),
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
          tip("Recompensa acciones, no solo el gasto", ["Puntos por reseñas, referidos, UGC y follows convierten una compra única en una relación duradera. Recompensa los comportamientos que hacen crecer tu marca."], [V("Rejilla de mecánicas de recompensa")]),
          tip("Lanza los niveles VIP antes del pico", ["Da a los compradores Q4 una razón para volver con un estatus visible y ventajas crecientes. Los niveles hacen que la segunda compra se sienta merecida."], [V("Escalera de niveles VIP")]),
          tip("Haz del referido el regalo por defecto", ["Tus clientes de pico más satisfechos son tu canal de adquisición más barato. Integra el referido en el momento post-compra."], []),
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
          tip("Impulsa el cambio antes que el reembolso", ["Un flujo de cambio guiado conserva el ingreso y al cliente. Haz que cambiar sea más fácil que recuperar el dinero."], [V("Pantalla de cambio self-service")]),
          tip("Amplía la ventana para los regalos", ["Los regalos de fiestas necesitan una ventana de devolución más larga y bien indicada. Dilo por adelantado para quitar la duda de compra."], []),
        ],
      }],
    },
  },
};
