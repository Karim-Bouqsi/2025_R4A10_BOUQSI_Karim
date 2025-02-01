
// Pour ce fichier, toutes les questions à partir de Q1 nécessitent d'appeler cette fonction pour récupérer sa valeur
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    const tab = getArray();
    return tab.filter(val => val >= 15); // comme en java (expression lambda)
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {
    const tab = getArray();
    return tab.findIndex(val => val < 7);
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    const tab = getArray();
    return tab.reverse();
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    const tab = getArray();
    return tab.sort((x,y) => x - y); // sort() simple est adapter pour les chaines de caracteres 
  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    const tab = getArray();
    tab.unshift(0); // push ajoute a la fin et unshift ajoute au début
    return tab;
  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    const tab = getArray();
    let somme = 0;
    for(let i = 0; i < tab.length; i++) { // let c'est une declaration de variable que l'on peu modifier, const peut etre modiifier si c'est un tableau
      somme += tab[i];
    }
    return somme;
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    const tab = getArray();
    return tab.reduce((x,y) => x + y, 0); // comme en java
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    const tab = getArray();
    tab[2] = "ici";
    return tab;
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    const tab = getArray();
    tab.pop();
    return tab;
  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    const tab = getArray();
    return typeof tab;
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    const tab = getArray();
    return Array.isArray(tab);
  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    const tab = getArray();
    return tab.join("-"); // transforme le tab en chaine et separe les valeurs par un -
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    const tab = getArray();
    return tab.slice(-2) // -2 pour les deux dernier caracteres.
  }
};
