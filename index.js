const increasebt = document.getElementById("increasebt");
const reset = document.getElementById("reset");
const salavatcounts = document.getElementById("salavatcounts");
let count = 0;

increasebt.onclick = function(){
    count++;
    salavatcounts.textContent = count;
}
reset.onclick = function(){
    count = 0;
    salavatcounts.textContent = count;
    window.alert("NEVER STOP SENDING SALAVATS!!!")
}

alert("koon")