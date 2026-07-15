const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    //if input box is blank
    if(inputBox.value === ''){
        alert("You must write something");

    }
    else{
        //creating a html element with the tage name li and it is stored into the variable li
        let li = document.createElement("li");
        //text we will add in the input field that will be added in this li
        li.innerHTML = inputBox.value;
        //li should be displayed in this list container
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();