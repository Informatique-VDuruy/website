import React from 'react';
import { Link } from 'react-router-dom';
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
        <section id='planning' className="planning">
            <div className='planning-content'>
                <div className='previous-planning'>
                    <h2>Séances précédentes</h2>
                </div>
                <div className='upcomming-planning'>
                    <h2>Séances à venir</h2>
                    {planning.map((event, index) => (
                        <div className='event-box'>
                            <Link to={"/website/seances/" + event.name}>
                                <h3>{event.title}</h3>
                                <p>Date: {event.date}</p>
                                <p>{event.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        );
    }

export default Planning;
    