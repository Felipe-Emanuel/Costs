import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects';
import NewProjects from './components/pages/NewProjects'
import Project from './components/pages/project';



function App() {
  return (
    <Router>
      <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Company' element={<Company />} />
            <Route path='/NewProjects' element={<NewProjects />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  )
}

export default App;
