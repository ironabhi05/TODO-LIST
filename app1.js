let abtn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

abtn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let dlbtn = document.createElement("button");
    dlbtn.style.marginLeft = "10px"
    dlbtn.innerText = "delete";
    ul.appendChild(item);
    dlbtn,this.classList.add("delete");
    item.appendChild(dlbtn);
    inp.value = "";
    alert("Task Added");
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        alert("Are You Sure To want delete a Task...");
    }
});

// let dlbtns =document.querySelectorAll(".dlbtn");
// for (dlbtn of dlbtns){
//     dlbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
