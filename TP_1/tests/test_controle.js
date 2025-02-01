const { describe, assertArrayEqual } = require('./utils');
const control = require('../tp-controle');

describe("TP - Structures de contrôle", (it) => {
  it("Renvoyer un tableau contenant les résultats de l'algo de contrôle", () => {
    const expected = [
      1, 2, "JavaScript", 4, "TypeScript", "JavaScript", 7, 8, "JavaScript", "TypeScript",
      11, "JavaScript", 13, 14, "Python", 16, 17, "JavaScript", 19, "TypeScript",
      "JavaScript", 22, 23, "JavaScript", "TypeScript", 26, "JavaScript", 28, 29, "Python",
      31, 32, "JavaScript", 34, "TypeScript"
    ];

    assertArrayEqual(expected, control.F1());
  });
});