import './App.css'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MyProject from './components/MyProject'
import MySkill from './components/MySkill'
import ToolsUse from './components/ToolsUse'


export default function App() {
  return (
    <div>
    <NavBar />
    <AboutMe />

    <MySkill />
    <ToolsUse />

    <MyProject />
    <Footer />
    </div>
  )
}