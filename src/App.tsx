import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Menu from './components/Menu/Menu';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import TopBar from './components/TopBar/TopBar';
import Works from './components/Works/Works';
import './app.scss';
import { useState } from 'react';

function App(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} onHamburgerClick={() => setMenuOpen(!menuOpen)} />
      <Menu menuOpen={menuOpen} onMenuItemClick={() => setMenuOpen(false)} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
