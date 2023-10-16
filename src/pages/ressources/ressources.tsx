import React from 'react';
import './../../assets/css/pages/ressources/ressources.css'
import GitHub from '../../components/ressources/github';
import Website from '../../components/ressources/site_internet';
import Reseaux from '../../components/ressources/reseaux';

function Ressources() {
    return (
        <main>
            <div className='ressources-box'>
                <GitHub />
                <Website />
                <Reseaux />
            </div>
        </main>
    )
}

export default Ressources