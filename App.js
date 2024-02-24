import './App.css';
import Banner from './components/Banner.js';
import { NAVbar } from "./components/NAVbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div>
      <NAVbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
