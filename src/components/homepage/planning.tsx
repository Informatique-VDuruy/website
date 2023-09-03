import React from 'react';
import './../../assets/css/components/home/planning.css'

function Planning() {
    // Sample event data
    const planning = [
        {
            name: "introduction",
            title: "Séance d'introduction",
            date: 'A définir',
            description: "Rejoignez nous pour la présentation du club et l'introduction de l'année",
        },
        /*{
            title: '',
            date: '',
            description: '',
        },*/
        // Add more event entries as needed
    ];

    return (
        <section className="planning">
            <div className='planning-content'>
                <div className='previous-planning'>
                    <h2>Séances précédentes</h2>
                </div>
                <div className='upcomming-planning'>
                    <h2>Séances à venir</h2>
                    {planning.map((event, index) => (
                        <div className='event-box'>
                            <a href={"/pages/sceances/" + event.name}>
                                <h3>{event.title}</h3>
                                <p>Date: {event.date}</p>
                                <p>{event.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        );
    }

export default Planning;
    