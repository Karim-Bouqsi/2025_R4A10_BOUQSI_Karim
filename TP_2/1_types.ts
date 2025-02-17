/*
Partie 1 - Les Types
Votre mission est de créer des types afin de préparer l'intégration d'un router HTTP pour une API
*/

/*
1. La Méthode

Lorsque l'on souhaite communiquer entre le frontend et le backend, on effectue des appels API.
Ces appels sont associés à un verbe de méthode. Notre API contiendra les principaux verbes disponibles

Créez le type HttpMethod, qui combine les valeurs suivantes (chaines de caractères): GET, POST, PUT, PATCH et DELETE

Retenez ces verbes, ils sont utilisés aussi bien en backend qu'en frontend
*/

// Implémentez ici
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

/*
2. La Requête 

La requête représente les informations envoyées par le frontend vers l'API (ou bien d'une API à une autre). 
L'essentiel est que la requête = informations provenant de l'envoyeur. 
Le protocole HTTP se base sur d'autres protocoles dont on fera abstraction ici, on supposera qu'une requête contient les paramètres suivants:

- method, la méthode utilisée pour faire l'appel, obligatoire, de type HttpMethod
- url, une chaîne de caractères obligatoire qui représente l'url de la ressource
- params, un tableau facultatif de chaînes de caractères
- query, une chaine de caractère OU un objet dynamique ayant pour clés et pour valeurs des chaînes de caractères. Ce paramètre est facultatif
- body, un objet dynamique facultatif, dont les clés sont des chaines de caractères, et les valeurs sont inconnues. (dans la vraie vie c'est un poil plus complexe)
- headers, une fusion entre un objet contenant obligatoirement la propriété "Content-Type": string et un objet dynamique

Créez le type associé

A noter: En TS, on note l'inconnu avec le type unknown. Ce type évite d'utiliser any et nécessite un cast ultérieur vers la valeur souhaitée
*/

// Implémentez ici
type requete = {
    method : HttpMethod;
    url : string;
    params? : Array<String>;
    query? : string | Record<string, string>;
    body? : Record<string, unknown>;
    headers : {"Content-Type": string} & Record<string, string>;
};

/* 
3. Guard

Lorsqu'on souhaite protéger une API 
on utilise des fonctions pour vérifier si l'utilisateur qui fait la demande à le droit d'accéder à la ressource 
Ces fonctions prennent des noms différents, mais sont liées au concept d'autorisation. Ici, nous appellerons ces fonctions des Guards.

Le type Guard est très simple, il possède uniquement une fonction nommée canActivate. Cette fonction renvoie soit un booléen, soit une promesse 
contenant un booléen. La promesse est la base de la programmation asynchrone en JS. Pour la noter, on utilise Promise<le_type_final>. 
La fonction canActivate prend un paramètre, de type Request

Retenez la notion de Guard, elle vous sera utile en Angular également
*/

// Implémentez ici
type Guard = {
    canActivate: (requete: requete) => boolean | Promise<boolean>;
};
/*
4. Interceptor 

Lorsqu'on effectue une requête, on a parfois besoin d'ajouter des informations ou de la logique avant son traitement par l'API, ou bien son traitement 
terminé. C'est le rôle de l'intercepteur.

Le type est également très simple, il contient une fonction intercept, qui ne renvoie rien et prend en paramètre un argument de type Request

Angular utilise également la notion d'intercepteur, nous la verrons en troisième année
*/

// Implémentez ici
type Interceptor = {
    intercept: (requete : requete) => void; // car elle renvoie rien
};

/*
5. Déclarez un type ValidationSchema.

Lorsque notre API va recevoir des informations, par exemple lorsque l'utilisateur va demander à créer une ressource
sur notre serveur, nous définirons un schéma de validation qui permettra de veiller à ce que ce qui a été 
reçu correspond à ce qui était attendu.

Le type ValidationSchema est constitué de deux propriétés: 

- fields, un objet dynamique, dont les clés sont des chaines de caractères et les valeurs sont des objets dynamiques dont les clés sont des chaines de caractères et les valeurs sont de type inconnu 
    - par exemple on pourrait avoir l'objet suivant: { 
        fields: {
            monChamp1: { type: "int", min: 3}
            monChamp2: { type: "string", isArray: true, minArrayLength: 5, each: true}
            monChampN: { type: "boolean"}
        }
    }
- required, un tableau de chaines de caractères, facultatif
*/

// Implémentez ici
type ValidationSchema = {
    fields : Record<string, Record<string, unknown>>;
    required? : Array<string>
};

/*
6. La Route

La route est la matérialisation du canal de communication entre le frontend et le backend. 
Une route est composée des paramètres suivants:

- path, une chaine de caractères représentant l'url de la ressource sur le serveur
- method, de type RequestMethod
- handler, ici on utilisera une chaîne de caractères
- guards, une liste de Guards, facultative
- validationSchema, de type ValidationSchema, facultatif
- requestInterceptors, une liste d'Interceptors, facultative
- responseInterceptors, une liste d'Interceptors, facultative

Vous verrez tout ça plus en détail en cours d'Architecture et en troisième année
/*

// Implémentez ici
*/

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

type Route = {
    path : string;
    method : RequestMethod;
    handler : string;
    guards? : Array<Guard>;
    validationSchema? : ValidationSchema;
    requestInterceptors? : Array<Interceptor>;
    responseInterceptors? :Array<Interceptor>;
};

/*
7. La Réponse

La réponse correspond à l'information obtenue après traitement de la requête. 
C'est ce qui va être renvoyé à l'envoyeur initial.

Notre réponse aura les propriétés suivantes: 

- statusCode, un nombre
- headers, une fusion entre un objet contenant obligatoirement la propriété "Content-Type": string et un objet dynamique
- body, un objet dynamique facultatif, dont les clés sont des chaines de caractères, et les valeurs sont inconnues.

Angular gèrera une bonne partie de la réponse pour vous, il vous donnera directement accès au body, et propose un 
système de gestion d'erreur.
*/

type Reponse = {
    statusCode: BigInteger;
    headers : {"Content-Type": string} & Record<string, string>;
    body? : Record<string, unknown>; 
};