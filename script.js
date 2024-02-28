let count = 0;
function changeCounter(num){
    count += num;
    document.querySelector("#count").innerText = count;
}