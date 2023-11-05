import './App.css';
import './boss.css';
import { useState, useEffect } from 'react';
import { bossList, weekly } from './bosses';

function BossChosen(props) {

    useEffect(() => {
        let available = document.getElementById("info")
        if (available) {
            console.log("täällä")
            const clone = props.chosenBoss.cloneNode(true);
            available.appendChild(clone);
        }
    }, [props.chosenBoss])

    return (
        <div >
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <h2>Valittu bossi:</h2>
                    <div id="info">

                    </div>
                </div>
            </div>
        </div>

    );
}

function BossGenerator() {
    const [bosslist, setBosslist] = useState(bossList);
    const [isFinished, setIsFinished] = useState(false);
    const [activeBoss, setActiveBoss] = useState({});

    const fetchData = async (index) => {
        let newList = []
        var checkBox = document.getElementById("weeklybossses");
        if (checkBox.checked === true) {
            newList = bossList.concat(weekly).sort((a, b) => {
                const nameA = a.bossName.toUpperCase(); // ignore upper and lowercase
                const nameB = b.bossName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        } else {
            newList = bossList.sort((a, b) => {
                const nameA = a.bossName.toUpperCase(); // ignore upper and lowercase
                const nameB = b.bossName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });;
        }
        setBosslist(newList)
    }

    const closeWindow = () => {
        setIsFinished(false);
        let header = document.getElementById("content");
        let boss = header.getElementsByClassName("active");
        boss[0].className = "boss";

    }

    const startGenerator = () => {
        let header = document.getElementById("content");
        let bosses = header.getElementsByClassName("boss");
        let length = bosses.length

        for (let i = 0; i < bosses.length; i++) {
            let current = bosses[Math.floor(Math.random() * bosses.length)];
            (function (i) {
                setTimeout(function () {
                    current.className = current.className.replace("boss", "active");
                    (function (i) {
                        if (i === length - 1) {
                            console.log("current", current)
                            setActiveBoss(current)
                            setIsFinished(true)
                        } else {
                            setTimeout(function () {
                                current.className = current.className.replace("active", "boss");
                            }, 300);
                        }

                    })(i);
                }, 300 * i);
            })(i);
        }
    }

    return (
        <div className='bossBackground '>
            <div id="content" >
                {bosslist.map((boss, index) =>
                    <div className="boss" key={index}>
                        <img src={bosslist[index].url} alt={bosslist[index].url} /><br />
                        {boss.bossName}
                    </div>
                )}
            </div>
            <div className="buttonHolder">
                <input type="checkbox" id="weeklybossses" name="weeklybosses" value="yesWeeekly" onChange={fetchData}></input>
                <label htmlFor="weeklybosses"> Add weekly bosses</label><br></br>
                <button onClick={startGenerator}>Generate random character</button><br />
            </div>
            {isFinished && <BossChosen
                chosenBoss={activeBoss}
                handleClose={closeWindow}
            />}
        </div >

    );
};
export default BossGenerator