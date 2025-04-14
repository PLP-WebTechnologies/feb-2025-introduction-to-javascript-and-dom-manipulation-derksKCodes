function AddItem (){
    const newItem = document.createElement("li");
        newItem.textContent = "Javascript DOM manipulation";
        document.getElementById("listItems").appendChild(newItem);    
}


function removeItem(){
    const item = document.getElementById("listItems").lastElementChild;
    if (item) {
        document.getElementById("listItems").removeChild(item);
    }
}

let isGreen = false;

function changePageColor() {
  if (!isGreen) {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "red";
    isGreen = true;
  } else {
    document.body.style.backgroundColor = "#f4f4f4"; // original background
    document.body.style.color = "black"; // default text color
    isGreen = false;
  }
}

isChange = true;
function changeContent(){
    
    if(isChange){
        document.getElementById("heading").textContent = "Javascript DOM manipulation";
        isChange = false;        
    }
    else{
        document.getElementById("heading").textContent = "Welcome to Advanced HTML5 Elements";
        isChange = true;
    }
}