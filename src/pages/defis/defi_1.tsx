import "./../../assets/css/components/defis/defi-box.css"

function Home() {
    return (
        <main>
            <section className="defi-box">
                <div id= "title">
                    <h1>Premier défi de programmation</h1>
                    <h2>02/04/2024 - 23/04/2024</h2>
                    <h3>Catégorie: Jeux Vidéos / RPG</h3>
                </div>

                <p>Nous avons l'honneur de vous poposer un petit défi de programmation. Le niveau requis n'est pas très élevé, vous pouvez normalement le faire avec les connnaissances apportées par le cours de <b>NSI de 1ère</b>, bien que d'autres connaissances permettent d'aller plus loin et peut-être plus vite à la solution. Ce défi dure entre 1 et 2 heures.</p>

                <h3>Objectifs</h3>
                <p>Écrire un programme capable de lire un fichier CSV contenant une liste d'événements et de sélectionner des événements de manière aléatoire tout en respectant certaines règles.</p>
                <p>Le language de programmation recommandé est le <b>Python</b>, mais vous pouvez choisir un autre language ou en incorporer plusieurs, à la seule exception que le programme ne doit pas être fait en Javascript ou un autre language utilisé pour le Web.</p>

                <h3>Format du fichier CSV</h3>
                <ul>
                    <li>Les colonnes doivent être les suivantes: <b>ID, Nom, Description, Prerequis, Exclusions.</b></li>
                    <li>Prérequis: C'est une liste d'événements qui doivent se produire avant que l'événement actuel ne puisse avoir lieu. Si un événement n'a pas de conditions préalables, la valeur doit être "0".</li>
                    <li>Exclusions : Liste des événements qui ne peuvent pas se produire après la sélection de cet évènement.</li> 
                    <li>Il est recommandé d'utiliser le point-virgule comme séparateur afin de pouvoir utiliser la virgule dans la description et dans les deux listes.</li>
                    <li><b>LE FICHIER CSV NE DOIT PAS ETRE MODIFIIE PAR LE PROGRAMME.</b></li>
                </ul>

                <h3>Contraintes du fichier CSV</h3>
                <p>Afin de pouvoir être testé correctement, le fichier CSV doit contenir les éléments suivants:</p>
                <ul>
                    <li>Au minimum <b>30 éléments</b></li>
                    <li>Au minimum une chaine de conséquences longue d'au moins <b>7 éléments</b>.</li>
                    <li>Au minimum <b>4 éléments initiaux</b> (n'ayant pas de prérequis d'évènements précédents)</li>
                    <li>Il doit y avoir au moins un éléments ayant <b>4 conséquences possibles</b>, dont strictement 2 s'annulent mutuellement</li>
                </ul>
                
                <h3>Sélection des évènements</h3>
                <p>Ceux-ci doivent êtres choisis aléatoirement dans le fichier CSV, en respectant les règles d'exclusion et de conséquences ("Prérequis"). Un évènement ne peut se produire plusieurs fois.</p>

                <h3>Petits conseils</h3>
                <ul>
                    <li>Faire attention à ce que les événements et leurs conséquences forment une progression logique dans le récit.</li>
                    <li>La créativité en ce qui concerne les événements et le thème narratif sera valorisante (impact minime mais peut départager deux travaux de qualité proches).</li>
                    <li>Une documentation sérieuse et complète expliquant certains points de logique et les types des variables est importante, elle peut être fournie en commentaire dans le code ou sous la forme d'un fichier markdown.</li>
                    <li>Assurez-vous que le programme peut gérer une variété de scénarios, y compris différents nombres d'événements, des dépendances d'événements complexes et diverses branches narratives.</li>
                </ul>

                <h3>Points et vainqueurs</h3>
                <p>Le défi sera évalué sur 20 points afin de déterminer qui aura fourni le meilleur travail. Un cashrpize de 10€ sera à la clef si le nombre de participants dépasse les 10 (ce prix ne pourra être remporté que par des élèves de Duruy). <br/>Voici la répartition des points</p>
                <ul>
                    <li>Respect des consignes: 5 points</li>
                    <li>Ingéniosité/beauté de la solution: 10 points</li>
                    <li>Propreté du code: 5 points</li>
                </ul>

                <h3>Bonus (3 points)</h3>
                <p>vous recevrez un bonus de 3 points si vous parvenez à ajouter à votre programme la possibilité que le "joueur" (celui qui lance le programme) puisse effectuer des choix à la suite d'un évènement afin d'influencer la probabilité de chaque conséquence.<br/>Attention, ce défi est plutôt long et sera évalué sévèrement quand à l'attribution des points bonus.</p>
                

                <h3>Fin du défi et mode de rendu</h3>
                <p>Les solutions au défi ne seront plus acceptées à partir du mardi 23 avril à 20h. Le rendu peut se faire sous forme de fichier zip envoyé à l'adresse <a href='mailto:informatiqueVDuruy+défi@gmail.com' target="_blank">informatiqueVDuruy+défi@gmail.com</a>, ou comme lien vers un dépot GitHb (solution préférée). En cas de question, rejoignez notre discord dont le lien est situé ci-desous.</p>
            </section>
        </main>
    );
}
    
export default Home;
