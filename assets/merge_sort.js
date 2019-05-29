
function mergeSort (arr,tmp,tmp2) {
  console.log(arr)
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }
  if(destroy) return emp;
  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  tmpar =  merge(
    mergeSort(left,0,0),
    mergeSort(right,0,0)
  )
  console.log(tmpar)
  if(destroy) return emp;
  return tmpar
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0
  if(destroy) return emp;
  while (indexLeft < left.length && indexRight < right.length) {
    if(destroy) return emp;
    if (cmp(left[indexLeft] , right[indexRight])) {
      if(destroy) return emp;
      result.push(left[indexLeft])
      indexLeft++
    } else {
      if(destroy) return emp;
      result.push(right[indexRight])
      indexRight++
    }
  }
  if(destroy) return emp;
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
