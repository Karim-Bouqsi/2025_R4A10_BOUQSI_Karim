# TP 4

## Prérequis

- Version Angular : 17.3
- Installez le projet avec `npm install`
- Lancez le avec `ng serve`

---

## Partie 1: Création d'un formulaire

- Il est pour l'instant impossible d'ajouter un livre depuis l'application.
  Sur la page dédiée à la création, ajoutez un formulaire qui permet de créer un livre.

- Les champs attendus sont les suivants:
  - author: chaîne de caractères, obligatoire, 5 lettres minimum, 50 maximum
  - description: chaîne de caractères, obligatoire, 10 caractères minimum, 255 maximum -- l'élément html à utiliser est un textarea
  - title: chaîne de caractères, obligatoire, 2 lettres minimum, 35 maximum

Pour chaque champ, vous mettrez un message d'erreur si le nombre minimum n'est pas atteint

- Une fois le formulaire créé, vous ferez en sorte qu'il puisse être utilisable avec le service BooksInMemoryService

## Partie 2: Swap de Service

- Créez un nouveau service que vous mettrez en relation avec l'API Flask fournie dans le dossier backend.
- Les routes sont à trouver dans le code du fichier python.
- Vous devez obtenir le même résultat en utilisant le InMemoryService que le service que vous allez créer, pour chaque opération
- Même s'il n'est pas utilisé, intégrez également la fonction permettant l'appel de la route permettant de supprimer un livre
