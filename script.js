let body = document.querySelector("body");
let turn = "X";
let theme = "light";
let themebtn = document.querySelector("#theme");
let boxes = document.querySelectorAll(".box");
let winBox = document.querySelector(".winner-msg");
let game = document.querySelector(".game");
let head = document.querySelector("header");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("button");
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

themebtn.onclick = () =>{
    if (theme === "light"){
        theme = "dark";
        body.setAttribute("class","dark");
    } else{
        theme = "light";
        body.setAttribute("class","light");
    }
}

resetbtn.onclick = () =>{
    for (let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}


newbtn.onclick = () =>{
    for (let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    winBox.classList.remove("flex-box");
    head.classList.remove("hide");
    game.classList.remove("hide");
    body.childNodes[7].classList.remove("hide");
}

const checkforwin = () =>{
    for (let pos of winningCombinations){
        let val1 = boxes[pos[0]].innerText;
        let val2 = boxes[pos[1]].innerText;
        let val3 = boxes[pos[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2 && val1 === val3){
                document.querySelector("h2").innerText = `${turn} WINS`;
                winBox.classList.add("flex-box");
                head.classList.add("hide");
                game.classList.add("hide");
                body.childNodes[7].classList.add("hide");
                console.log("1");
                console.log("2");
            }
        }
    }

}

for (let box of boxes){
    box.addEventListener('click', () =>{
        box.innerText = turn;
        box.disabled = true;
        if (turn === "X"){
            checkforwin();
            turn = "O";
        } else{
            checkforwin();
            turn = "X";
        }
    })
}

