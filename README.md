# The Ultimate Q4 Playbook

Site statique (HTML/CSS/JS, sans build) présentant le customer journey map Q4 en 3 langues : EN, FR, ES.

## Structure

```
index.html        → redirige automatiquement vers /en/, /fr/ ou /es/ selon la langue du navigateur
en/index.html      → version anglaise (marché EN)
fr/index.html      → version française (marché FR)
es/index.html      → version espagnole (marché ES)
assets/css/        → style partagé par les 3 versions
assets/js/         → interactions partagées (clic sur une étape → animation)
assets/img/        → logo, icônes, logos partenaires
```

Chaque version linguistique est un fichier HTML autonome. Il n'y a pas de système de traduction automatique : c'est volontaire, car chaque marché a son propre partenaire et donc son propre contenu (pas une simple traduction).

## Comment remplacer le contenu placeholder par un vrai partenaire

Tout le contenu actuellement dans le site est un **placeholder**, clairement identifié par une étiquette jaune "Placeholder" dans chaque section. Pour remplacer une étape :

1. Ouvre le fichier de la langue concernée (`en/index.html`, `fr/index.html` ou `es/index.html`).
2. Cherche le numéro de l'étape à modifier, ex. `<!-- 03 — On-site Experience & Merchandising -->`.
3. Dans le bloc `.step-card`, remplace :
   - le nom du partenaire (`<span class="partner-avatar">S</span>Shelfwise` → nom réel + initiale)
   - la question (`.step-question`)
4. Dans le bloc `.step-detail` juste en dessous :
   - remplace le titre du conseil (`<h3>...</h3>`)
   - remplace les paragraphes de texte par le vrai tip du partenaire
   - **supprime la ligne** `<span class="placeholder-flag">...</span>` une fois le contenu confirmé
5. Si tu as un visuel (image/illustration) à la place de l'encadré "Visual placeholder", remplace le bloc `.visual-placeholder` par une balise `<img src="/assets/img/..." alt="...">`.

Chaque étape a une couleur d'accent définie en haut du bloc, ex. `style="--step-color: var(--step-1);"` — les 9 couleurs sont réglables dans `assets/css/style.css` (variables `--step-1` à `--step-9`).

## Développement local

Aucune installation requise (pas de Node.js, pas de dépendances). Pour prévisualiser :
- Double-clique sur `en/index.html` (ou fr/es) pour l'ouvrir dans le navigateur.
- Ou demande à Claude Code de l'ouvrir dans le navigateur intégré.

## Déploiement

Le site est hébergé sur Vercel, connecté au repo GitHub. Chaque `git push` (via GitHub Desktop) redéploie automatiquement le site en production.
