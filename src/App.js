import logo from './logo.svg'
import './App.css'
import About from './components/About.js'
import Header from './components/Header.js'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {

  const projectOne = {
    name: 'Target Practice',
    imgUrls: ['/images/targetPractice1.png', '/images/targetPractice2.png'],
    description: 'Target practice is a simple yet satisfying archery game. The browser-based challenge allows two players to take 30 second turns as they use their bow and arrow to try and hit moving targets that are falling from the sky. Players will aim at the targets by rotating their bow on a 180 degreee axis and earn one point for every bullseye they hit.',
    stack: 'HTML, CSS, Vanilla JavaScript'
  }

  const projectTwo = {
    name: 'Thrifted',
    imgUrls: ['/images/thrifted1.png', '/images/thrifted2.png'],
    description: "Thrifted is a plus-sized focused platform that enables users to buy and sell second-hand clothing. In this MVP CRUD version, users create an account to browse available items, and can sell their own by uploading an image and providing a few details. Once uploaded for sale, these items can be edited by their seller. Users can click on items' thumbnails for a closer look, and are able to add items to their cart from this view or the thumbnail. Items can only be added to one cart at a time, so unavailable items area not rendered on the 'shop' page.",
    stack: 'EJS, PotgresSQL, Express.JS, Node.JS'
  }


  return (
    <div className="App">
      <About/>
      <div className="rightPanel">
        <Header/>
        <Project project={projectOne}/>
        <Project project={projectTwo}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
