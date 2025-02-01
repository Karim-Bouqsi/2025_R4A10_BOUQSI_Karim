const { describe, assertArrayEqual, assertEqual } = require('./utils');
const tpString = require('../tp-string');

describe("TP - String Manipulation", (it) => {
  it("Sépare l'email en deux parties au niveau du caractère '@'", () => {
    assertArrayEqual(["test.test", "email.com"], tpString.Q1());
  });

  it("Vérifie qu'il n'y a qu'un seul caractère '@' dans l'email", () => {
    assertEqual(true, tpString.Q2());
  });

  it("Renvoie l'index du caractère '@'", () => {
    assertEqual(9, tpString.Q3());
  });

  it("Renvoie la sous-chaîne après le caractère '@'", () => {
    assertEqual("email.com", tpString.Q4());
  });

  it("Renvoie l'email en majuscules", () => {
    assertEqual("TEST.TEST@EMAIL.COM", tpString.Q5());
  });

  it("Renvoie le type de la variable email", () => {
    assertEqual("string", tpString.Q6());
  });

  it("Change 'email.com' par 'gmail.com' et renvoie la chaîne modifiée", () => {
    assertEqual("test.test@gmail.com", tpString.Q7());
  });
});