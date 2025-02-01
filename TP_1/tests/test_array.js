const tp = require("../tp-array");
const { describe, assertArrayEqual, assertEqual } = require('./utils')

describe("TP - Tableaux", (it) => {

  it('Vaut true', () => {
    assertEqual(true, tp.Q0());
  })

  it("Tableau filtré dont toutes les entrées sont supérieures ou égales à 15", () => {
    assertArrayEqual([15, 41, 24], tp.Q1())
  })

  it("Index de la première valeur strictement inférieure à 7", () => {
    assertEqual(2, tp.Q2());
  });

  it("Tableau inversé", () => {
    assertArrayEqual([13, 24, 41, 15, 6, 7, 12], tp.Q3());
  });

  it("Tableau trié dans l'ordre croissant", () => {
    assertArrayEqual([6, 7, 12, 13, 15, 24, 41], tp.Q4());
  });

  it("Tableau avec 0 ajouté en premier index", () => {
    assertArrayEqual([0, 12, 7, 6, 15, 41, 24, 13], tp.Q5());
  });

  it("Somme des éléments du tableau avec une boucle for", () => {
    assertEqual(118, tp.Q6());
  });

  it("Somme des éléments du tableau avec reduce", () => {
    assertEqual(118, tp.Q7());
  });

  it("Tableau avec la troisième valeur remplacée par 'ici'", () => {
    assertArrayEqual([12, 7, "ici", 15, 41, 24, 13], tp.Q8());
  });

  it("Tableau sans le dernier index", () => {
    assertArrayEqual([12, 7, 6, 15, 41, 24], tp.Q9());
  });

  it("Type de la variable ARRAY", () => {
    assertEqual("object", tp.Q10());
  });

  it("Vérification que le résultat de getArray() est bien un tableau", () => {
    assertEqual(true, tp.Q11());
  });

  it("Tableau sous forme de chaîne de caractères séparée par un tiret", () => {
    assertEqual("12-7-6-15-41-24-13", tp.Q12());
  });

  it("Tableau ne contenant que les deux derniers éléments", () => {
    assertArrayEqual([24, 13], tp.Q13());
  });

});



