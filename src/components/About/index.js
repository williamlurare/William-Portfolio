import { useEffect, useState } from 'react'
import {
  faBootstrap, 
  faGit, 
  faGitAlt, 
  faHtml5, 
  faJava, 
  faJsSquare, 
  faPhp, 
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['A','b','o','u','t',' ','m','e']}
          idx={15}/>
        </h1>

        <p>My name is William and I am a Web Developer.
           My passion has been developing websites and applications. 
           Most of my experience lies in Web development and l completed studying Full-stack development. 
           I’m able to work with front and back-end but if I have to choose, back-end is my strongest point. <br /><br />
        
           I have 5 years experience with Web Development(Languages like HTML, CSS, PHP, JavaScript), 
           and a good understanding of Java, ReactJS and React Native.
           I would say I'm confident with my skills because I'm a problem solver and I'm able to work well under pressure
           I don't shy away from challenges and I'm eager to learn, I don't feel satisfy being too relaxed in my comfort zone,
           I like to expand and widen my knowledge and skills 
          <br /><br />
          You will find high-level summaries of my job duties/education history in my resume. 
          If you want to see some of the projects that I have worked on on my spare time, 
          see my GitHub profile which is linked to the Sidebar, if you want to view my CV, click<a 
                target="_blank" 
                rel='nonreferrer' 
                href='https://drive.google.com/file/d/1lUSRPOWxSSoAhfcDr0V-cu9TYGUSYxWi/view?usp=sharing' style={{color: 'yellow'}}> here</a></p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={faJava} color="orange" />
        </div>
        <div className='face2'>
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={faBootstrap} color="#8A2BE2" />
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={faPhp} color="#4B0082" />
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' /> 
    </>
  )
}

export default About
