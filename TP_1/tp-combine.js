// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    const employees = getEmployees();
    return employees.filter(employee => employee.name.endsWith("e"));
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    const employees = getEmployees();
    return employees.find(employee => parseInt(employee.age) < 30);  // parse car l'age est de type string
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    const employees = getEmployees();
    return employees.findIndex(employee => employee.name === "Jeremy")
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    const employees = getEmployees();
    return employees.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    const employees = getEmployees();
    //employees.push("Kasimu", "18")
    employees.push({ name: "Kasimu", age: "38" });
    return employees;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    const employees = getEmployees();
    return employees.length; // length n'est pas une fonction donc il faut pas mettre les parenthèses.
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    
    const employees = getEmployees();
    let theo = employees.find(employee => employee.name === "Theo");
    if (theo) {
      theo.name = theo.name.replace("o", "a");
    }
    return employees;
    // faire une boucle si on veur changer pour tous les théo qui peu exister
  },
  

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    const employees = getEmployees();
    return employees.filter(employee => employee.name.includes("e"));
  },
};