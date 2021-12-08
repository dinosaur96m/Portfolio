import logo from './logo.svg'
import './App.css'
import About from './components/About.js'
import Header from './components/Header.js'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <About/>
      <div className="rightPanel">
        <Header/>
        <Project projName="Project One"/>
        <Project projName="Project Two"/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
