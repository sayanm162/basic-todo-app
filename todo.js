let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let addBtn = document.querySelector('button');


addBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    let taskItem = document.createElement('li');
    taskItem.innerText = inp.value + " ";
    ul.appendChild(taskItem);
    inp.value="";


    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    taskItem.appendChild(delBtn);
    
});

// let dels = document.querySelectorAll(".delete");
// for(item of dels) {
//     item.addEventListener("click", function() {
//         let par = this.parentElement;
//         //console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
} )