/*
Partie 2 - Interfaces et Classes
Puisque nous travaillons sur notre génération d'API, nous allons faire un peu d'Orienté Objet
et nous allons nous intéresser à la création d'un Repository. 

Lorsqu'on fait appel à de la donnée qui provient d'une BDD, un pattern fréquent est d'utiliser un repository
dont le but est d'aller chercher les données dans la BDD et de les mettre à disposition de l'API
avant qu'elles ne soient retournées au frontend 

Nous allons utiliser une approche généraliste, et nous ferons la supposition que nos repositories 
fonctionnent avec des fonctions communes, ce qui nous fera une très bonne occasion de pratiquer le I de SOLID.
*/

/* 
1. Etablir une interface générique

L'idée d'une interface générique n'est pas propre à TypeScript, vous retrouvez cette notion en Java (génériques),
en C++ (templates) et dans d'autres langages. 

La doc TypeScript en parle mais c'est un peu lourd: https://www.typescriptlang.org/docs/handbook/2/generics.html
Le premier exemple permet d'illustrer sans trop rentrer dans la complexité: https://www.geeksforgeeks.org/typescript-generic-functions/ 

L'idée est de dire qu'on va passer un type à une classe/interface/fonction, et que le résultat variera en fonction du type. 

Vous en avez vu un exemple dans la partie 1 du TP sur les types avec la promesse, qui s'écrit Promise<le_type_final>. 

Par convention, quand on parle de générique, on a souvent tendance à utiliser la lettre T (ou le mot Type) pour définir le type utilisé. 
Ainsi, dans le cadre d'une Promesse, on écrirait Promise<T> 

Ce côté générique peut être donné à un type ou une interface.
Pour notre repository, la première interface va concerner le fait de trouver plusieurs ressources. 

Créez l'interface FindMany, rendez-la générique. 
Sa seule propriété est une fonction findMany, qui ne prend pas d'argument et renvoie une promesse générique, 
attention on renvoie un tableau de T
*/

// Implémentez ici
interface FindMany<T> {
    findMany(): Promise<Array<T>>;
};

/*
2. Faire le reste du CRUD 

On parle de CRUD (Create / Read / Update / Delete) car ce sont généralement les fonctions de base associées 
à une ressource.

Quand on pense à une ressource quelconque, il y a souvent 5 actions qui reviennent:

- Trouver un ensemble de ressources
- Trouver une ressource
- Créer une ressource
- Modifier une ressource
- Supprimer la ressource

Prenez par exemple un administrateur à l'IUT qui travaille sur les étudiants, ses actions sur l'application sont certainement:

- Voir la liste des étudiants
- Voir le profil d'un étudiant en particulier, avec plus de détails
- Ajouter un nouvel étudiant
- Modifier un étudiant actuel
- Supprimer un étudiant

Dans la première question, vous avez fait FindMany. Sur le même modèle, faites FindOne, Create, Update et Delete.

- findOne, prend un id, et renvoie une promesse générique
- create, prend une entrée de type générique, et renvoie une promesse générique
- update, prend en arguments un id et une entrée de type générique, et renvoie une promesse générique
- delete, prend en argument un id, et renvoie une promesse qui ne renvoie rien (pas de générique sur cette interface, on utilisera le type associé)
*/

// Implémentez ici
interface FindOne<T> {
    findOne(id : number): Promise<T>;
};

interface Create<T> {
    create(input : T): Promise<T>;
};

interface Update<T> {
    update(id : number, input : T): Promise<T>;
};

interface Delete<T> {
    delete(id : number): Promise<void>;
};

/*
3. Créer les types Student et Course

Un étudiant est matérialisé par:
- id, nombre
- firstName, chaine de caractères
- lastName, chaine de caractères
- group, chaine de caractères

Un cours est matérialisé par:
- id, nombre
- name, chaîne de caractères
- enseignant, chaîne de caractères
- active, booléen
*/

// Implémentez ici

type Student = {
    id : number;
    firstName : string;
    lastName : string;
    group : string;
};

type Course = {
    id : number;
    name : string;
    enseignant : string;
    active : boolean;
};

/*
4. Créer les interfaces StudentRepository et CourseRepository

Ces deux interfaces vont étendre les interfaces CRUD que vous avez créées et seront utilisées avec des classes concrètes

- StudentRepository étend l'entièreté des interfaces précédemment définies. Chaque interface prend Student en paramètre (sauf delete qui ne prend rien)
- CourseRepository étend FindMany, FindOne, Create et Update uniquement. Chaque interface prend Course en paramètre
*/

// Implémentez ici

interface StudentRepository extends FindMany<Student>, FindOne<Student>, Create<Student>, Update<Student>, Delete<Course> {

}

interface CourseRepository extends FindMany<Course>, FindOne<Course>, Create<Course>, Update<Course> {

}
/*
5. Implémentation des classes

Créez les deux classes associées, SQLStudentRepository et SQLCourseRepository et indiquez qu'elles implémentent l'interface associée 

Comme nous avons déclaré que les méthodes renverraient des Promesses, nous avons indiqué que nous souhaitons travailler 
avec de l'asynchrone.

Chaque fonction devra être précédée du mot clé async : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 

Pour les findMany, retournez simplement un tableau vide, pour les autres, vous pouvez retourner null pour chaque méthode
*/

// Implémentez ici
class SQLStudentRepository implements StudentRepository {
    async findMany(): Promise<Student[]> {
        return [];
    }

    async findOne(id: number): Promise<Student> {
        return null;
    }

    async create(input: Student): Promise<Student> {
        return null;
    }

    async update(id: number, input: Student): Promise<Student> {
        return null;
    }

    async delete(id: number): Promise<void> {
        return;
    }
}


/**
 * Ca y est, vous êtes des génies (en devenir) du design logiciel en POO (le web aujourd'hui c'est beaucoup de software design, va falloir se préparer)
 */
