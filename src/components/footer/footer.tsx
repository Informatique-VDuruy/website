import './../../assets/css/common/footer.css'
import Contact from './contact';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer-box'>
                <p>© 2023 Copyright - Club d'informatique de Victor Duruy - All rights reserved</p>
            </div>
            <Contact />
        </footer>
    );
}

export default Footer;