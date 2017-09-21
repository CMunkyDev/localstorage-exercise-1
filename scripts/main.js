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

//// Functions

function render () {
  var weight = calculateWeight(bag.max, bag.contents)

  var currentWeight = document.querySelector('#current-weight')
  currentWeight.textContent = weight

  var progress = document.querySelector('#weight-progress .progress-bar')
  progress.style.width = `${((weight / bag.max) * 100).toFixed(2)}%`

  var items = []
  for (var i = 0; i < bag.contents.length; i++) {
    var item = bag.contents[i]
    var html = `
      <li id="item-${i}" class="list-group-item placeholder">
        <b>${item.name}</b>
        <span class="text-info ml-4">${item.weight} lbs</span>
        <span class="ml-4">${item.effect}</span>
      </li>`
    items.push(html)
  }

  var list = document.querySelector('#bag-contents')
  list.innerHTML = items.join('')
}

function submitForm (event) {
  event.preventDefault()

  var name = document.querySelector('#name')
  var effect = document.querySelector('#effect')
  var weight = document.querySelector('#weight')
  var item = {
    name: name.value,
    effect: effect.value,
    weight: parseFloat(weight.value)
  }

  var inputs = [ name, effect, weight ]
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    input.value = ''
  }

  bag.contents.push(item)
  render()
}

function calculateWeight (max, contents) {
  var total = 0

  for (var i = 0; i < contents.length; i++) {
    var item = contents[i]
    total += item.weight
  }

  return total
}
