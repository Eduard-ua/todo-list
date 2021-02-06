let olList = document.querySelector('.todo-list');
let checkbox = document.querySelector('.checkbox');


//myarray.reverse()




function sortList(ul){
    var new_ul = ul.cloneNode(false);

    // Add all lis to an array
    var lis = [];
    for(var i = ul.childNodes.length; i--;){
        if(ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }

    // Sort the lis in descending order
    lis.sort();
    /*lis.sort(function(a, b){
       return parseInt(b.childNodes[0].data , 10) - 
              parseInt(a.childNodes[0].data , 10);
    });*/

    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}

checkbox.onchange = function () {
    sortList(document.getElementsByClassName('todo-list')[0]);
}


/*
checkbox.onchange = function () {
    if (checkbox.checked) {
        console.log("checkbox");

    } else {
        console.log("checbrubrubrukbox");
    }
}
*/
