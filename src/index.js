
const createTaskForm = document.getElementById('create-task-form')
const newTaskDescription = document.getElementById('new-task-description')
const prioritySelection = document.getElementById('priority-selection')
const highPriority = document.getElementById('high-priority')
const moderatePriority = document.getElementById('moderate-priority')
const normalPriority = document.getElementById('normal-priority')
const lowPriority = document.getElementById('low-priority')

document.addEventListener('submit', event => {
    event.preventDefault()
    createItem()
    createTaskForm.reset()
})

const createItem = () => {
    let item = document.createElement('li')
    let text = newTaskDescription.value
    let delButton = document.createElement('button')
    delButton.textContent = 'x'
    delButton.addEventListener('click', () => {item.remove()})
    item.append(text)
    item.append(delButton)
    styleAndAppendItem(item)
}

const styleAndAppendItem = item => {
    if (prioritySelection.value === 'high') {
      item.className = 'high'
      highPriority.append(item)
    } else if (prioritySelection.value === 'moderate') {
      item.className = 'moderate'
      moderatePriority.append(item)
    } else if (prioritySelection.value === 'low') {
      item.className = 'low'
      lowPriority.append(item)
    } else {
      item.className = 'normal'
      normalPriority.append(item)
    }
}