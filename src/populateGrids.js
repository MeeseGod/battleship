function createDivs(){
    for(let i = 0; i < 64; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `player1GridSquare${i}`);
        document.getElementById('player1Gameboard').appendChild(newDiv);
    }

    for(let i = 0; i < 64; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `player2GridSquare${i}`);
        document.getElementById('player2Gameboard').appendChild(newDiv);
    }
}

module.exports = createDivs