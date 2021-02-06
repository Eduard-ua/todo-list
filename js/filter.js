let filterSelect = document.querySelector(".filter");
let list = document.querySelector('.todo-list');

filterSelect.onchange = function () {
    let items = list.querySelectorAll("li");
    console.log(this.value);
    for (let i=0; i < items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}