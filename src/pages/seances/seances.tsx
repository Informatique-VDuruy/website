import React from 'react';
import './../../assets/css/pages/seances/seances.css'
import { Outlet } from 'react-router-dom';
import SeancesList from '../../components/events/events_list';

function Seances() {
    return (
        <main>
        <section className='seances-table' id='seance-list'>
            <SeancesList />
        </section>
        <Outlet />
        </main>
    )
}

export default Seances