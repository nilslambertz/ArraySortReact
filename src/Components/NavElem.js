import React from 'react';
import '../css/NavBar.css';

function NavElem({title, algoNumber, setAlgorithm, currentAlgorithm}) {
    function algoChange() {
        setAlgorithm(algoNumber)
    }

    return (
        <div className={"navElem" + (parseInt(algoNumber) === parseInt(currentAlgorithm) ? " active" : "")} onClick={algoChange}>
            {title}
        </div>
    );
}

export default NavElem;