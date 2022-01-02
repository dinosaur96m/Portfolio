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
    description: "Target ractice is a simple yet satisfying archery game. The browser-based challenge allows two players to take 30 second turns as they use their bow and arrow to try and hit moving targets that are falling from the sky. Using the 'Q' and 'E' keys, players rotate the bow on a 180 degreee axis and use the spacebar to fire at the targets. Players earn one point for every bullseye they hit, and the first to fifteen points wins.",
    stack: 'HTML, CSS, Vanilla JavaScript'
  }

  const projectTwo = {
    name: 'Thrifted',
    imgUrls: ['/images/thrifted1.png', '/images/thrifted2.png'],
    description: "Thrifted is a plus-sized focused platform that enables users to buy and sell second-hand clothing. In this full stack mock up, users create an account to browse available items, and can sell their own by uploading an image and providing a few details. Once uploaded for sale, these items can be edited by their seller. Users can click on items' thumbnails for a closer look, and are able to add items to their cart from this view or the thumbnail. Items can only be added to one cart at a time, so unavailable items area not rendered on the 'shop' page.",
    stack: 'EJS, PotgresSQL, Express.JS, Node.JS'
  }
  const projectThree = {
    name: 'Helping Hand',
    imgUrls: ['/images/hh1.png', '/images/hh2.png'],
    description: 'Our team built Helping Hand to bridge the gap between communities and resources. Streamlining the communication within communities about where there and needs and where there are resources to meet them. Users can post their unwanted items for the benefit of others in their community. These items are searchable by category, description, and zipcode. Items can be added to a favorites list and users can edit listings that they created. The integration of React Boostrap means that all of the views are responsive and look great on mobile devices.',
    stack: 'MongoDB, Express, React, Node.JS, Mongoose, Cloudinary, Axios, '
  }


  return (
    <div className="App">
      <About/>
      <div className="rightPanel">
        <Header/>
        <hr/>
        <p className="intro">A full stack web developer with a background in philosophy and visual merchandising. I bring a passion for logic and beauty to every challenge I encounter. I can quickly adapt to new environments and frameworks, making me eager to build on my foundational skills in the MERN stack, PostgresSQL, Vanilla JavaScript, and Python.</p>
        <hr/>
        <Project project={projectOne}/>
        <hr/>
        <Project project={projectTwo}/>
        <hr/>
        <Project project={projectThree}/>
        <hr/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
