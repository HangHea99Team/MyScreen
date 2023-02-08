let form=document.querySelector(".name_box");
let inputName=form.querySelector("input"); //이름 입력받은거
const outputName=document.querySelector(".name_showing"); //저장된 애가 출력 될거


function saveLocal(name){
    localStorage.setItem("currentUser",name);
}

function saveOutput(text){
    outputName.innerHTML=`${text}`;
    form.classList.remove('showing');
    outputName.classList.add("showing");
}
function saveName(event){
    event.preventDefault();
    const currentUser=inputName.value;
    saveLocal(currentUser);
    saveOutput(currentUser);
}

function askName(){
    form.classList.add("showing");
    form.addEventListener("submit",saveName);
}

function loadName(){
    const currentValue=localStorage.getItem("currentUser");
    if (currentValue===null){
        askName();
    }
    else
    {
        saveOutput(currentValue);
    }

}

function init() {
    loadName();
}
init();