const { describe, assertArrayEqual, assertEqual } = require('./utils');
const tpPpl = require('../tp-combine');

describe("TP - Combinaison Objet/Tableau/String", (it) => {
  it("1. Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un 'e'", () => {
    assertArrayEqual(
      [
        { name: "Philippe", age: "45" },
        { name: "Minnie", age: "50" },
      ],
      tpPpl.B1()
    );
  });

  it("2. Trouver la première personne dont l'âge est inférieur à 30", () => {
    assertEqual(
      { name: "Theo", age: "25" },
      tpPpl.B2()
    );
  });

  it("3. Renvoyer l'index où se trouve 'Jeremy'", () => {
    assertEqual(3, tpPpl.B3());
  });

  it("4. Trier le tableau par âge des personnes", () => {
    assertArrayEqual(
      [
        { name: "Theo", age: "25" },
        { name: "Jeremy", age: "28" },
        { name: "Thomas", age: "30" },
        { name: "Philippe", age: "45" },
        { name: "Minnie", age: "50" },
      ],
      tpPpl.B4()
    );
  });

  it("5. Ajouter Kasimu à la fin du tableau avec un âge de 38 ans et renvoyer le tableau modifié", () => {
    const modifiedArray = tpPpl.B5();
    assertEqual("Kasimu", modifiedArray[modifiedArray.length - 1].name);
    assertEqual(38, modifiedArray[modifiedArray.length - 1].age);
  });

  it("6. Renvoyer la longueur du tableau", () => {
    assertEqual(5, tpPpl.B6());
  });

  it("7. Remplacer le 'o' de Theo par un 'a', et renvoyer le tableau modifié", () => {
    assertEqual("Thea", tpPpl.B7().find((person) => person.name === "Thea").name);
  });

  it("8. Renvoyer un tableau qui contient uniquement les personnes ayant au moins un 'e' dans leur nom", () => {
    assertArrayEqual(
      [
        { name: "Theo", age: "25" },
        { name: "Philippe", age: "45" },
        { name: "Jeremy", age: "28" },
        { name: "Minnie", age: "50" },
      ],
      tpPpl.B8()
    );
  });
});