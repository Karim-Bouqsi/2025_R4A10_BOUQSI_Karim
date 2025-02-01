# TP1

Ce TP se compose de deux parties, une partie JS et une partie HTML / CSS

La partie JS a pour objectif de vous faire travailler les bases du langages

La partie HTML / CSS sert à réviser et implémenter une page de manière responsive

Les deux parties sont indépendantes, commencez par celle que vous voulez

Le rendu se fait via un repository Github public, que ça soit votre Github personnel ou celui de l'IUT Montreuil.

Vous devez créer ce repository avec la nomenclature suivante: 2025_R4A10_NOM_Prénom
La partie HTML / CSS doit être disponible via Github Pages

## TP1 - HTML / CSS

Implémentez une page à partir de la maquette fournie dans ce dossier, nommée `_wireframe.png`
Vous nommerez votre fichier html `index.html`, et coderez les styles dans un fichier css dédié.

Cette page doit être implémentée de manière à ce qu'elle soit responsive, et doit respecter les points suivants:

- Les breakpoints utilisés sont 768px, 1024px et 1200px. Considérez `mobile` tout ce qui est en-dessous de 768px.
- Sur mobile, la navigation dans le header est remplacée par un simple bouton. Ce bouton est caché dans les résolutions plus hautes et c'est la liste qui est visible
- La liste de cartes suit les principes suivants: 1 colonne sur mobile, 2 colonnes entre 768px et 1200px, 3 colonnes au-dessus
- Pas besoin de mettre de vraies images, vous pouvez simplement centrer du texte dans la partie haute de la carte
- La largeur maximale disponible pour la liste des cartes est la suivante:
  - mobile: tout l'écran
  - 768px+ - 600px
  - 1024px+ - 768px
  - 1200px+ - 1024px
- Sur mobile, le footer est sur une colonne et le texte est centré. Au dessus, il est sur 2 colonnes

### Quelques conseils

Vous aurez certainement besoin des notions CSS suivantes: `grid / flex / border / gap` pour implémenter votre page

Pour rappel, vous pouvez enlever les puces d'une liste avec `list-style-type: none;`

Si vous avez un compte Figma (gratuit), vous pouvez vous simplifier l'implémentation:
https://www.figma.com/design/nyEXH0glERCMzTFIvURcW4/Untitled?node-id=0-1&p=f

Je vous conseille vivement de vous créer un compte, si vous bossez dans le web un jour, c'est un outil incontournable.

### Bonus

Si vous souhaitez aller un peu plus loin, vous pouvez vous baser sur le style de `_original.png` pour un bonus sur cette partie

## TP1 - Javascript

### Prérequis

Avoir NodeJS installé, toute version LTS fera l'affaire. (20 ou 22 au moment de la rédaction de ce tp)
Les versions 16 et 18 devraient également fonctionner.

### Contenu

La partie JS se divise en plusieurs fichiers:

- tp-array
- tp-string
- tp-object
- tp-combine
- tp-controle

Je vous conseille de les faire dans l'ordre mais vous êtes libres de commencer par celui que vous voulez.

Chaque fichier est associé à un fichier de test qui valide votre solution.

### Lancement des tests

Positionnez vous dans le dossier de tests et lancez `node nom_du_fichier.js`

Vous pouvez exécuter tous les tests d'un coup avec le fichier test_all -> `node test_all.js`

Ces tests sont uniquement là pour vous aider à savoir si vous avez retourné le bon résultat, je ne garantis pas la précision du retour d'erreur dans le cas inverse.

## Remarques

- Ne déplacez pas les fichiers dans d'autres dossiers
- Il est important pour ce rendu que votre index.html soit à la racine
- Les fichiers de tests JS sont là uniquement pour vous montrer que vous êtes sur la bonne voie, je noterai votre code dans tous les cas
- N'utilisez pas GPT ou autre IA pour ce devoir, ce sont des fondamentaux que vous devez connaître pour développer sereinement (gros malus si vous êtes pris)

## Rendu

- Ajoutez à ce dossier un fichier `.gitignore` dans lequel vous écrirez simplement: `tests`
- Créez une branche nommée `tp1` et envoyez votre code finalisé dessus
- Déployez votre front via Github Pages:
  - Sur Github, dans l'onglet `Settings`, rendez-vous dans `Pages`, sélectionnez votre branche `tp1` et laissez le dossier `/root`
  - Validez en appuyant sur le bouton `Save`
  - Vérifiez que votre site est bien build et accessible
