// const boxes = ...lightBox

// for (let i = 0; i < boxes.length; i++){
//     const boxes = boxes[i];
//     boxes.onclick = () => {

//     }
// }


const container = document.getElementById("container")
let currentPlayer = true
let turn = 0;
let i = 0;
const playerName = document.getElementById('player-name')
const para = document.getElementById('para')




container.onclick = (e) => {
    if (e.target != container && e.target.innerHTML == "") {
        turn++
        const box = e.target
        if (currentPlayer == true){
            box.innerHTML = "X";
        }
        else {box.innerHTML = "O";}
    }
    checkWinner()
    currentPlayer = !currentPlayer
    changeName ()
}

function checkWinner() { 
    const boxes = document.querySelectorAll('.box')
    const combos = [
        "012",
        "345",
        "678",
        "147",
        "258",
        "048",
        "246"]

    const combo = combos[i]
    const x = combo[0]
    const y = combo[1]
    const z = combo[2]  
        for(let i = 0; i < combos.length; i++){
            if (boxes[x].innerHTML == boxes[y].innerHTML == boxes[z].innerHTML == combo && boxes[x].innerHTML !=""){
                setTimeout(() => {alert("X is the winner!")},1000)
                container.onclick = undefined
                return undefined
            }
            // else if (boxes[x].innerHTML == boxes[y].innerHTML == boxes[y].innerHTML == boxes[z].innerHTML == "O" && boxes[x].innerHTML !=""){
            //     setTimeout(() => {para.innerText = "O is the winner!"},1000)
            // }
        }   
    if (turn == 9){
        setTimeout(() => {alert(`It's a tie!`)},1000)
    }
}

function changeName() {
    if (currentPlayer == true) {
        playerName.innerText = "X"
        return undefined
    }
    else {playerName.innerText = "O"
    return undefined}
}

// function alertWinner() {
//     if(boxes[x,y,z].innerHTML == "X"){
        
//             }
//     else if (boxes[x,y,z].innerHTML == "O"){ 
//         para.innerText = "O is the winner!"
//             }
// }