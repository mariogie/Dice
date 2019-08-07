/* 
 * Dice
 * with Java-Script
 * 
 * develloped by M. Gießler
 * 
 * Version 1.01 (May, 25th)
 * 
 */

document.addEventListener("DOMContentLoaded", function () {

    throwTheDice();

});

function throwTheDice() {
    // rollEm    
    init();
    throwRnd();
    printDot(throwDice);
}

function init() {
    //make all Dot's invisible
    for(i=1;i<4;i++){
        for(j=0;j<3;j++){
            var dot=(i*10)+j;
            document.getElementById('dot'+dot).style.visibility = "hidden";
        }
    }
}

function throwRnd() {
    // get some random dice throw
    for (i = 0; i < 20; i++) {
        throwDice = Math.floor(Math.random() * 6) + 1;
    }
    return throwDice;
}


function printDot(throwDice) {
    // Build Output
    
    if(throwDice===1 || throwDice===3 || throwDice===5){
        document.getElementById('dot21').style.visibility = "visible";
    }
    if(throwDice===2 || throwDice===4 || throwDice===5 || throwDice===6){
        document.getElementById('dot10').style.visibility = "visible";
        document.getElementById('dot32').style.visibility = "visible";
    }
    if( throwDice===3 ||throwDice===4 || throwDice===5 || throwDice===6){
        document.getElementById('dot12').style.visibility = "visible";
        document.getElementById('dot30').style.visibility = "visible";
    }
    if(throwDice===6){
        document.getElementById('dot20').style.visibility = "visible";
        document.getElementById('dot22').style.visibility = "visible";
    }
}
