import './App.css';
import { useState } from 'react';
import { characterList } from './characters';
import BossGenerator from './BossGenerator';
import CharacterGenerator from './CharacterGenerator';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Genshin_Random_Generator" element={<Home />} />
        <Route path="/BossGenerator" element={<BossGenerator />} />
        <Route path="/CharacterGenerator" element={<CharacterGenerator />} />
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

        <Link to="/CharacterGenerator"><button className='homebutton'>Go wild</button></Link>
        <Link to="/BossGenerator"><button >Bosses</button></Link>
      </main>
    </>
  );
}

export default App;
