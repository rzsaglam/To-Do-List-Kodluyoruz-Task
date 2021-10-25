let task = document.querySelector('#task')
let saveButton = document.querySelector('#save')

saveButton.addEventListener('click', save)
task.addEventListener('click', clear)

function save(){
  // TASK SAVE TO LOCALSTORAGE
  let taskInput = document.querySelector('#taskInput').value
  key = 'task'
  for(i=0; i<localStorage.length; i++){
    key = key + 1
  }
  newTask = localStorage.setItem(key, taskInput)
  getTask = localStorage.getItem(key)
  console.log(getTask)

  // PRINT LOCALSTORAGE TO LIST
  let taskList = document.querySelector('#taskList')
  let li = document.createElement('li')
  li.className = 'list-group-item'
  li.id = key
  li.style = 'background-color: #C34A36;'
  li.addEventListener('click', liner)
  let btn = document.createElement('span')
  btn.className = 'btn btn-dark m-1'
  btn.innerText = 'x'
  li.innerHTML = getTask
  li.appendChild(btn)
  btn.addEventListener('click', clear)
  taskList.appendChild(li)
}


function clear(){
  // // REMOVE FROM LIST
  let task = this.parentElement
  taskList.removeChild(task)
  // REMOVE FROM LOCALSTORAGE
  let key = this.id
  deleteTask = localStorage.removeItem(key)
}

function liner(){
  // ALTERNATIVE
  let task = this
  task.style.textDecoration = 'line-through'
}







