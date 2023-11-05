import './App.css';
import { useState } from 'react';
import { characterList } from './characters';


function CharacterGenerator() {
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
        <div className="character-content" >
            <h2>Character is: {num === null ? characterName : characterList[num].characterName}</h2>
            <button className='' onClick={handleClick}>Generate random character</button>
            {
                show ? <img id="CharacterPic" src={characterList[num].url} alt={characterList[num].characterName} /> : <p></p>
            }
        </div >
    );
};
export default CharacterGenerator;