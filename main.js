


function addItem() {
    const ul = document.querySelector("ul")
   
    const text = document.querySelector("#task-title").value
   
  

    const newItem = document.createElement('li');
    newItem.innerText = text


    const nweButton  = document.createElement('button');

    nweButton.addEventListener('click', delateItem = () => {
        ul.removeChild(newItem)
        ul.removeChild(nweButton)
      
    })

    nweButton.innerText = 'X'
    nweButton.classList.add("newBtn")
    


    ul.appendChild(newItem)
    ul.appendChild(nweButton)
}




const BtnNewItem = document.querySelector(".add-item")
const test = document.querySelector(".test")



BtnNewItem.addEventListener('click', addItem)
