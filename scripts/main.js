var bag = {
  max: 21,
  contents: [
    { name: 'Helm of Logic', effect: '+1 Problem Solving', weight: 3.4 }
  ]
}

render()

var maxWeight = document.querySelector('#max-weight')
maxWeight.textContent = bag.max

var form = document.querySelector('#new-item-form')
form.addEventListener('submit', submitForm)
