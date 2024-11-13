import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MyProject from './components/MyProject'
import SkillandTools from './components/SkillAndTools/SkillAndTools'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'


export default function App() {
  return (
    <div>
    <NavBar />
    <Intro />
    <AboutMe />
    <SkillandTools />
    <MyProject />
    <Footer />
    </div>
  )
}