import React from 'react';

function Intro() {
    return (
        <section className='seance' id='intro'>
            <h1 id="bienvenue-au-club-dinformatique---première-session">Bienvenue au Club d&#39;informatique - Première session</h1>
            <p>Bonjour à tous,</p>
            <p>Je suis ravi de vous souhaiter la bienvenue à la toute première séance du Club d&#39;informatique de Victor Duruy ! Je m&#39;appelle Victor et avec Rafael, Lucien et Rémi, nous serons vos guides tout au long de ce voyage passionnant dans le monde de l&#39;informatique. Le club a pour vocation d&#39;explorer, d&#39;apprendre et de maîtriser les différents aspects de l&#39;informatique, du codage et de la programmation à la cybersécurité et bien plus encore. Que vous soyez un codeur chevronné ou un débutant, ce club est l&#39;endroit idéal pour élargir vos horizons et plonger dans le monde fascinant de la technologie.</p>
        </section>
    )
}

function Plan() {
    return (
        <section className='seance' id='plan'>
            <h2>Plan de la Séance</h2>
            <a href="#intro">Bienvenue au Club d&#39;informatique - Première session</a>
            <ul>
                <li><a href="#material">Matériel nécessaire</a></li>
                <li><a href="#presentation">Présentation du club</a><ul>
                    <li><a href="#importance-informatique">Pourquoi les technologies de l&#39;information sont-elles importantes dans le monde d&#39;aujourd&#39;hui ?</a></li>
                    <li><a href="#participation">Ce que vous pouvez attendre en faisant partie de ce club</a></li>
                </ul>
                </li>
                <li><a href="#connaissance">Faire connaissance</a></li>
                <li><a href="#principes">Principes du Club d&#39;informatique</a><ul>
                    <li><a href="#1-collaboration">1. Collaboration</a></li>
                    <li><a href="#2-curiosité">2. Curiosité</a></li>
                    <li><a href="#3-créativité">3. Créativité</a></li>
                    <li><a href="#4-inclusivité">4. Inclusivité</a></li>
                </ul>
                </li>
                <li><a href="#github-introduction">Introduction à GitHub</a><ul>
                    <li><a href="#quest-ce-que-github">Qu&#39;est-ce que GitHub ?</a></li>
                    <li><a href="#pourquoi-github-est-il-crucial">Pourquoi GitHub est-il crucial ?</a></li>
                    <li><a href="#concepts-clés">Concepts clés</a></li>
                </ul>
                </li>
                <li><a href="#atelier">Atelier pratique - Les bases de GitHub</a><ul>
                    <li><a href="#étape-1--création-dun-compte-github">Étape 1 : Création d&#39;un compte GitHub</a></li>
                    <li><a href="#étape-2--clonage-dun-dép%C3%B4t">Étape 2 : Clonage d&#39;un dépôt</a></li>
                    <li><a href="#étape-3--apporter-des-modifications-et-valider">Étape 3 : Apporter des modifications et valider</a></li>
                    <li><a href="#étape-4--création-dune-branche">Étape 4 : Création d&#39;une branche</a></li>
                    <li><a href="#étape-5--créer-une-demande-de-retrait">Étape 5 : Créer une demande de retrait</a></li>
                    <li><a href="#étape-6--réviser-et-fusionner">Étape 6 : Réviser et fusionner</a></li>
                </ul>
                </li>
                <li><a href="#planning">Événements et activités à venir</a><ul>
                    <li><a href="#1-ateliers-de-codage">1. Ateliers de codage</a></li>
                    <li><a href="#2-discussions-techniques-et-conférenciers-invités">2. Discussions techniques et conférenciers invités</a></li>
                    <li><a href="#3-hackathons-et-projets">3. Hackathons et projets</a></li>
                    <li><a href="#4-discussion-sur-les-tendances-technologiques">4. Discussion sur les tendances technologiques</a></li>
                    <li><a href="#5-défis-de-codage">5. Défis de codage</a></li>
                    <li><a href="#6-vitrines-de-projets">6. Vitrines de projets</a></li>
                    <li><a href="#7-forum-de-discussion-ouvert">7. Forum de discussion ouvert</a></li>
                </ul>
                </li>
                <li><a href="#questions">Séance de questions-réponses</a></li>
            </ul>
        </section>
    )
}

function Material() {
    return (
        <section className='seance' id='material'>
            <h2 id="matériel-nécessaire">Matériel nécessaire</h2>
            <ul>
                <li>Ordinateurs portables ou appareils permettant d&#39;accéder à GitHub (si possible).</li>
                <li>Cahiers et stylos pour prendre des notes.</li>
            </ul>

        </section>
    )
}

function Presentation() {
    return (
        <section className='seance' id='presentation'>
            <p>N&#39;oubliez pas que ce club est une communauté où vos idées et vos intérêts sont importants. Notre objectif est de fournir un environnement favorable pour que tout le monde puisse apprendre et grandir ensemble. N&#39;hésitez pas à poser des questions, à partager vos idées et à échanger avec les autres membres. Nous sommes tous ici pour apprendre et nous amuser !</p>
            <p>Merci de vous être joints à nous aujourd&#39;hui et plongeons dans le monde de l&#39;informatique avec enthousiasme et curiosité.</p>
            <br />
            <h2 id="présentation-du-club">Présentation du club</h2>
            <p>En quoi consiste le Club d&#39;informatique ? C&#39;est plus qu&#39;un simple club : c&#39;est une communauté d&#39;esprits curieux, d&#39;aspirants magiciens de la technologie et de résolveurs de problèmes créatifs. Dans ce club, nous ne nous contenterons pas de parler de technologie ; nous plongerons dans ses méandres, explorerons ses possibilités et l&#39;utiliserons comme un outil pour façonner l&#39;avenir.</p>
            <h3 id="importance-informatique">Pourquoi les technologies de l&#39;information sont-elles importantes dans le monde d&#39;aujourd&#39;hui ?</h3>
            <p>Vous vous demandez peut-être pourquoi je devrais m&#39;intéresser aux technologies de l&#39;information ? La réponse est simple : les technologies de l&#39;information sont partout. C&#39;est le moteur des applications que nous utilisons, des sites web que nous visitons et des appareils dont nous ne pouvons plus nous passer. Des algorithmes qui alimentent nos flux de médias sociaux aux mesures de cybersécurité qui protègent nos informations personnelles, les technologies de l&#39;information jouent un rôle essentiel dans nos vies.</p>
            <p>Mais le monde des technologies de l&#39;information ne se limite pas à des applications pratiques ; c&#39;est aussi un royaume de créativité sans fin. C&#39;est une toile où les lignes de code peuvent se transformer en expériences interactives, où les idées peuvent devenir réalité grâce aux logiciels et où l&#39;innovation ne connaît pas de limites. Et c&#39;est ce que nous sommes ici pour explorer - la fusion de la logique et de la créativité qui fait de l&#39;informatique un domaine si fascinant.</p>
            <h3 id="participation">Ce que vous pouvez attendre en faisant partie de ce club</h3>
            <p>Être membre du Club d&#39;informatique, c&#39;est bien plus qu&#39;assister à des sessions. Cela signifie faire partie d&#39;une communauté de soutien où vos questions sont les bienvenues, vos idées sont appréciées et votre parcours dans le monde de la technologie est célébré. Ici, vous aurez l&#39;occasion de.. :</p>
            <ul>
                <li><p><strong>Apprendre les uns des autres:</strong> Quel que soit votre niveau de compétence, chacun a quelque chose d&#39;unique à offrir. Que vous soyez un as du codage ou un novice en technologie, nous pouvons tous apprendre de l&#39;expérience et des idées des autres.</p>
                </li>
                <li><p>Construire des compétences pratiques:** Nous nous plongerons dans des ateliers pratiques, nous relèverons des défis du monde réel et nous perfectionnerons des compétences qui sont très pertinentes sur le marché du travail d&#39;aujourd&#39;hui.</p>
                </li>
                <li><p><strong>Collaborer et créer:</strong> La technologie prospère lorsque des esprits divers se rencontrent. Nous encourageons la collaboration et vous offrons une plateforme pour travailler sur des projets passionnants qui repoussent les limites de l&#39;innovation.</p>
                </li>
                <li><p><strong>Restez curieux:</strong> Dans le monde de la technologie, il y a toujours quelque chose de nouveau à découvrir. Nous favoriserons une culture de la curiosité, où l&#39;on encourage à poser des questions et à rechercher des connaissances.</p>
                </li>
                <li><p><strong>S&#39;amuser:</strong> Enfin, n&#39;oublions pas que la technologie peut être incroyablement amusante ! Nous aborderons notre voyage d&#39;apprentissage avec un sentiment d&#39;excitation et d&#39;émerveillement.</p>
                </li>
            </ul>
            <p>Je suis impatient de voir chacun d&#39;entre vous explorer et embrasser le monde des technologies de l&#39;information à travers l&#39;objectif du Club d&#39;informatique. Alors, sans plus attendre, embarquons ensemble dans cette aventure. Êtes-vous prêts à plonger ? Faisons en sorte que ce voyage soit inoubliable !</p>
        </section>
    )
}

function Connaissance() {
    return (
        <section className='seance' id='connaissance'>
            <h2 id="faire-connaissance">Faire connaissance</h2>
            <p>Avant d&#39;approfondir les principes du Club d&#39;informatique et notre exploration de GitHub, prenons le temps d&#39;apprendre à nous connaître. Après tout, une communauté forte commence par l&#39;établissement de liens et la compréhension des antécédents et des intérêts de chacun.</p>
            <p>Pour briser la glace, nous avons prévu une activité amusante. Nous allons faire le tour de la salle (ou de l&#39;écran, dans le cas présent) et parler un peu de nous. Vous pouvez nous dire votre nom, votre année scolaire, votre expérience de la technologie et une chose qui vous passionne dans ce domaine. Il peut s&#39;agir d&#39;une application préférée, d&#39;un jeu que vous aimez ou d&#39;une tendance technologique qui vous intrigue.</p>
            <p>N&#39;oubliez pas qu&#39;il s&#39;agit d&#39;un espace sécurisé et que nous sommes tous ici pour apprendre et progresser ensemble. Saisissons donc cette occasion de nouer des liens et d&#39;en apprendre davantage sur les divers intérêts et expériences qui nous ont amenés au Club d&#39;informatique.</p>
            <p>N&#39;hésitez pas à être aussi bref ou détaillé que vous le souhaitez, et ne vous inquiétez pas si vous êtes novice en matière de technologie - nous sommes tous ici pour apprendre, et chaque point de vue est précieux.</p>
            <br />
            <p>Commençons cette activité en demandant à [choisissez un volontaire ou commencez par vous-même] de se présenter. Qui est impatient de commencer à tisser des liens ? 🚀</p>
        </section>
    )
}

function Principes() {
    return (
        <section className='seance' id='principes'>
            <h2 id="principes-du-club-dinformatique">Principes du Club d&#39;informatique</h2>
            <p>Maintenant que nous avons appris à nous connaître un peu mieux, plongeons dans les principes fondamentaux qui guident le Club d&#39;informatique. Ces principes constituent le fondement de notre communauté et les valeurs qui façonneront notre parcours commun.</p>
            <h3 id="1-collaboration">1. Collaboration</h3>
            <p>Dans le monde de la technologie, la collaboration est essentielle. Personne n&#39;a toutes les réponses, et nous pouvons réaliser des choses remarquables en combinant nos diverses compétences et perspectives. Que vous soyez un gourou du codage ou un enthousiaste du design UX, vos contributions comptent et nous mettrons l&#39;accent sur le travail en commun pour créer des solutions innovantes.</p>
            <h3 id="2-curiosité">2. Curiosité</h3>
            <p>La curiosité est ce qui nous fait avancer. C&#39;est l&#39;envie d&#39;explorer l&#39;inconnu, de poser des questions et de chercher des solutions. Dans ce club, nous vous encourageons à faire preuve de curiosité. N&#39;hésitez pas à demander &quot;Pourquoi ?&quot; ou &quot;Comment ça marche ?&quot;. Chaque question que vous posez est un pas vers la compréhension et la maîtrise.</p>
            <h3 id="3-créativité">3. Créativité</h3>
            <p>La technologie, ce n&#39;est pas seulement suivre des règles, c&#39;est aussi repousser les limites et sortir des sentiers battus. Nous encouragerons votre pensée créative et vous mettrons au défi d&#39;appliquer vos compétences techniques pour résoudre des problèmes du monde réel. Qu&#39;il s&#39;agisse de coder une nouvelle application, de concevoir un site web convivial ou de développer une solution logicielle unique, la créativité sera au cœur de nos activités.</p>
            <h3 id="4-inclusivité">4. Inclusivité</h3>
            <p>Le Club d&#39;informatique est un espace accueillant pour tous. Nous apprécions la diversité sous toutes ses formes - perspectives, origines et expériences diverses. Nous voulons que chacun se sente inclus et habilité à partager ses pensées et ses idées. Ensemble, nous créerons un environnement où la voix de chacun sera entendue et respectée.</p>
            <p>Ces principes sont plus que des mots sur un écran ; ils sont la force motrice de la mission de notre club. Au fil des sessions, des ateliers et des projets, nous verrons ces principes à l&#39;œuvre, façonnant nos discussions, nos collaborations et l&#39;impact que nous avons dans le monde de la technologie.</p>
            <p>N&#39;oubliez pas que ces principes ne concernent pas uniquement le temps passé au sein du club ; ce sont des valeurs que vous pouvez porter avec vous dans vos projets futurs, tant dans le domaine des technologies de l&#39;information qu&#39;en dehors de celui-ci.</p>
            <br />
            <p>Avec la collaboration, la curiosité, la créativité et l&#39;inclusivité comme boussole, nous sommes prêts à nous embarquer pour un voyage passionnant d&#39;apprentissage et de croissance. Poursuivons notre exploration en plongeant dans le monde du contrôle des versions et de la collaboration à l&#39;aide de GitHub, un outil qui incarne ces mêmes principes.</p>
        </section>
    )
}

function ConceptIntro() {
    return (
        <section className='seance' id='github-introduction'>
            <h2 id="introduction-à-github">Introduction à GitHub</h2>
            <p>Passons à la vitesse supérieure et plongeons dans le monde du contrôle des versions et de la collaboration à l&#39;aide de GitHub. Si le concept vous est inconnu, ne vous inquiétez pas : à la fin de cette session, vous aurez une solide compréhension de ce qu&#39;est GitHub et de la façon dont il peut révolutionner votre façon de travailler avec la technologie.</p>
            <h3 id="quest-ce-que-github">Qu&#39;est-ce que GitHub ?</h3>
            <p>À la base, GitHub est une plateforme qui offre un espace aux individus et aux équipes pour collaborer sur des projets logiciels. Il s&#39;agit d&#39;une sorte de hub virtuel où les développeurs peuvent travailler ensemble, partager du code, suivre les modifications et gérer leurs projets de manière transparente.</p>
            <h3 id="pourquoi-github-est-il-crucial">Pourquoi GitHub est-il crucial ?</h3>
            <p>Imaginez que vous travaillez sur un projet de groupe ou sur le codage d&#39;une application. Lorsque plusieurs personnes apportent des modifications à la même base de code, la situation peut rapidement devenir chaotique. GitHub résout ce problème en introduisant le contrôle de version. Il vous permet de suivre les modifications apportées à votre code au fil du temps, de revenir à des versions antérieures si nécessaire et de collaborer efficacement avec d&#39;autres personnes sans se marcher sur les pieds.</p>
            <h3 id="concepts-clés">Concepts clés</h3>
            <ol>
                <li><p><strong>Repositories:</strong> Considérez un repository (ou &quot;repo&quot; en abrégé) comme le dossier d&#39;un projet. Il contient tous les fichiers, le code et les ressources de ce projet. Les dépôts peuvent être publics (visibles par tous) ou privés (accès restreint).</p>
                </li>
                <li><p><strong>Commits:</strong> Un commit est comme un instantané de votre code à un moment précis. Il capture les changements que vous avez effectués et vous permet de laisser une description expliquant ce que vous avez fait.</p>
                </li>
                <li><p><strong>Branches:</strong> Les branches sont des versions différentes de votre projet sur lesquelles vous pouvez travailler indépendamment. Elles sont extrêmement utiles pour expérimenter de nouvelles fonctionnalités ou corriger des bogues sans affecter le projet principal.</p>
                </li>
                <li><p><strong>Pull requests</strong> Une Pull request est un moyen de proposer des changements d&#39;une branche à une autre. C&#39;est une demande formelle de fusionner vos changements dans le projet principal. Les autres membres de l&#39;équipe peuvent examiner vos modifications avant qu&#39;elles ne soient fusionnées.</p>
                </li>
            </ol>
            <p><strong>Démonstration:</strong></p>
            <p>Pour vous donner une idée plus claire, nous allons faire une démonstration simple de GitHub. Nous commencerons par créer un nouveau dépôt, effectuerons quelques modifications, créerons une branche et, enfin, créerons une Pull request.</p>
            <p>À la fin de cette démonstration, vous aurez une compréhension pratique du fonctionnement de GitHub et vous serez prêt à commencer à collaborer sur vos propres projets en utilisant cet outil puissant.</p>
            <p>Mais avant de nous plonger dans l&#39;atelier pratique, assurons-nous que tout le monde dispose d&#39;un compte GitHub. Si vous avez déjà un compte, c&#39;est parfait ! Si ce n&#39;est pas le cas, ne vous inquiétez pas, nous vous guiderons tout au long du processus.</p>
            <p>Alors, attachez vos ceintures - nous sommes sur le point d&#39;ouvrir le monde de la collaboration et du contrôle de version avec GitHub !</p>

        </section>
    )
}

function Atelier() {
    return (
        <section className='seance' id='atelier'>
            <h2 id="atelier-pratique---les-bases-de-github">Atelier pratique - Les bases de GitHub</h2>
            <p>Maintenant que nous avons une solide compréhension des concepts clés de GitHub, retroussons nos manches et mettons-nous à l&#39;œuvre avec la plateforme. A la fin de cet atelier, vous aurez une expérience pratique de l&#39;utilisation de GitHub pour la collaboration et le contrôle de version.</p>
            <h3 id="étape-1--création-dun-compte-github">Étape 1 : Création d&#39;un compte GitHub</h3>
            <p>Si vous ne l&#39;avez pas encore fait, commençons par créer votre propre compte GitHub. Le processus est simple :</p>
            <ol>
                <li>Allez sur <a href="http://www.github.com">www.github.com</a>.</li>
                <li>Cliquez sur &quot;Sign Up&quot; et suivez les instructions pour créer votre compte.</li>
                <li>Choisissez un nom d&#39;utilisateur, indiquez votre adresse électronique et définissez un mot de passe.</li>
                <li>Cherchez &quot;Informatique-Vduruy&quot; et followez l&#39;organisation, afin que nous puissions récupérer vos comptes et vous transmettre plus facilement plus tard des fichiers</li>
            </ol>
            <h3 id="étape-2--clonage-dun-dépôt">Étape 2 : Clonage d&#39;un dépôt</h3>
            <ol>
                <li>Désormais, vous devriez avoir accès à un repository appelé &quot;Seance-1-Introduction&quot;, cliquez sur celui-ci.</li>
                <li>Cliquez ensuite sur le bouton &quot;Fork&quot; dans le coin supérieur droit de la page du dépôt. Cela créera votre propre copie du dépôt dans votre compte GitHub.</li>
            </ol>
            <h3 id="étape-3--apporter-des-modifications-et-valider">Étape 3 : Apporter des modifications et valider</h3>
            <ol>
                <li>Une fois que vous avez cloné le dépôt, vous serez dirigé vers votre copie.</li>
                <li>Cliquez sur un fichier pour afficher son contenu. Ensuite, cliquez sur l&#39;icône du crayon pour modifier le fichier.</li>
                <li>Ouvrez et modifiez le fichier <a href="members.md">&quot;members.md&quot;</a>. Ajoutez votre nom de la même manière que celui déjà présent.</li>
                <li>Cliquez sur &quot;Commit Changes&quot;, et saisissez un brève description de votre modification. Renommez le commit en suivant le format <code>maser - adding [votre nom]</code></li>
            </ol>
            <h3 id="étape-4--création-dune-branche">Étape 4 : Création d&#39;une branche</h3>
            <ol>
                <li>Sélectionnez le bouton &quot;Create a new branch&quot; et saisissez un nouveau nom de branche, par exemple &quot;votrenom - Name addition&quot;.</li>
            </ol>
            <h3 id="étape-5--créer-une-demande-de-retrait">Étape 5 : Créer une demande de retrait</h3>
            <ol>
                <li>Après avoir fait des changements sur votre nouvelle branche, allez sur la page principale du dépôt.</li>
                <li>Vous devriez voir une bannière vous suggérant de créer une demande d&#39;extraction. Cliquez dessus.</li>
                <li>Comparez votre branche avec la branche principale, vérifiez vos modifications et cliquez sur &quot;Create Pull Request&quot;.</li>
                <li>Laissez une brève description de vos changements, puis cliquez à nouveau sur &quot;Create Pull Request&quot;.</li>
            </ol>
            <h3 id="étape-6--réviser-et-fusionner">Étape 6 : Réviser et fusionner</h3>
            <ol>
                <li>En tant que propriétaire du dépôt, je recevrai une notification à propos de votre demande d&#39;extraction.</li>
                <li>Je vais examiner vos modifications et, si tout semble bon, je vais fusionner votre demande dans la branche principale.</li>
            </ol>
            <p>Félicitations ! Vous venez de découvrir les bases de la collaboration et du contrôle de version avec GitHub. Vous avez créé un dépôt, effectué des modifications, créé une nouvelle branche et même soumis une demande d&#39;extraction. Ce processus peut vous sembler un peu compliqué au début, mais avec de l&#39;entraînement, il deviendra une seconde nature.</p>
            <p>N&#39;oubliez pas que GitHub est un outil puissant qui ouvre la voie à un travail d&#39;équipe sans faille et à une gestion de projet organisée. Au fur et à mesure que vous poursuivrez votre voyage au sein du Club d&#39;informatique et au-delà, vous trouverez en GitHub un compagnon indispensable.</p>
            <p>N&#39;hésitez pas à l&#39;explorer davantage, à créer vos propres dépôts et à continuer à expérimenter les fonctionnalités de GitHub. Si vous avez des questions ou si vous avez besoin d&#39;aide, n&#39;hésitez pas à nous contacter. Et sur ce, applaudissez vous-mêmes pour avoir terminé cet atelier pratique ! 🎉👏</p>
            <p>Pour la suite, jetons un coup d&#39;œil sur les événements et activités passionnants que le Club d&#39;informatique vous réserve.</p>
        </section>
    )
}

function Planning() {
    return (
        <section className='seance' id='planning'>
            <h2 id="événements-et-activités-à-venir">Événements et activités à venir</h2>
            <p>Alors que nous terminons notre exploration des bases de GitHub, prenons un moment pour examiner les événements et activités passionnants que le InnoTech Club a planifiés pour vous. Notre objectif est de maintenir l&#39;élan et de vous offrir des opportunités de plonger plus profondément dans le monde de la technologie et de l&#39;informatique.</p>
            <h3 id="1-ateliers-de-codage">1. Ateliers de codage</h3>
            <p>Préparez-vous à améliorer vos compétences en codage grâce à des ateliers pratiques. Nous couvrirons des langages tels que Python, JavaScript, etc. Que vous soyez un codeur débutant ou expérimenté, il y a quelque chose pour tout le monde à apprendre et à appliquer.</p>
            <h3 id="2-discussions-techniques-et-conférenciers-invités">2. Discussions techniques et conférenciers invités</h3>
            <p>Nous allons essayer d&#39;inviter des professionnels de l&#39;industrie technologique à partager leurs idées et leurs expériences avec nous. Ces conférences vous donneront un aperçu des applications réelles de la technologie et ouvriront des opportunités de réseautage. Malheureusement nous ne pouvons encore rien vous promettre.</p>
            <h3 id="3-hackathons-et-projets">3. Hackathons et projets</h3>
            <p>Donnez libre cours à votre créativité dans les hackathons et les projets collaboratifs. Ces événements vous mettront au défi de résoudre des problèmes, de créer des solutions innovantes et d&#39;appliquer ce que vous avez appris dans un environnement compétitif mais amusant.</p>
            <h3 id="4-discussion-sur-les-tendances-technologiques">4. Discussion sur les tendances technologiques</h3>
            <p>Restez à jour avec les dernières tendances et innovations technologiques. Nous aborderons des sujets tels que l&#39;intelligence artificielle, la cybersécurité, la blockchain, etc. Ces discussions élargiront vos horizons et vous donneront un aperçu de l&#39;avenir de l&#39;informatique.</p>
            <h3 id="5-défis-de-codage">5. Défis de codage</h3>
            <p>Mettez vos compétences de codage à l&#39;épreuve avec des défis de codage. Ces défis vous encourageront à penser de manière critique et créative tout en améliorant vos capacités de résolution de problèmes.</p>
            <h3 id="6-vitrines-de-projets">6. Vitrines de projets</h3>
            <p>Vous avez un projet dont vous êtes fier ? Partagez-le avec le club lors de nos sessions de présentation de projets. C&#39;est votre chance de démontrer vos compétences, d&#39;obtenir des commentaires et d&#39;inspirer les autres.</p>
            <h3 id="7-forum-de-discussion-ouvert">7. Forum de discussion ouvert</h3>
            <p>Nous organiserons des forums de discussion ouverts sur divers sujets liés à l&#39;informatique, où vous pourrez partager vos réflexions, poser des questions et engager des conversations significatives avec les autres membres de votre club.</p>
            <br />
            <p>Ce ne sont là que quelques exemples des événements et activités passionnants auxquels vous pouvez vous attendre au Club InnoTech. Notre objectif est de créer un environnement dynamique et enrichissant qui répond à divers intérêts et niveaux de compétence. Nous vous encourageons à participer activement, à suggérer des idées et à tirer le meilleur parti de votre adhésion au club.</p>
        </section>
    )
}

function Questions() {
    return (
        <section className='seance' id='questions'>
            <h2 id="séance-de-questions-réponses">Séance de questions-réponses</h2>
            <p>Avant de conclure cette session, je souhaite ouvrir la parole pour toute question, préoccupation ou suggestion que vous pourriez avoir. Qu&#39;il s&#39;agisse des activités du club, de GitHub ou de tout autre sujet lié à l&#39;informatique, je suis là pour répondre à vos questions.</p>
            <p>N&#39;hésitez pas à lever la main ou à taper votre question dans le chat, et je ferai de mon mieux pour vous fournir des réponses précises et utiles. N&#39;oubliez pas qu&#39;il n&#39;y a pas de question idiote - si vous vous posez des questions sur quelque chose, il y a de fortes chances que d&#39;autres se posent la même question.</p>
            <p>Nous avons quelques minutes réservées pour cette session de questions-réponses, alors profitons-en au maximum. N&#39;hésitez pas à demander !</p>
            <br />
            <p>Sur ce, je tiens à vous remercier de vous joindre à nous pour cette session inaugurale du Club InnoTech. C&#39;est un voyage passionnant qui nous attend et j&#39;ai hâte de voir comment nous grandirons, apprendrons et innoverons ensemble. Restez curieux, restez enthousiaste et rappelez-vous que le monde de la technologie est à portée de main. Faisons-en une balade inoubliable !</p>
        </section>
    )
}

function Introduction() {
    return (
        <div className='page'>
            <Intro />
            <Plan />
            <Material />
            <Presentation />
            <Connaissance />
            <Principes />
            <ConceptIntro />
            <Atelier />
            <Planning />
            <Questions />
        </div>
    )
}

export default Introduction