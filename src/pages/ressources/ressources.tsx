import React from 'react';
import './../../assets/css/pages/ressources/ressources.css'
import GitHub from '../../components/ressources/github';
import Website from '../../components/ressources/site_internet';

function Ressources() {
    return (
        <main>
            <div className='ressources-box'>
                <GitHub />
                <Website />
            </div>
        </main>
    )
}

export default Ressources