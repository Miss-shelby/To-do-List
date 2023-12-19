'use strict'
const input = document.querySelector('#task');
const addBtn = document.querySelector('#add');
const ul = document.querySelector('.todos');

function addTask() {
    const userInput = input.value;
    const li = document.createElement('li')
    li.innerHTML=`
     <ul class="todos">
            <li>${userInput}<span class="delete">Delete </span></li>
        </ul> 
    `
    li.style.marginTop='20px'
    ul.appendChild(li)

    const deleteBtn=li.querySelector('.delete')
   deleteBtn.addEventListener("click",()=>{
       ul.removeChild(li)
  })
  input.value="";
}
addBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(userInput)
    addTask() 

})
