import React from 'react'
import EventBox from './eventsbox'
import './../../assets/css/components/seances/seances_list.css'

function SeancesList() {
    const seances = ["introduction"]
    return <div className='seances-list'>
        {seances.map(
            (seance, index) => (
                <EventBox name={seance} />
            )
        )}
    </div>
}

export default SeancesList