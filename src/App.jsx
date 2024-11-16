import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MyProject from './components/MyProject'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import SkillAndToolsVer from './components/SkillAndTools/SkillAndToolsVer'




export default function App() {
  return (
    <div>
    <NavBar />
    <Intro />
    <AboutMe />
    <SkillAndToolsVer />
    <MyProject />
    <Footer />
    </div>
  )
}