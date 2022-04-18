import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [ 'i', 'l', 'l', 'i', 'a', 'm', ' ', 'L', 'u', 'r', 'a', 'r', 'e' ]
  const jobArray = [
      'I`m',
      ' ',
      'a', 
      ' ',       
      'W',
      'e',
      'b',
      ' ',
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
       <div className="container home-page">
            <div className="text-zone">
                <h1><span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _12`}></span> 
                <span className={`${letterClass} _13`}>T</span> 
                <span className={`${letterClass} _14`}>h</span> 
                <span className={`${letterClass} _15`}>e</span> 
                <span className={`${letterClass} _16`}>r</span> 
                <span className={`${letterClass} _17`}>e!</span><br />
                <span className={`${letterClass} _18`}>I'm </span><br />
                 
                <span className="span"> W</span><AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Full Stack PHP Developer / React Developer / React Native Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <h3>
                <h2>Skills</h2>
                - HTML5 & CSS3 & JavaScript || BootStrap & Jquery <br />
                - Core PHP & MySQL & Java || React.js || React Native 
                </h3>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
  )
}

export default Home
