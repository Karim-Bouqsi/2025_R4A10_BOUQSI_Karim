# TP Angular - Agence de voyages

## Objectif

Créer une application Angular permettant de gérer des voyages, incluant une liste paginée, la visualisation individuelle des voyages, leur suppression, ainsi qu'un système de génération automatique de voyages.

## Spécifications fonctionnelles

### Un voyage se compose des propriétés suivantes :

- **destination** : chaîne de caractères
- **description** : chaîne de caractères
- **prix** : nombre
- **id (unique)** : chaîne de caractères (utilisez `Math.random()` pour générer un identifiant, vous le transformerez en chaine de caractères et retirerez le "." car Math.random() est un float)

### Fonctionnalités demandées :

- **Page d'accueil `/home`**

  - Par défaut, l'application doit rediriger vers `/home` (ex: `http://localhost:4200` → `http://localhost:4200/home`).
  - Affichage d’une liste de voyages sous forme de **cartes**.
  - Chaque carte permet :
    - De naviguer vers une page dédiée au voyage.
    - De supprimer le voyage directement depuis la liste.
  - Chaque carte affiche également:
    - La destination
    - Les 20 premiers caractères de la description (slicée avec le SlicePipe)
    - Le prix en € (vous utiliserez également un pipe pour cette mise en forme)

- **Pagination**

  - Affichage des voyages **20 par 20** pour éviter de surcharger la page.

- **Page dédiée à chaque voyage**

  - Permet de visualiser toutes les informations d’un voyage.
  - Possibilité de supprimer le voyage directement depuis cette page.
  - En cas de suppression depuis cette page, redirection vers l’accueil après confirmation.

- **Page de génération de voyage**

  - Un bouton **"Générer"** sélectionne au hasard une destination, une description et un prix.
  - Les informations disponibles à utiliser sont dans le fichier data.ts
  - Le voyage généré est affiché à l'écran, avec un bouton permettant de valider la création
  - Si validé, le voyage est ajouté à la fin du tableau des destinations, puis l'utilisateur est redirigé vers la page dédiée au voyage.

- **Suppression**

  - Avant chaque suppression, une **boîte de dialogue (modal)** demande confirmation.
  - Si la suppression se fait depuis la page du voyage, l’utilisateur est **redirigé vers l’accueil** après confirmation.

- **Gestion des routes invalides**
  - Mise en place d’une **page 404** pour capter toutes les routes inexistantes.

## Layout et Design

- **Header & Footer présents sur toutes les pages**

  - **Header** : Nom de l’application et navigation entre :
    - La page liste des voyages.
    - La page de génération de voyages.
  - **Footer** :
    - Reprend le nom de l’agence de voyage.
    - Mention "Copyright + Année en cours" (généré dynamiquement en JS).

- **Responsive**

  - Adaptation requise uniquement pour les **écrans supérieurs à 1200px**.
  - Les autres tailles d’écran ne sont pas à prendre en compte pour ce TP.

- **Utilisation d'un framework CSS (au choix)**

  - Vous pouvez utiliser :
    - **Bootstrap (ngx-bootstrap)**
    - **Angular Material (ng-material)**
    - **Tailwind**
    - **Ou un autre outil de design de votre choix**

- **Images**
  - Vous pouvez ajouter des images pour illustrer les voyages.

## Bonus

- Un bonus est accordé si vous mettez en place la **sauvegarde des voyages** dans `localStorage` pour **conserver la liste entre les sessions**.
  - Documentation : [localStorage sur MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Évaluation

Vous serez notés sur :

- **Les fonctionnalités principales**
- **La qualité de votre syntaxe Angular (attention avec GPT)**
- **La structuration en composants Angular et leur communication**
- **La gestion du routing**
- **La centralisation de la logique (services, etc.)**
- **Le rendu global de l’application**

## Conseils pour la réalisation

1. **Créer les différentes pages**
   - Configurer le router Angular et tester la navigation
2. **Définir le service et le type `Voyage`**

   - Stocker les voyages dans un tableau dans un service centralisé.

3. **Ajouter une entrée test**

   - Créer manuellement une entrée dans la liste des voyages pour tester l'affichage.

4. **Mettre en place le layout (header/footer)**

   - Assurez-vous que le design de base est cohérent.

5. **Implémenter le parcours utilisateur**

   - Afficher la liste des voyages.
   - Permettre la navigation vers les détails d'un voyage.
   - Ajouter la suppression et tester la redirection.

6. **Gérer la génération automatique**

   - Implémenter la génération de voyages aléatoires.
   - Afficher les informations générées avant validation.

7. **Gérer la pagination sur la liste des voyages**

   - Afficher les voyages **par lot de 20**.

8. **Implémenter la suppression avec confirmation**

   - Ajouter une **boîte de dialogue (modal)** avant suppression.

9. **Refactoriser en composants**
   - Découper l'application en composants réutilisables et bien organisés.
