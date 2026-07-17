# The Ultimate Q4 Playbook

Site statique (HTML/CSS/JS, sans build) présentant le customer journey map Q4 en 3 langues : EN, FR, ES. Chaque page bascule entre une vue "frise" (les 9 étapes) et une vue "détail" plein écran par étape (sommaire, chiffre clé, conseils, partenaire).

## Structure

```
index.html                → redirige automatiquement vers /en/, /fr/ ou /es/ selon la langue du navigateur
en/index.html             → coquille HTML de la version anglaise (marché EN/UK)
fr/index.html             → coquille HTML de la version française (marché FR)
es/index.html             → coquille HTML de la version espagnole (marché ES)
assets/css/style.css      → design system partagé par les 3 versions
assets/js/app.js          → logique partagée : rendu de la frise + de la vue détail, navigation, sélecteur de marché
assets/js/content-en.js   → contenu des 9 étapes en anglais (le fichier à éditer pour changer les textes EN)
assets/js/content-fr.js   → contenu des 9 étapes en français
assets/js/content-es.js   → contenu des 9 étapes en espagnol
assets/img/               → logo
```

Chaque langue a son propre fichier `content-XX.js` avec ses propres partenaires — ce n'est pas une simple traduction, car chaque marché a un partenaire différent par étape.

## Comment remplacer le contenu placeholder par un vrai partenaire

Tout le texte est actuellement un **placeholder** (partenaires fictifs, tips génériques). Pour remplacer une étape, ouvre le fichier `assets/js/content-en.js` (ou `content-fr.js` / `content-es.js`) et repère l'entrée correspondante dans le tableau `steps` (elles sont dans l'ordre, de l'étape 1 à 9). Chaque étape a cette forme :

```js
{
  title: "Acquisition & Ads",              // nom de l'étape (affiché sur la carte et en détail)
  question: "How do you capture...",       // sous-titre de la carte
  isHouse: false,                          // true seulement pour l'étape "Loyalty & Engagement" (Loyoly)
  partner: {
    name: "Adnova",                        // nom du partenaire réel à renseigner
    initial: "A",                          // 1ère lettre, utilisée pour l'avatar coloré
    url: "#",                              // lien vers le site du partenaire
    description: "Full-funnel paid..."     // description affichée dans l'encart partenaire
  },
  stat: { value: "+38%", label: "lower cost per acquisition" }, // chiffre clé + libellé
  tips: [
    "Lock your Black Friday budget by mid-October",   // titre du conseil n°1
    "Retarget cart abandoners with dynamic creative",  // titre du conseil n°2
    "...",
    "..."
  ]
}
```

Il suffit de remplacer les valeurs texte par le vrai contenu fourni par le partenaire. Le corps de texte de chaque conseil (les paragraphes "Lorem ipsum...") est généré automatiquement par `app.js` à partir d'un petit pool de texte de remplissage — une fois que le partenaire fournit un vrai texte pour un conseil donné, ce sera à généraliser dans `app.js` (fonction `renderDetail`) si on veut un corps de texte différent par tip plutôt que le pool générique.

Chaque étape a une couleur d'accent (`--step-1` à `--step-9`, réglables dans `assets/css/style.css`) assignée automatiquement selon sa position dans le tableau.

## Développement local

Aucune installation requise (pas de Node.js, pas de dépendances) pour éditer le contenu. Pour **prévisualiser** dans le navigateur, il faut servir les fichiers via un petit serveur local (les chemins `/assets/...` ne fonctionnent pas en ouverture directe `file://`) :

```
cd q4-playbook
python3 -m http.server 8743
```

Puis ouvrir `http://localhost:8743/en/` (ou `/fr/`, `/es/`).

## Déploiement

Le site est hébergé sur Vercel, connecté au repo GitHub (`florian-loyoly/q4-playbook`). Chaque `git push` sur `main` redéploie automatiquement le site en production.
