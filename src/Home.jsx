import './App.css'
import NavBar from "./components/NavBar"
import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import SkillAndToolsVer from "./components/SkillAndTools/SkillAndToolsVer"
import MyProject from "./components/MyProject"
import Footer from "./components/Footer"


export default function Home() {
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
