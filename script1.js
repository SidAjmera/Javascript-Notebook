function addItem () {
     if (!myInput.value == "") {
     var node = document.createElement('li');
     var textNode = document.createTextNode(myInput.value);
     node.appendChild(textNode);
     myList.appendChild(node);
     myInput.value = "";
     } else {
          alert("Error! Please type in a to do!");
     }

}

function markComplete(event) {
     event.target.classList.toggle('complete');
}


myButton.onclick = addItem;
myList.onclick = markComplete;