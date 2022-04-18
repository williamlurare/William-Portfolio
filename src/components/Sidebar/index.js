import './index.scss'
import LogoS from '../../assets/images/W.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        </Link>
        <nav>
            <NavLink exact='true' 
            activeclassname="active" 
            className="home-link" 
            to='/'>
                <FontAwesomeIcon icon={faHome} color="pink" />
            </NavLink>
            <NavLink exact='true' 
            activeclassname="active" 
            className="about-link" 
            to='/about'>
                <FontAwesomeIcon icon={faUser} color="pink" />
            </NavLink>
            <NavLink exact='true' 
            activeclassname="active" 
            className="contact-link" 
            to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="pink" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://www.linkedin.com/in/william-lurare-44603018b/'>
                    <FontAwesomeIcon icon={faLinkedin} color="pink" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://github.com/williamlurare/'>
                    <FontAwesomeIcon icon={faGithub} color="pink" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://www.facebook.com/william.lurare/'>
                    <FontAwesomeIcon icon={faFacebook} color="pink" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='nonreferrer' 
                href='https://www.instagram.com/williamlurare/'>
                    <FontAwesomeIcon icon={faInstagram} color="pink" />
                </a>
            </li>
        </ul>
    </div>

  )
}

export default Sidebar
