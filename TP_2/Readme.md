# TP 2 - TS et Angular

Comme pour le TP précédent, vous pouvez faire dans l'ordre qui vous convient.

Pour la partie TS, essayez de le faire sans GPT, ce sont encore une fois des fondamentaux, et
si vous les comprenez, le reste sera très simple ensuite. (et vous saurez débugger les bizarreries de GPT)

## Partie TS

- Rien de particulier, les fichiers n'ont pas besoin d'être exécutés et sont indépendants.
- Il faut juste définir les types et les interfaces, pour prendre en main le système en TS
- Il y a quelques concepts qui vous seront utiles aussi bien dans ce cours, qu'en Archi Logicielle et en S5.

## Partie Angular

Attention, cette partie est longue, il vous faudra potentiellement 2 voire 3h pour la terminer. Ne la faites pas au dernier moment.
Vous pouvez utiliser ChatGPT pour cette partie (mais je doute qu'il vous sera utile sauf peut-être pour les bonus)

- Créez un projet Angular en version 17
- Si vous ne l'avez pas fait au TP 1 - créez vous un compte figma
- Implémentez à partir de cette page: https://www.figma.com/design/GOh1zUOYRdmaVf13VAx5q7/Trafalgar-Landing-Page-(Community)?node-id=0-1&p=f&t=kXyFbX30wzt1Q6tU-0

  - Le header
  - La section "Virtual Healthcare for you"
  - La section "Nos services"
  - What our customers are saying
  - Le footer

- Les boutons "View All", "Learn More", "Consult Today" (qui sont en réalité des liens) - n'auront aucune fonctionnalité attachée, pour ce TP vous les implémenterez en
  tant que boutons simples.

- Pour le header, faites comme dans le premier TP -> La nav sur mobile est un simple bouton sans action particulière (sauf si vous utilisez un framework css qui propose la solution out-of-the-box)

- Vous devez me faire une proposition pour le responsive mobile. Votre projet doit être géré par les appareils dont la largeur est inférieure à 600px, et par tout écran supérieur à 1200px. Vous pouvez ignorer les tailles entre les 2.

- Pour la section "What our customers are saying" -> n'implémentez pas les petits points du carousel, faites juste des boutons Prev et Next qui permettent d'aller d'une slide à l'autre, faites 3 slides, des textes en lorem ipsum feront l'affaire. Vous avez 3 images pour les profils utilisateurs jointes dans ce dossier.

- N'implémentez pas les décorations (petits points sur le côté, l'espèce de haricot)
- Pour les gradients, prenez juste un bleu classique ça fera l'affaire

- **Vous serez principalement notés sur votre découpage en composants, votre utilisation des templates Angular et l'implémentation de la maquette.**

- Packages autorisés: si vous un package CSS préféré, que ça soit un préprocesseur comme Sass ou un framework que vous souhaitez tester comme Tailwind, Bootstrap ou encore Material, vous êtes libres de l'utiliser.

- Bonus: Produisez deux rapports Lightouse (version Desktop) pour le projet et rendez les dans votre branche tp2 (vous pouvez exporter le résultat d'un rapport LightHouse)

  - Le premier rapport est pour la version dev de votre projet
  - Le deuxième rapport nécessite que vous fassiez un build et que vous lanciez la version buildée de votre projet
    Vous verrez normalement qu'il y a une certaine différence de rapidité entre le code de dev et le code buildé

- Bonus 2: Hébergez votre implémentation Angular sur Vercel avec des Github Actions depuis votre repo et donnez moi le lien (nécessite de se créer un compte) : https://vercel.com/guides/deploying-angular-with-vercel

## Rendu

- Reprenez le repo qui vous a servi à faire le TP1
- Créez une branche TP2 (qui ne reprend pas le contenu de la branche TP1, pensez à repartir d'une branche clean comme main)
- Pushez sur cette branche et rendez moi le lien vers cette branche sur Moodle
