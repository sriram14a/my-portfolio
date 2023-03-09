import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './components/contact';
import { Home } from './components/home';
import { Projects } from './components/projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
