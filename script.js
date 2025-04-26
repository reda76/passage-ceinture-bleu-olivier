const contentData = {
  tenue: {
    titre: "Tenue et ceinture",
    img: "images/ceinture.png",
    texte: "Savoir mettre sa tenue complète et nouer correctement sa ceinture."
  },
  salut: {
    titre: "Salut dojo",
    img: "images/salut.png",
    texte: "Saluer en entrant et sortant du tatami, saluer les partenaires et respecter l'étiquette du dojo (salut avant/après le cours, comportement sur les tatamis)."
  },
  echauffement: {
    titre: "Échauffement",
    img: "images/tabata.png",
    texte: "Échauffement : 3 séries de Tabata, 30 Poula poula, 30 burpees."
  },
  stamina: {
    titre: "Stamina",
    img: "images/stamina.png",
    texte: "Stamina : 50 pompes, 50 squats, équilibre sur une jambe pendant 1 minute."
  },
  chutesPlaquees: {
    titre: "Chutes plaquées",
    img: "images/chutes_plaquees.png",
    texte: "10 chutes plaquées : avant, arrière, latérale."
  },
  chutesRoulees: {
    titre: "Chutes roulées",
    img: "images/chutes_roulees.png",
    texte: "10 chutes roulées : avant et arrière."
  },
  deplacementCombat: {
    titre: "Déplacement de combat",
    img: "images/deplacement.png",
    texte: "Déplacement de combat debout pendant 1 minute."
  },
  techniquesPoings: {
    titre: "Techniques de poings",
    img: "images/poings.png",
    texte: "Directs, circulaires, remontants aux niveaux haut et milieu."
  },
  shadowBoxing: {
    titre: "Shadow boxing",
    img: "images/shadow_boxing.png",
    texte: "Shadow boxing pendant 3 minutes."
  },
  techniquesPieds: {
    titre: "Techniques de pieds",
    img: "images/pieds.png",
    texte: "Coup de pied de face, 4 circulaires, de côté, arrière aux 3 niveaux (tête, corps, jambes)."
  },
  klimax: {
    titre: "Klimax",
    img: "images/klimax.png",
    texte: "Klimax pendant 1 minute."
  },
  projections: {
    titre: "Projections",
    img: "images/projections.png",
    texte: "4 projections avec leurs noms + 1 contre-projection."
  },
  postureGarde: {
    titre: "Posture et garde",
    img: "images/garde.png",
    texte: "Posture de garde et ouverture de garde."
  },
  passagesGarde: {
    titre: "Passages de garde",
    img: "images/passages.png",
    texte: "2 passages de garde."
  },
  immobilisations: {
    titre: "Immobilisations et finalisation",
    img: "images/immobilisations.png",
    texte: "Immobilisations (100kgs, nord/sud, genou/ventre, ½ garde, montée) + sortie + 1 finalisation."
  },
  repriseGarde: {
    titre: "Reprise de garde",
    img: "images/reprise.png",
    texte: "Reprise de garde à partir de la ½ garde."
  },
  attaqueKimura: {
    titre: "Attaque Kimura",
    img: "images/kimura.png",
    texte: "Attaque kimura à partir de 100kgs."
  },
  positionMontee: {
    titre: "Positions montées",
    img: "images/montee.png",
    texte: "2 positions montées à partir de 100kgs."
  },
  monteeDepuisDemiGarde: {
    titre: "Montée depuis la ½ garde",
    img: "images/montee_demi.png",
    texte: "1 montée à partir de la ½ garde."
  },
  attaquesMontéeDos: {
    titre: "Attaques montée et dos",
    img: "images/attaque_monte.png",
    texte: "3 attaques : en position montée et dans le dos."
  },
  renversements: {
    titre: "Renversements",
    img: "images/renversements.png",
    texte: "3 renversements."
  },
  attaqueGardeFermee: {
    titre: "Attaques garde fermée",
    img: "images/attaque_garde.png",
    texte: "Attaque dans la garde fermée : clé de bras et triangle, plus sortie."
  },
  sortieDos: {
    titre: "Sortie du dos",
    img: "images/sortie_dos.png",
    texte: "Sortie d'une attaque dans le dos."
  },
  clePied: {
    titre: "Clé de pied",
    img: "images/cle_pied.png",
    texte: "1 clé de pied dans l'axe + sortie."
  }
};


document.getElementById('menu').addEventListener('change', function() {
  const point = this.value;
  const data = contentData[point];

  document.getElementById('content').innerHTML = `
    <h2>${data.titre}</h2>
    <p style="text-align: center">${data.texte}</p>
    <img src="${data.img}" alt="${data.titre}">
  `;
});
