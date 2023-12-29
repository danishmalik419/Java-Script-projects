let input = document.getElementById("inputs");
let text = document.querySelector(".text");


function addfunction(){
    if(input.value == ""){
        alert("Please enter a task");
    }else{
        let element = document.createElement("ul");
        element.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(element);
        input.value = "";
        element.querySelector("i").addEventListener("click",remove);
        function remove(){
            element.remove();
        }
    }
}