import {TopBar} from './components/navbar/TopBar'
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/pages/Navbar.js';
import Footer from './components/pages/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <TopBar/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
