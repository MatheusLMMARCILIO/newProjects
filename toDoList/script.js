const input = document.querySelector('.task-input')
const btn = document.querySelector('.add-btn')
const list = document.querySelector('.task-list')

btn.addEventListener('click', (e) => {

e.preventDefault()

   const taskText = input.value.trim()

   if (taskText === "") return

   const li = document.createElement('li')
   li.textContent = taskText

   li.addEventListener('click', () => {
    li.classList.toggle('done')
   })


const removeBtn = document.createElement('button')

removeBtn.textContent = '🗑️'

removeBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    list.removeChild(li)
})

li.appendChild(removeBtn)
list.appendChild(li)

input.value = ''

})

