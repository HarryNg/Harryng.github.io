var activeTask = 10;
let arrTasks = ["bkk-b0-btn","bkk-b1-btn","bkk-b2-btn","bkk-b3-btn"];
const addActiveBkk = (btnNum,divNum) => {
    document.getElementById(btnNum).classList.add("booking-activ");
    document.getElementById(divNum).classList.add("booking-activ-div");
}
const removeActiveBkk = (btnNum,divNum) => {
    document.getElementById(btnNum).classList.remove("booking-activ");
    document.getElementById(divNum).classList.remove("booking-activ-div");
}

function checkActivBkk (btnNum,divNum,tNum) {
    if( !document.getElementById(btnNum).classList.contains("booking-activ") ){
        addActiveBkk(btnNum,divNum);
        if(activeTask<4){
            removeActiveBkk(arrTasks[activeTask],`bkk-b${activeTask}-tp`);
            displayNone(activeTask);
        }
        
        displayIt(tNum);
        activeTask = tNum;
        console.log(arrTasks[activeTask]);
        console.log(`bkk-b${activeTask}-tp`);
        console.log(`result${tNum}`);
    }
}
function displayIt(tID){
    document.getElementById(`result${tID}`).style.display="block";
}
function displayNone(tID){
    document.getElementById(`result${tID}`).style.display="none";
}