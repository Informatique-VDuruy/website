import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    name: string
}

interface Event {
    name: string
    title: string
    date: string
    description: string
}

function EventBox(props: Props) {
    // Sample event data
    const planning: { [id: string]: Event; }= {
        "introduction": {
            name: "introduction",
            title: "Séance d'introduction",
            date: '03/10/2023',
            description: "Rejoignez nous pour la présentation du club et l'introduction de l'année",
        },
        // Add more event entries as needed
    };

    const evenement = planning[props.name]
    return (
        <div className='event-box'>
            <Link to={'/website/seances/' + evenement.name + '#seance-table'}>
                <h3>{evenement.title}</h3>
                <p>Date: {evenement.date}</p>
                <p>{evenement.description}</p>
            </Link>
        </div>
    )
}

export default EventBox