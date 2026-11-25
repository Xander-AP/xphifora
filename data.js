// Contenu des fiches. Chaque thème : un titre, une définition (facultative),
// et des blocs. Un bloc = { titre?, auteurs: [[nom, texte], ...], idee? }.
// Cette structure servira aussi à générer les flashcards (nom + thème -> texte).
const FICHES = [
  {
    titre: "La liberté",
    blocs: [{ auteurs: [
      ["Spinoza", "On croit être libres, mais on est en réalité déterminés par des causes qu'on ignore. La liberté, ce serait comprendre ces causes pour mieux agir."],
      ["Kant", "Être libre, ce n'est pas suivre ses envies, mais agir selon la loi morale qu'on se donne par la raison. La vraie liberté, c'est l'autonomie morale."],
      ["Sartre", "L'homme est « condamné à être libre », car on est toujours responsable de nos choix. Il n'y a pas de nature humaine fixe : on devient ce qu'on fait."],
      ["Rousseau", "La vraie liberté, c'est obéir à la loi qu'on s'est prescrite collectivement. Dans le contrat social, obéir à la loi, c'est être libre."],
      ["Berlin", "Liberté négative : absence d'obstacles extérieurs. Liberté positive : capacité à se gouverner soi-même."]
    ]}]
  },
  {
    titre: "La nature",
    definition: "La nature, c'est ce qui naît sans intervention humaine. Elle s'oppose souvent à la culture, qui est acquise et transformée.",
    blocs: [{ auteurs: [
      ["Rousseau", "La culture nous éloigne de notre nature originelle, qui était bonne."],
      ["Descartes", "L'homme, par la science et la raison, peut devenir « maître et possesseur de la nature »."],
      ["Spinoza", "L'homme est dans la nature, soumis à ses lois, comme tout ce qui existe. La nature est une totalité nécessaire."],
      ["Mythe de Prométhée", "L'homme n'a pas de défense naturelle, donc il invente la technique pour survivre ; elle fait partie de son essence."],
      ["Heidegger", "La technique moderne transforme la nature en simple stock, elle la réduit."],
      ["Hans Jonas", "Point de vue éthique (écologie) : on doit respecter la nature, pas seulement pour nous, mais par principe, par responsabilité envers l'avenir."]
    ]}]
  },
  {
    titre: "Le bonheur",
    definition: "Le bonheur, c'est un état de satisfaction durable. Il peut être vu comme un but, une quête ou une illusion, selon les penseurs.",
    blocs: [{ auteurs: [
      ["Épicure", "Le bonheur, c'est l'absence de douleurs (aponie) et de troubles de l'âme (ataraxie), à travers des plaisirs simples et l'amitié."],
      ["Aristote", "Le bonheur est la fin ultime de la vie humaine, réalisé dans l'accomplissement d'une vie vertueuse selon la raison."],
      ["Kant", "Le bonheur est une notion trop floue pour guider la morale. L'important, c'est le devoir, pas la recherche du bonheur."],
      ["Platon", "Le vrai bonheur, c'est l'élévation de l'âme vers le Bien, pas les plaisirs matériels."],
      ["Pascal", "Le bonheur humain est illusoire sans Dieu. On se divertit pour oublier notre misère."],
      ["Sartre et les stoïciens", "Le bonheur passe par la liberté intérieure. Être libre, c'est être capable de donner un sens à sa vie, même face à l'adversité."]
    ]}]
  },
  {
    titre: "La conscience et l'inconscient",
    definition: "La conscience, du latin <i>cum scientia</i> (« avec savoir »), désigne la capacité de se représenter soi-même, de penser ses propres actes et de distinguer le bien du mal. Elle est souvent vue comme ce qui distingue l'homme de l'animal.",
    blocs: [
      { titre: "Descartes : la conscience comme fondement de l'existence", citation: "<i>Cogito ergo sum</i> : « Je pense, donc je suis. »", points: [
        "La conscience est l'évidence première, elle prouve l'existence.",
        "Elle est réflexive : je suis conscient d'être conscient.",
        "L'homme est un être pensant, distinct du corps (dualisme)."
      ], idee: "La conscience est transparente à elle-même." },
      { titre: "Freud : l'inconscient comme limite de la conscience", citation: "« Le moi n'est pas maître dans sa propre maison. »", points: [
        "La conscience est seulement la partie visible de l'esprit.",
        "L'essentiel est inconscient (désirs, pulsions, refoulements).",
        "Topique freudienne : Ça (désirs), Moi (médiateur), Surmoi (interdits)."
      ], idee: "La conscience est limitée, traversée par l'inconscient." },
      { titre: "Sartre : une conscience libre, mais en tension", citation: "« L'homme est condamné à être libre. »", points: [
        "La conscience est libre et responsable, même face à l'inconscient.",
        "Elle n'a pas d'essence donnée, elle se projette dans l'avenir.",
        "L'homme peut prendre conscience de ses conditionnements et les dépasser."
      ], idee: "La conscience est ouverture et liberté, même si elle est influencée." }
    ]
  },
  {
    titre: "Le devoir",
    blocs: [{ auteurs: [
      ["Kant", "Le devoir, c'est une loi morale intérieure, universelle, qu'on suit par respect, pas par intérêt."],
      ["Les stoïciens", "Le devoir, c'est vivre selon la nature rationnelle, accepter ce qu'on ne contrôle pas et rester digne."],
      ["Les utilitaristes", "Le devoir est lié aux conséquences : on fait ce qui maximise le bonheur collectif."],
      ["Nietzsche", "Le devoir est une illusion morale créée par les faibles. Il faut dépasser cette morale imposée et créer ses propres valeurs."]
    ]}]
  },
  {
    titre: "La technique",
    definition: "La technique désigne l'ensemble des moyens créés par l'homme pour transformer la nature et satisfaire ses besoins. Elle est au croisement de la culture, de la science et de l'action.",
    blocs: [{ auteurs: [
      ["Mythe de Prométhée (Platon, Protagoras)", "L'homme est faible face à la nature, donc la technique compense ce manque. Elle est naturelle à l'homme, une ruse de survie."],
      ["Descartes", "La science permet de comprendre les lois de la nature, et la technique permet de les utiliser. L'homme devient ainsi « maître et possesseur de la nature »."],
      ["Heidegger", "La technique moderne réduit la nature à un « stock » exploitable et met en danger notre rapport au monde. L'homme aussi devient un objet. Danger d'oubli de l'Être."],
      ["Hans Jonas", "La technique a une telle puissance qu'elle exige une nouvelle éthique, celle de la responsabilité pour l'avenir : « Agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine. »"],
      ["Gilbert Simondon", "La technique est une forme de pensée et de culture. Il faut la comprendre, pas la rejeter : réhabiliter la technique dans la réflexion humaine."]
    ]}]
  },
  {
    titre: "La vérité, la science, la raison",
    blocs: [
      { titre: "Définitions", auteurs: [
        ["Vérité", "Conformité entre un discours et le réel (<i>veritas</i>)."],
        ["Science", "Savoir fondé sur l'observation, la preuve et la méthode (<i>scientia</i>)."],
        ["Raison", "Faculté de penser de manière logique, cohérente et universelle."]
      ]},
      { titre: "Repères", auteurs: [
        ["Platon", "La vérité ne se trouve pas dans le monde sensible, mais dans le monde des Idées. Elle est atteinte par la raison, non par les sens."],
        ["Descartes", "Pour atteindre la vérité, il faut passer par le doute méthodique, et reconstruire un savoir certain grâce à la raison claire et distincte (« Je pense, donc je suis »)."],
        ["Galilée", "Père de la science moderne, il unit expérience et mathématiques. La vérité scientifique se base sur l'observation et les lois naturelles."],
        ["Auguste Comte", "Fonde le positivisme : la science est le savoir le plus fiable. Elle décrit les lois des phénomènes, sans chercher les causes métaphysiques."],
        ["Karl Popper", "Une théorie est scientifique si elle est falsifiable. La science avance par réfutation, jamais par vérité absolue."],
        ["Bertrand Russell", "La science est incertaine, mais rigoureuse. Elle ne prétend pas tout expliquer, mais elle reste notre meilleure voie vers la vérité."]
      ]}
    ]
  },
  {
    titre: "Le langage",
    definition: "Le langage est la faculté humaine de produire et d'interpréter des signes pour communiquer. Il permet l'expression de la pensée, la relation sociale et la structuration du réel.",
    blocs: [
      { titre: "Repères", auteurs: [
        ["Descartes", "Le langage est le signe de la pensée rationnelle. Les animaux n'ont pas de langage au sens propre : ils ne pensent pas. L'homme seul peut articuler une pensée consciente."],
        ["Aristote", "L'homme est un animal politique doté de langage. Le langage permet d'exprimer le bien, le mal, le juste, donc de vivre en société."],
        ["Saussure", "Le langage est un système de signes : signifiant (le mot) + signifié (le concept). La langue est un code social, pas naturel."],
        ["Wittgenstein", "« Les limites de mon langage sont les limites de mon monde. » Le langage structure notre pensée ; ce qui ne peut pas être dit n'a pas de sens."],
        ["Hannah Arendt", "Le langage public permet d'agir politiquement, le langage privé relève de l'intime. Parler en public, c'est exister dans la cité."]
      ]},
      { titre: "Perspectives critiques", auteurs: [
        ["Pierre Bourdieu", "Le langage est un outil de domination symbolique. Celui qui maîtrise le langage légitime a plus de pouvoir : le langage reproduit les inégalités sociales."],
        ["Michel Foucault", "Le langage est encadré, normé dans certaines institutions (école, justice, médecine). Parler n'est pas toujours libre : c'est souvent une injonction du pouvoir."],
        ["Sigmund Freud", "Le langage est thérapeutique. Parler permet de mettre en mots l'inconscient, de libérer ce qui était refoulé : la parole soigne."]
      ]}
    ]
  },
  {
    titre: "La justice",
    definition: "La justice désigne à la fois une valeur morale (ce qui est juste) et une institution juridique (le droit, les lois). Questions : qu'est-ce qu'être juste ? La loi est-elle toujours juste ? Faut-il obéir ou désobéir ?",
    blocs: [{ auteurs: [
      ["Platon", "La justice, c'est l'harmonie entre les classes de la cité et les parties de l'âme. Être juste, c'est que chacun occupe sa place et remplisse sa fonction."],
      ["Rousseau", "La justice naît du contrat social : obéir à la volonté générale, c'est être libre et juste. Elle repose sur l'égalité et l'autonomie des citoyens."],
      ["Montesquieu", "La séparation des pouvoirs garantit la justice et évite la tyrannie. Le pouvoir doit être contrôlé pour que la loi reste juste."],
      ["Rawls", "La justice est ce qu'on choisirait sous un voile d'ignorance. Elle garantit les libertés égales et corrige les inégalités en faveur des plus faibles."],
      ["Thoreau (désobéissance civile)", "Quand la loi est injuste, désobéir peut devenir un devoir moral. La justice n'est pas toujours ce que dit la loi."]
    ]}]
  },
  {
    titre: "Le temps",
    definition: "Le temps est une dimension qui rend possible le changement, la durée et la succession des événements. En philosophie, il est à la fois mesure objective (physique) et expérience vécue (subjective).",
    blocs: [{ auteurs: [
      ["Aristote", "Le temps est la mesure du mouvement selon l'avant et l'après. Sans mouvement, pas de temps : c'est une relation, pas une chose en soi."],
      ["Saint Augustin", "Le temps est avant tout intérieur. Passé = mémoire, présent = attention, futur = attente. « Qu'est-ce que le temps ? Si personne ne me le demande, je le sais… »"],
      ["Kant", "Le temps est une forme a priori de la sensibilité. Il structure notre perception, mais n'existe pas indépendamment de notre esprit."],
      ["Bergson", "Distingue le temps mesuré (scientifique) et la durée réelle, le temps vécu, fluide, qualitatif. Le vrai temps est subjectif et continu."],
      ["Heidegger", "L'existence humaine (<i>Dasein</i>) est temporelle par essence : on est un être projeté vers le futur, ancré dans son passé et agissant au présent."],
      ["Einstein (physique)", "Le temps est relatif, il varie selon la vitesse et la gravité (relativité restreinte et générale). Ce n'est plus un flot uniforme, contrairement à Newton."]
    ]}]
  },
  {
    titre: "L'État",
    definition: "L'État désigne l'ensemble des institutions qui exercent le pouvoir politique sur un territoire et une population. Il crée, applique et garantit le respect des lois.",
    blocs: [{ auteurs: [
      ["Hobbes", "Sans État, c'est la guerre de tous contre tous. L'État garantit la sécurité en imposant l'ordre grâce à un souverain absolu."],
      ["Rousseau", "L'homme est bon par nature, mais la société le corrompt. Le contrat social crée un État qui exprime la volonté générale et assure l'égalité."],
      ["Locke", "L'État doit protéger les droits naturels (vie, liberté, propriété) et être limité pour éviter l'abus de pouvoir."],
      ["Marx", "L'État est un instrument de domination de classe. Dans une société communiste, l'État doit disparaître au profit d'une égalité réelle."],
      ["Hegel", "L'État est l'accomplissement de la Raison et de la liberté collective. C'est plus qu'un simple outil : c'est la forme la plus haute de la vie éthique."],
      ["Max Weber", "L'État est « le monopole de la violence légitime » sur un territoire donné."]
    ]}]
  },
  {
    titre: "Le travail",
    definition: "Le travail (du latin <i>tripalium</i>, instrument de torture) désigne à la fois l'effort nécessaire pour subvenir aux besoins et l'activité par laquelle l'homme transforme la nature et se réalise.",
    blocs: [{ auteurs: [
      ["Platon", "Dans <i>La République</i>, chaque citoyen doit exercer le travail qui correspond à sa nature et à ses capacités. Cela assure l'ordre et l'harmonie dans la cité."],
      ["Adam Smith", "Il théorise la division du travail, qui rend la production plus efficace, mais reconnaît qu'elle peut rendre le travail répétitif et abrutissant."],
      ["Hegel", "Le travail est un moyen pour l'homme de se former lui-même et de devenir conscient de sa liberté (dialectique du maître et de l'esclave)."],
      ["Marx", "Dans le capitalisme, le travail est aliéné : le travailleur est dépossédé du fruit de son travail. Dans une société communiste, le travail doit être émancipateur."],
      ["Hannah Arendt", "Distingue le travail (nécessité vitale), l'œuvre (création durable) et l'action (engagement politique). Le travail seul ne rend pas pleinement humain."],
      ["Simone Weil", "Critique le travail à la chaîne, qui déshumanise, et veut rétablir un travail plus réfléchi et épanouissant."]
    ]}]
  },
  {
    titre: "L'art",
    definition: "L'art vient de <i>technè</i> (savoir-faire). Il désigne l'activité créatrice par laquelle l'homme produit du beau, exprime des émotions ou des idées, et donne forme à l'ineffable.",
    blocs: [{ auteurs: [
      ["Platon", "L'art est une imitation trompeuse (<i>mimesis</i>), une copie de la réalité sensible, elle-même copie imparfaite des Idées. L'art éloigne de la vérité."],
      ["Aristote", "L'art (la tragédie) a une fonction utile : produire une catharsis, purger les émotions et éduquer moralement."],
      ["Kant", "Est beau ce qui plaît sans intérêt. Le jugement esthétique est désintéressé, libre et universel."],
      ["Hegel", "L'art exprime l'Esprit d'une époque. C'est une forme sensible de la Vérité, mais moins parfaite que la philosophie."],
      ["Nietzsche", "L'art est une affirmation de la vie. L'artiste est un maître de ses forces vitales, pas un inspiré divin. L'art est une tension entre l'apollinien (la forme) et le dionysiaque (l'énergie brute)."],
      ["Freud", "L'art est une sublimation : l'artiste extériorise ses pulsions inconscientes sous une forme socialement acceptable."],
      ["Hannah Arendt", "L'art appartient au registre de l'œuvre : il crée quelque chose de durable, qui résiste au temps et fait mémoire de l'humanité."]
    ]}],
    idee: "L'art rend dicible l'ineffable : il donne forme à ce que le langage ordinaire ne peut pas toujours exprimer."
  }
];
