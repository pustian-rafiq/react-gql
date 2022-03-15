
import './App.css';
import CharacterList from './pages/CharacterList';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Character from './pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharacterList />}></Route>
        <Route exact path='/:id' element={<Character />}></Route>
      </Routes>


    </div>
  );
}

export default App;
