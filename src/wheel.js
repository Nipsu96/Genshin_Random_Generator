import React from "react";
import './wheel.css'

class Wheel extends React.Component {

    state = {
        name: "circle"
    }

    startRotation = () => {
        this.setState({
            name: "circle start-rotate"
        })
        setTimeout(() => {
            this.setState({
                name: "circle start-rotate stop-rotate"
            })
        }, Math.floor(Math.random() * 6000) + 1000)
    }

    render() {
        return (
            <div >
                <div className="arrow"></div>
                <ul className={this.state.name}>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">1</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">2</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">3</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">4</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">5</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">6</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">7</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">8</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">9</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">10</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">11</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">12</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">13</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">14</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">15</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">16</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">17</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">18</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">19</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">20</div>
                    </li>
                    <li>
                        <div className="text" contentEditable="true" spellCheck="false">21</div>
                    </li>
                </ul>
                <button className="spin-button" onClick={this.startRotation}>SPIN</button>
            </div >
        );
    }
};
export default Wheel;