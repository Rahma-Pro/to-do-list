const add=document.getElementById('add-btn')
const inputField=document.getElementById('input-task')
const listToDo=document.querySelector(".list")

document.getElementById("note-btn").addEventListener("click",
function(){
    var motive = document.createElement("div")
    motive.classList.add("notes")
    motive.innerText = document.getElementById("input-note").value
    document.querySelector(".box").appendChild(motive)
    document.getElementById("input-note").value=""
})

add.addEventListener("click",function(){ 
    if(inputField.value==""){
        alert("Please enter a task")
    }
    else{
        var task = document.createElement("li")
        task.innerText = inputField.value
        listToDo.appendChild(task)
        inputField.value=""
    }
        task.addEventListener("click",function(){
        task.style.textDecoration="line-through"   
    })
        task.addEventListener("dblclick",function(){
        task.remove()    
    })
    

})



