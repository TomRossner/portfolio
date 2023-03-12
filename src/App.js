//Components imports
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';

// Styles imports
import './styles/main.styles.scss';
import './styles/navbar.styles.scss';
import './styles/footer.styles.scss';
import './styles/projects.styles.scss';

function App() {
  return (
    <div className='overlay'>
      <div className='main'>
        <NavBar/>
        <div className='dark-theme-font-color'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>
        </div>
        </div>
    </div>
  );
}

export default App;