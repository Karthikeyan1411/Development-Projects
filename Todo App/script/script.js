// alert("Web Development")
// DOM [Document Object Model] Features

// Syntax of JS function
// function name(){
// }

function addTodo() {
    var todoInput = document.getElementById('todo-input');  //get element by ID from html
    var todoText = todoInput.value.trim(); // remove unwanted spaces

    if(todoText !== ""){
        var li = document.createElement("li"); // use to create list of items
        li.textContent = todoText; //remove unwanted spaces for new items

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn"); // class for delete button
        deleteButton.onclick = function(){
            li.remove();
        }

        li.appendChild(deleteButton);

        document.getElementById('todo-list').appendChild(li);

        todoInput.value = "";
    }
    else{
        alert("No Todo Given");
    }
}