//*******************************************//

let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let toDoList = document.getElementsByTagName("li");

for(let i=0; i < toDoList.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    toDoList[i].append(closeButton);
    toDoList[i].onclick = check;
}

btnDOM.addEventListener('click', addToDo)

function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}


function addToDo() {
 
    if (taskDOM.value.trim() == "")  {
    $(".error").toast("show");
    } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

    liDOM.onclick = check;
    
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");
}
}
