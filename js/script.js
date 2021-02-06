function onPageLoaded() {
let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
/* Переменные для уровня срочности */
let rangeSetting = document.querySelector('.range-setting');
let todoRange = document.querySelector('.todo-range');
/* Переменные для кнопок сохранить и очистить */
let saveButton = document.querySelector("button.save"); 
let clearButton = document.querySelector("button.clear"); 


/* Функция для определение уровня срочности */
rangeSetting.oninput = function () {
   todoRange.textContent = rangeSetting.value;
};

form.onsubmit = function (evt) {
   let deleteBtn = document.createElement("span");
   deleteBtn.classList.add("todo-trash");
   let icon = document.createElement("i");
   icon.classList.add("fas", "fa-trash-alt");
   deleteBtn.appendChild(icon);

   let li = document.createElement('li');
   li.classList.add("all-todo", "unchecked");
   li.textContent = rangeSetting.value + " " + "-" + " " + input.value;
   list.appendChild(li).append(deleteBtn);
   input.value = '';
   evt.preventDefault();

   listenDeleteTodo(deleteBtn);
};

/* Зачеркиваем ввыполненое событие */
function onClickTodo(event) {
   if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      event.target.classList.toggle("unchecked");
      event.target.classList.toggle("todos-checked");
   }
}


function listenDeleteTodo(element) { //когда пункт to-do создаётся, его иконка корзины получает способность удалять новый пункт по нажатию
   element.addEventListener("click", (event) => {
      element.parentElement.remove();
      event.stopPropagation();
   });
};
/*Находим все кнопки удаления и даем им жизнь*/
let deleteButtons = document.querySelectorAll("span.todo-trash");
for (let button of deleteButtons) {
   listenDeleteTodo(button);
}

/* Загружаем список дел при повторной загрузке страницы */
function loadTodos() {
   let data = localStorage.getItem("todo-list");
   if (data) {
      list.innerHTML = data;
   }
   let deleteButtons = document.querySelectorAll("span.todo-trash");
   for (let button of deleteButtons) {
      listenDeleteTodo(button);
   }
}


/* Прослушиватели событый для кнопок*/
saveButton.addEventListener("click", () => {
   localStorage.setItem("todo-list", list.innerHTML);
});
clearButton.addEventListener("click", () => {
   list.innerHTML = "";
   localStorage.removeItem('todo-list', list.innerHTML);
});


list.addEventListener("click", onClickTodo); // вызываем функцию зачеркивания
loadTodos();

}



document.addEventListener("DOMContentLoaded", onPageLoaded);



/*
1. При каждом клике у переключателя приоритета (переменная priority) переключается класс is-important. Если класс есть, то приоритет высокий, если класса нет, то обычный.
2. Если приоритет высокий, то текстовое содержимое у переключателя — 'Важная задача'. Если приоритет обычный, то текстовое содержимое — 'Обычная задача'.
3. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
4. Текст задачи берётся из поля ввода (переменная input).
5. Если выставлен высокий приоритет, то новой задаче добавляется класс is-important.
6. Бонусное задание: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Кекса устроят оба варианта.
*/