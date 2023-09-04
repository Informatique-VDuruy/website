import React from 'react';
import './../../assets/css/pages/home/planning.css'
import SeancesList from '../events/events_list';

function Planning() {
    return (
        <section id='planning' className="planning">
            <div className='planning-content'>
                <div className='previous-planning'>
                    <h2>Séances précédentes</h2>
                </div>
                <div className='upcomming-planning'>
                    <h2>Séances à venir</h2>
                    <SeancesList />
                </div>
            </div>
        </section>
        );
    }

export default Planning;
    