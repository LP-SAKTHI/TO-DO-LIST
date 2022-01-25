const inputField = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const clearBtn = document.querySelector(".footer button")
const todoList = document.querySelector(".todolist");
const pendingTask = document.querySelector(".footer .pendingtasks")

console.log(inputField)
console.log(addBtn)
console.log(clearBtn)
console.log(todoList)


inputField.onkeyup = () => {

    let userEnteredValue = inputField.value;
    if(userEnteredValue.trim() != 0)
    {
        addBtn.classList.add("active")
    }
    else{
        addBtn.classList.remove("active")
    }
}

showTasks();

addBtn.onclick = () =>{
    let userEnteredValue = inputField.value;
    let storagevalue = localStorage.getItem("new todo")

        if(storagevalue == null)
        {
            listArray =[];
        }
        else{
            listArray = JSON.parse(storagevalue)
        }
    listArray.push(userEnteredValue);
    localStorage.setItem("new todo" , JSON.stringify(listArray));
    showTasks()
    addBtn.classList.remove("active")
}

function showTasks()
{
    let storagevalue = localStorage.getItem("new todo")
    if(storagevalue == null)
        {
            listArray =[];
        }
        else{
            listArray = JSON.parse(storagevalue)
        }
    
    pendingTask.innerText = listArray.length;

        if(listArray.length > 0)
        {
            clearBtn.classList.add("active")
        }
        else{
            clearBtn.classList.remove("active")
        }

    let newLi = "";
    
    listArray.forEach((element,index) => {
        newLi += `<li>${element}<span class = "icon" onclick = "deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
        
    });
    todoList.innerHTML = newLi;
        inputField.value = ""
    
}

function deleteTask(index)
{
    let Storagevalue = localStorage.getItem("new todo");
    listArray = JSON.parse(Storagevalue);
    listArray.splice(index ,1);
    localStorage.setItem("new todo" , JSON.stringify(listArray))
    showTasks();
    
}

clearBtn.onclick = () =>
{
    listArray = [];
    localStorage.setItem("new todo" ,JSON.stringify(listArray));
    showTasks();
}