// Section méthodologie. Chaque partie : un titre et du HTML.
const METHODO = [
  {
    titre: "Analyser le sujet",
    html: `
      <p>C'est l'étape la plus importante : un bon devoir se joue au brouillon.</p>
      <ul>
        <li><b>Définir chaque terme</b> du sujet, y compris les petits mots (« peut-on », « faut-il », « seulement », « tout »).</li>
        <li><b>Chercher plusieurs sens</b> pour les mots clés (ex. « liberté » : faire ce qu'on veut, ou se gouverner soi-même).</li>
        <li><b>Repérer la forme de la question</b> : « peut-on » (possibilité ou droit ?), « faut-il » (nécessité ou devoir ?), « est-ce que X est Y » (définition).</li>
        <li><b>Chercher les présupposés</b> : qu'est-ce que le sujet considère comme acquis ?</li>
        <li><b>Reformuler</b> le sujet avec tes propres mots pour vérifier que tu l'as compris.</li>
      </ul>`
  },
  {
    titre: "Construire la problématique",
    html: `
      <p>La problématique n'est pas le sujet répété : elle montre <b>pourquoi la question pose problème</b>.</p>
      <ul>
        <li>Trouve <b>deux réponses possibles qui s'opposent</b>, chacune avec une bonne raison.</li>
        <li>Fais apparaître la <b>tension</b> entre elles (paradoxe, contradiction).</li>
        <li>Termine par une question (ou deux) qui guidera tout le devoir.</li>
      </ul>
      <div class="idee"><b>Modèle :</b> « D'un côté… En effet… Pourtant… Dès lors, … ? »</div>`
  },
  {
    titre: "L'introduction",
    html: `
      <ol>
        <li><b>Accroche</b> : un exemple, une situation, une citation qui amène le sujet (pas de « De tout temps, les hommes… »).</li>
        <li><b>Énoncé du sujet</b> et <b>analyse des termes</b>.</li>
        <li><b>Problématique</b> : la tension entre deux réponses.</li>
        <li><b>Annonce du plan</b> : une phrase par partie, sans lourdeur.</li>
      </ol>
      <p>Rédige-la entièrement au brouillon.</p>`
  },
  {
    titre: "Le développement",
    html: `
      <p>En général <b>2 ou 3 parties</b> qui <b>progressent</b> : chaque partie part des limites de la précédente.</p>
      <ul>
        <li><b>I.</b> La réponse la plus évidente, qu'on justifie sérieusement.</li>
        <li><b>II.</b> Ses limites : ce qu'elle oublie, ce qui la contredit.</li>
        <li><b>III.</b> Un dépassement : une réponse plus fine, qui garde ce qu'il y avait de juste avant.</li>
      </ul>
      <p><b>Dans chaque sous-partie :</b> idée → argument → référence (auteur) → exemple analysé → mini-conclusion.</p>
      <p>Entre deux parties : une <b>transition</b> (bilan de la partie + question qui lance la suivante).</p>`
  },
  {
    titre: "Bien utiliser un auteur",
    html: `
      <ul>
        <li><b>Ne récite pas</b> : explique la thèse avec tes mots.</li>
        <li>Montre <b>en quoi elle répond au sujet</b> : l'auteur sert ton argument, pas l'inverse.</li>
        <li><b>Discute-le</b> : jusqu'où a-t-il raison ? Qu'est-ce qu'un autre auteur lui répondrait ?</li>
        <li>Une citation courte et bien expliquée vaut mieux que trois citations plaquées.</li>
      </ul>`
  },
  {
    titre: "La conclusion",
    html: `
      <ul>
        <li><b>Bilan</b> du parcours, en quelques phrases.</li>
        <li><b>Réponse claire</b> à la problématique : il faut trancher.</li>
        <li><b>Ouverture</b> facultative : seulement si elle prolonge vraiment la réflexion.</li>
      </ul>
      <p>Rédige-la aussi au brouillon, pour ne pas la bâcler à la fin.</p>`
  },
  {
    titre: "Gérer son temps (épreuve de 4 h)",
    html: `
      <ul>
        <li><b>≈ 1 h 15</b> : analyse du sujet, problématique, plan détaillé.</li>
        <li><b>≈ 15 min</b> : introduction et conclusion au brouillon.</li>
        <li><b>≈ 2 h 15</b> : rédaction au propre.</li>
        <li><b>≈ 15 min</b> : relecture (orthographe, mots oubliés).</li>
      </ul>`
  },
  {
    titre: "Erreurs à éviter",
    html: `
      <ul>
        <li>Le <b>catalogue d'auteurs</b> (« Platon pense… Kant pense… ») sans fil conducteur.</li>
        <li>Le plan <b>oui / non / peut-être</b> où la 3e partie ne dépasse rien.</li>
        <li>Le <b>hors-sujet</b> : réciter une fiche au lieu de répondre à la question posée.</li>
        <li>Les <b>exemples non analysés</b> : un exemple doit être expliqué et relié à l'argument.</li>
        <li>Une conclusion qui <b>ne répond pas</b> à la question.</li>
      </ul>`
  },
  {
    titre: "L'explication de texte (en bref)",
    html: `
      <ul>
        <li><b>Introduction</b> : thème, thèse de l'auteur, problème auquel le texte répond, enjeu, étapes du texte.</li>
        <li><b>Développement</b> : suivre le texte étape par étape, expliquer chaque idée (définir, reformuler, donner des exemples), sans paraphraser.</li>
        <li><b>Conclusion</b> : rappeler la thèse, montrer son intérêt, éventuellement ses limites.</li>
      </ul>`
  }
];
