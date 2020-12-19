

/*function addBox() {
    var temp = document.getElementById("temp").content;
    var copy =document.importNode(temp,true);
    document.getElementById("app").appendChild(copy);
}
function clearBox() {
    document.getElementById("app").innerHTML="";
    
}
document.getElementById("btn").addEventListener("click",addBox);
document.getElementById("btn").addEventListener("dblclick",clearBox);
*/



/*
  const button = document.getElementById("button")
        button.addEventListener("click", function (e) {
            e.preventDefault()
            const input = document.getElementById("input")
            const inputValue = input.value
            input.value = null


            const newElement = document.createElement("div")
            newElement.className = "card"
            const newElementChild = document.createElement("div")
            newElementChild.setAttribute("class", "card-body")
            newElementChild.innerHTML = inputValue
            newElement.appendChild(newElementChild)
            const todoList = document.getElementById("todo-list")
            todoList.appendChild(newElement)
            console.log(newElement)
            console.log(newElementChild)
        })

*/
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="  Today date : "+ m + "/" + d + "/" + y;

function showTask (e){
    e.preventDefault();

    const Task = document.getElementById("inputTask");
    const inputValue = Task.value;
    Task.value=null;

    
    
  
   
    const newElement = document.createElement("div")
            newElement.className = "card"
            newElement.setAttribute("class","input-group mb-3")

            const newElementChild = document.createElement("div")
            newElementChild.setAttribute("class", "card-body")
            newElementChild.setAttribute("class","input-group-prepend")
            
            const newElementChild2 = document.createElement("div")
            newElementChild2.setAttribute("class", "card-body2")
            newElementChild2.setAttribute("class","input-group-text")
            

          const chek=  document.createElement("input")
          chek.setAttribute("type", "checkbox" ,"aria-label","Checkbox for following text input")
          chek.setAttribute("id","chk")
          newElementChild2.appendChild(chek);


              const InputT =  document.createElement("div")
              InputT.setAttribute( "class" ,"form-control" ,"id","form" )
         
          newElement.appendChild(InputT);
            InputT.innerHTML = inputValue
            newElement.appendChild(newElementChild)
            newElement.appendChild(newElementChild2)
            const todoList = document.getElementById("app")
            todoList.appendChild(newElement)
            console.log(newElement)
            console.log(newElementChild)
           
               /*  InputT.onload=(function(){
                const x =;
                document.getElementById("demo").innerHTML = x;
                console.log(x);
            
                
              });
              */
             
}


// Get the checkbox
/*
const checkBox = document.getElementById("chk");
// Get the output text
const sstate = document.getElementById("demo");
// If the checkbox is checked, display the output text
if (checkBox.checked == true){
console.log("true")} else {
 console.log("false")
}*/

function clearBox() {
    document.getElementById("app").innerHTML="";
    
}
/*
function checke(){
    const chekBox =document.getElementsByClassName("chk");
    if(chekBox.checked == true){
        console.log("truuu");
    }else{
        console.log("no");

    }

}*/

document.getElementById("submitTask").addEventListener("click",showTask);
document.getElementById("submitTaskDone").addEventListener("click",clearBox);


/*$('input[type=checkbox]').prop('checked');*/
 


     