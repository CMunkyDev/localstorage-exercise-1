function calculateWeight (max, contents) {
  var total = 0

  for (var i = 0; i < contents.length; i++) {
    var item = contents[i]
    total += item.weight
  }

  return total
}
