const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements (tasks) {
  let ul = document.querySelector(".tasks__list");

  let taskToDelete = document.querySelectorAll(".task__item");

  for (let i = 0; i < taskToDelete.length; i++) {
    taskToDelete[i].remove();
  }

  for (let i = 0; i < tasks.length; i++) {
    let task = createTaskItem(tasks[i]);
    ul.appendChild(task);
  }

  return ul
}

function createTaskItem (obj) {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let button = document.createElement("button");

  li.className = "task__item";
  div.className = "task-info__container";
  p.textContent = obj.title;
  button.className = "task__button--remove-task";

  if (obj.type.toLowerCase() === "urgente") {
    span.className = "task-type span-urgent";
  } else if (obj.type.toLowerCase() === "importante") {
    span.className = "task-type span-important"  
  } else {
    span.className = "task-type span-normal"
  }

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  button.addEventListener('click', function(event) {
  
    let indexToDelete = tasks.indexOf(obj);
    if (indexToDelete !== -1) {
      tasks.splice(indexToDelete, 1);
    }
    
    renderElements (tasks);
  })

  return li;
}

let addTaskButton = document.querySelector(".form__button--add-task");

  addTaskButton.addEventListener('click', function(event) {
    event.preventDefault();

    let title = document.getElementById("input_title").value;
    let prioritySelect = document.querySelector(".form__input--priority");
    let type = prioritySelect.value;

    let newObj = {
      title: title,
      type: type,
    }
    
    tasks.push(newObj);
    renderElements (tasks);
      }
    ) 
  
    
 renderElements (tasks);
