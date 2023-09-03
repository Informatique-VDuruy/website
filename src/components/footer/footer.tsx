import React from 'react';
import './../../assets/css/common/footer.css'
import Contact from './contact';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-box'>
                <p>© 2023 Copyright - Club d'informatique de Victor Duruy - All rights reserved</p>
            </div>
            <div className='footer-box-2'></div>
            <div className='footer-box-3'></div>
            <div className='footer-box-4'></div>
            <Contact />
        </footer>
    );
}

export default Footer;