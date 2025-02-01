const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
      const split = email.split('@');
      return split;
    },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    return email.split('@').length === 2;
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    return email.indexOf('@');
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    const split = email.split('@');
    return split[1]; // [0] por la partie 1 et [1] pour l'autre
    },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    return email.toUpperCase();
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    return typeof email;
  },

  // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
  Q7() {
    return email.replace("email.com", "gmail.com");
  }
};