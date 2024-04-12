import './../../assets/css/pages/home/planning.css'

function Planning() {
    return (
        <section id='planning' className="planning">
            <div className='planning-content'>
                <div className='Sequence'>
                    <h2>Web developpement</h2>
                    <h3>Du 17 octobre 2023 au 9 janvier 2024</h3>
                    <p>Au cours de cette première séquence, nous allons aborder les bases du développement de sites internet, et découvrir des outils permettant de nous organiser dans le développement. Nous finirons cette séquence par des projets de groupe afin d'aborder le travail de groupe avec des outils tels que Git et GitHub</p>
                </div>
                <div className='Sequence'>
                    <h2>Cybersécurité</h2>
                    <h3>Du 16 janvier 2024 au 2 avril 2024</h3>
                    <p>Au cours de cette deuxième séquence, nous allons aborder les bases de la cybersécurité, et étudier les principes de la recherche de failles de sécurité. Nous étudirons également le fonctions des réseaux et les fondements de gnu-linux.</p>
                </div>
                <div className='Sequence'>
                    <h2>Game developpement</h2>
                    <h3>Du 23 avril 2024 au mardi 4 juin 2024</h3>
                    <p>Au cours de cette séquence, nous allons abroder les bases du développement de jeux vidéos au travers du moteur de jeu Godot Engine.</p>
                </div>
            </div>
        </section>
        );
    }

export default Planning;
    