import './App.css';
import { useState } from 'react';
import { characterList } from './characters';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CharacterGenerator" element={<CharacterList />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <main className="FrontPage">
        <h2>Welcome to the Random Character Generator!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/CharacterGenerator"><button className='homebutton'>Go wild</button></Link>
      </nav>
    </>
  );
}

function CharacterList() {
  const [num, setNum] = useState(null);
  const [characterName, setCharacterName] = useState("");
  const [show, setShow] = useState(false);


  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(0, characterList.length - 1));
    fetchCharacter();
    setShow(true)
  };
  const fetchCharacter = () => {
    if (num == null) {

    } else {
      setCharacterName(characterList[num].characterName);
    }

  };

  return (
    <div className="content" >
      <h2>Character is: {num === null ? characterName : characterList[num].characterName}</h2>
      <button onClick={handleClick}>Generate random character</button>
      {
        show ? <img id="CharacterPic" src={characterList[num].url} alt={characterList[num].characterName} /> : <p></p>
      }
    </div >
  );
};
export default App;
