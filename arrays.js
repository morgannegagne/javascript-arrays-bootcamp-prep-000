var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}
