class createGameboard{
    constructor(){
        this.receiveAttack = function(x, y){
            if(x== "Occupied" && y == "Occupied"){
                return true;
            }
            else{
                return false;
            };
        }
    }
}

function newGameboard(){
    return new createGameboard();
}

module.exports = newGameboard;