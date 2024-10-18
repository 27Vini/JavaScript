import Btn from './components/Btn'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Footer from './components/Footer'

function App() {
  return(
    <div>
      <Header name='Peter'/>
      <Nav />
      <Intro1 />
      <Intro2 />
      <Btn />
      <Footer />
    </div>
  )
}

export default App;
