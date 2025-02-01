const { describe, assertEqual, assertArrayEqual } = require('./utils');
const tpObject = require('../tp-object');

describe("TP - Object Manipulation", (it) => {
  it("Renvoyer la propriété description", () => {
    assertEqual("Un très bel objet JS", tpObject.Q1());
  });

  it("Renvoyer la propriété city", () => {
    assertEqual("Paris", tpObject.Q2());
  });

  it("Renvoyer les clés de l'objet sous forme de tableau", () => {
    assertArrayEqual(["name", "description", "value", "isBestObject", "address"], tpObject.Q3());
  });

  it("Ajouter une propriété email et renvoyer l'objet modifié", () => {
    const modifiedObject = tpObject.Q5();
    assertEqual("test.test@email.com", modifiedObject.email);
  });

  it("Ajouter une propriété dynamique HelloWorld qui vaut true et renvoyer l'objet modifié", () => {
    const modifiedObject = tpObject.Q6();
    assertEqual(true, "HelloWorld" in modifiedObject);
    assertEqual(true, modifiedObject["HelloWorld"]);
  });

  it("Supprimer la propriété isBestObject et renvoyer l'objet", () => {
    const modifiedObject = tpObject.Q7();
    assertEqual(false, "isBestObject" in modifiedObject);
  });

  it("Vérifier que la propriété description existe dans l'objet", () => {
    assertEqual(true, tpObject.Q8());
  });
});