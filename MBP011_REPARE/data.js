const questions = [
  // ==========================================
  // NIVEAU 1 — DÉBUTANT / FACILE (10 Questions)
  // ==========================================
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q1.webp",
    "question": "Quel composant stocke l’huile du circuit hydraulique ?",
    "options": [
      "Le distributeur",
      "Le réservoir",
      "Le vérin",
      "Le moteur électrique"
    ],
    "correct": 1,
    "explication": "Le réservoir (ou bac/cuve) permet de stocker l'huile, de la décanter et de dissiper les calories du circuit."
  },
  {
    "type": "vrai_faux",
    "niveau": 1,
    "image": "images/Q2.webp",
    "question": "Le moteur électrique transforme l’énergie électrique en énergie mécanique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. Le moteur électrique absorbe de l'énergie électrique du réseau pour fournir une énergie mécanique de rotation sur son arbre."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q3.webp",
    "question": "Quel composant fournit l’énergie hydraulique au circuit ?",
    "options": [
      "La pompe hydraulique",
      "Le réservoir",
      "Le manomètre",
      "Le carter de protection"
    ],
    "correct": 0,
    "explication": "La pompe hydraulique, entraînée par le moteur, met le fluide en mouvement et génère le débit fournissant ainsi l'énergie hydraulique."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q4.webp",
    "question": "Quel mouvement produit principalement un vérin hydraulique ?",
    "options": [
      "Une rotation continue",
      "Une translation",
      "Une vibration",
      "Un mouvement électrique"
    ],
    "correct": 1,
    "explication": "Un vérin hydraulique transforme l'énergie hydraulique en énergie mécanique de translation linéaire (sortie/rentrée de tige)."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q5.webp",
    "question": "Quel mouvement produit un moteur hydraulique ?",
    "options": [
      "Une translation",
      "Une rotation",
      "Une déformation du réservoir",
      "Un déplacement de l’huile uniquement"
    ],
    "correct": 1,
    "explication": "Un moteur hydraulique est un récepteur rotatif qui transforme l'énergie hydraulique en mouvement de rotation continue."
  },
  {
    "type": "vrai_faux",
    "niveau": 1,
    "image": "images/Q6.webp",
    "question": "Le distributeur permet d’orienter la circulation de l’huile pour commander le récepteur.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. Le distributeur aiguille et dirige le fluide vers les différentes voies pour piloter les mouvements des actionneurs."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q7.webp",
    "question": "Quel appareil permet de mesurer la pression dans le circuit hydraulique ?",
    "options": [
      "Le débitmètre",
      "Le manomètre",
      "Le thermomètre",
      "Le tachymètre"
    ],
    "correct": 1,
    "explication": "Le manomètre indique la pression du fluide (en bar ou MPa) en un point donné du circuit."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q8.webp",
    "question": "Quel élément protège le circuit contre les surpressions accidentelles ?",
    "options": [
      "Le limiteur de pression",
      "Le filtre retour",
      "Le clapet anti-retour",
      "Le reniflard"
    ],
    "correct": 0,
    "explication": "Le limiteur de pression s'ouvre pour renvoyer le fluide au réservoir lorsque la pression atteint le seuil de tarage maximal admissible."
  },
  {
    "type": "qcm",
    "niveau": 1,
    "image": "images/Q9.webp",
    "question": "Quel organe retient les particules polluantes dans le fluide ?",
    "options": [
      "Le filtre hydraulique",
      "Le régulateur de débit",
      "L'accumulateur",
      "L'échangeur thermique"
    ],
    "correct": 0,
    "explication": "Le filtre retient les impuretés pour préserver les composants sensibles (pompes, tiroirs de distributeurs, garnitures)."
  },
  {
    "type": "vrai_faux",
    "niveau": 1,
    "image": "images/Q10.webp",
    "question": "Avant toute intervention mécanique, la consignation et la dépressurisation sont obligatoires.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. Il est impératif d'isoler les sources d'énergie et de dissiper toute pression résiduelle avant d'intervenir."
  },

  // ==========================================
  // NIVEAU 2 — INTERMÉDIAIRE (10 Questions)
  // ==========================================
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q11.webp",
    "question": "Que provoque la présence d’air dissous dans un circuit sous pression ?",
    "options": [
      "Des bruits de claquement et des à-coups (émulsion / cavitation)",
      "Une amélioration du rendement volumique",
      "Une baisse de la température d'huile",
      "Une augmentation du pouvoir lubrifiant"
    ],
    "correct": 0,
    "explication": "L'air emprisonné rend le fluide compressible, génère des chocs hydrauliques et accélère l'oxydation de l'huile."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q12.webp",
    "question": "Sur un distributeur 4/3, que désignent les chiffres 4 et 3 ?",
    "options": [
      "4 orifices et 3 positions",
      "4 positions et 3 électroaimants",
      "4 bars et 3 litres/minute",
      "4 clapets et 3 tiroirs"
    ],
    "correct": 0,
    "explication": "Le premier chiffre correspond au nombre d'orifices (voies) et le second au nombre de positions du tiroir."
  },
  {
    "type": "vrai_faux",
    "niveau": 2,
    "image": "images/Q13.webp",
    "question": "Un filtre colmaté équipé d'un clapet de dérivation (by-pass) laisse passer l'huile non filtrée vers le circuit.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. Le by-pass évite la rupture de l'élément filtrant mais injecte une huile polluée dans le circuit."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q14.webp",
    "question": "Quel paramètre détermine la vitesse de déplacement de la tige d'un vérin ?",
    "options": [
      "Le débit d'huile qui entre dans la chambre",
      "La pression de tarage du limiteur",
      "La température ambiante",
      "La longueur des flexibles"
    ],
    "correct": 0,
    "explication": "La vitesse dépend du débit d'alimentation (V = Q / S). La pression ne détermine que la force développée."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q15.webp",
    "question": "Quelle est la cause principale de cavitation au niveau de l'aspiration d'une pompe ?",
    "options": [
      "Une restriction ou un colmatage sur la ligne d'aspiration",
      "Une huile trop chaude et fluide",
      "Un régime moteur trop faible",
      "Un excès d'huile dans le réservoir"
    ],
    "correct": 0,
    "explication": "Une perte de charge excessive à l'aspiration fait chuter la pression sous la tension de vapeur de l'huile, provoquant la cavitation."
  },
  {
    "type": "vrai_faux",
    "niveau": 2,
    "image": "images/Q16.webp",
    "question": "La viscosité d'une huile hydraulique standard augmente lorsque sa température s'élève.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": false,
    "explication": "Faux. La viscosité diminue quand l'huile chauffe (l'huile devient plus fluide)."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q17.webp",
    "question": "Quel rôle joue l'accumulateur hydropneumatique dans une centrale ?",
    "options": [
      "Stocker de l'énergie sous pression et amortir les pulsations",
      "Refroidir le fluide en continu",
      "Mesurer le débit instantané",
      "Empêcher les retours d'huile au réservoir"
    ],
    "correct": 0,
    "explication": "L'accumulateur compense les fuites, fournit un débit d'appoint rapide et absorbe les chocs hydrauliques."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q18.webp",
    "question": "Quel composant interdit le retour du fluide dans le sens opposé ?",
    "options": [
      "Le clapet anti-retour",
      "Le réducteur de pression",
      "Le raccord tournant",
      "Le tiroir d'étranglement"
    ],
    "correct": 0,
    "explication": "Le clapet anti-retour autorise le passage libre dans un sens et bloque hermétiquement le flux en sens inverse."
  },
  {
    "type": "qcm",
    "niveau": 2,
    "image": "images/Q19.webp",
    "question": "Quelle est la conséquence d'un désalignement entre le moteur électrique et la pompe ?",
    "options": [
      "Vibrations anormales et usure prématurée des paliers/accouplement",
      "Hausse de la pression maximale admissible",
      "Baisse de la température des roulements",
      "Amélioration de l'étanchéité de l'arbre"
    ],
    "correct": 0,
    "explication": "Le désalignement engendre des efforts radiaux/axiaux cycliques qui détériorent l'accouplement et les roulements."
  },
  {
    "type": "vrai_faux",
    "niveau": 2,
    "image": "images/Q20.webp",
    "question": "Un régulateur de débit avec balance de pression maintient une vitesse constante quelle que soit la charge.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. La balance de pression maintient une différence de pression constante aux bornes de l'étrangleur, rendant le débit indépendant de la charge."
  },

  // ==========================================
  // NIVEAU 3 — PROFESSIONNEL (10 Questions)
  // ==========================================
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q21.webp",
    "question": "Sur une pompe à pistons axiaux à cylindrée variable, quel élément ajuste la cylindrée ?",
    "options": [
      "L'inclinaison du plateau oscillant (ou plateau-came)",
      "La vitesse du ventilateur moteur",
      "Le diamètre extérieur du carter",
      "Le tarage du clapet de gavage"
    ],
    "correct": 0,
    "explication": "L'angle du plateau oscillant modifie la course des pistons dans le barillet et règle directement la cylindrée."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q22.webp",
    "question": "Que signifie la régulation de type 'Load Sensing' (LS) ?",
    "options": [
      "Adapter la pression et le débit de la pompe au strict besoin de la charge",
      "Couper la pompe dès qu'une charge est détectée",
      "Faire tourner la pompe à vitesse constante sans régulation",
      "Mesurer la température pour couper le groupe"
    ],
    "correct": 0,
    "explication": "Le Load Sensing ajuste le débit et la pression de la pompe en conservant une marge constante au-dessus de la charge la plus exigeante."
  },
  {
    "type": "vrai_faux",
    "niveau": 3,
    "image": "images/Q23.webp",
    "question": "Une valve d'équilibrage (flasquée sur un vérin) empêche la descente incontrôlée d'une charge motrice.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. Elle retient la charge et ne s'ouvre que sous l'action d'une pression de pilotage contrôlée à l'admission opposée."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q24.webp",
    "question": "Dans une analyse de spectre vibratoire sur un groupe motopompe, une raie prédominante à 1X indique le plus souvent :",
    "options": [
      "Un balourd (déséquilibre de masse)",
      "Un écaillage sur la bague extérieure d'un roulement",
      "Un défaut d'isolement de phase",
      "Une résonance acoustique du réservoir"
    ],
    "correct": 0,
    "explication": "La force centrifuge synchrone générée par un balourd se traduit par une vibration sinusoïdale pure à la fréquence de rotation (1X)."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q25.webp",
    "question": "Quel symptôme caractérise le grippage ou l'usure interne prononcée d'une pompe hydraulique ?",
    "options": [
      "Chute de débit à haute pression et élévation anormale de la température au drainage",
      "Baisse de l'intensité absorbée par le moteur électrique",
      "Augmentation de la vitesse de rotation de l'arbre",
      "Absence totale de fuite interne"
    ],
    "correct": 0,
    "explication": "L'usure augmente les jeux internes : les fuites internes (laminage) s'accroissent, faisant chuter le débit utile et chauffant l'huile de drain."
  },
  {
    "type": "vrai_faux",
    "niveau": 3,
    "image": "images/Q26.webp",
    "question": "Le gavage d'un circuit fermé hydrostatique compense les fuites internes et assure le balayage thermique.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. La pompe de gavage injecte de l'huile fraîche filtrée dans la branche basse pression pour compenser les drains et refroidir la boucle."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q27.webp",
    "question": "Quel gaz inerte est obligatoirement utilisé pour gonfler la vessie d'un accumulateur hydraulique ?",
    "options": [
      "L'azote (N2)",
      "L'oxygène pur (O2)",
      "L'air comprimé standard",
      "Le dioxyde de carbone (CO2)"
    ],
    "correct": 0,
    "explication": "L'azote est un gaz neutre inerte. L'oxygène et l'air sont formellement interdits à cause du risque critique d'explosion au contact de l'huile sous pression."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q28.webp",
    "question": "La classe de propreté d'un fluide selon la norme ISO 4406 classe les particules selon :",
    "options": [
      "3 seuils de taille : >= 4 µm, >= 6 µm et >= 14 µm",
      "La couleur de l'huile sur papier buvard",
      "La teneur en eau en parties par million (ppm)",
      "La densité massique du fluide"
    ],
    "correct": 0,
    "explication": "Le code ISO 4406 (ex: 18/16/13) quantifie le nombre de particules microscopiques par millilitre pour les calibres 4, 6 et 14 microns."
  },
  {
    "type": "qcm",
    "niveau": 3,
    "image": "images/Q29.webp",
    "question": "Sur une servovalve ou valve proportionnelle, que mesure et compense le capteur LVDT intégré ?",
    "options": [
      "La position réelle du tiroir de distribution (asservissement en boucle fermée)",
      "La température interne du fluide",
      "La pression d'alimentation",
      "Le niveau d'huile dans la bâche"
    ],
    "correct": 0,
    "explication": "Le LVDT mesure le déplacement physique du tiroir pour asservir sa position exacte au signal de consigne électrique."
  },
  {
    "type": "vrai_faux",
    "niveau": 3,
    "image": "images/Q30.webp",
    "question": "En maintenance nucléaire ou haute sécurité, l'ouverture d'un circuit hydraulique requiert une démarche FME (Foreign Material Exclusion).",
    "options": [
      "Vrai",
      "Faux"
    ],
    "correct": true,
    "explication": "Vrai. La démarche FME interdit toute intrusion de corps étrangers (outils, chiffons, poussières) lors de l'ouverture des circuits."
  }
];
