
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
      if(destroy) return emp;
        while ( cmp(items[i], pivot)) {
          if(destroy) return emp;
            i++;
        }
        if(destroy) return emp;
        while ( (  items[j]!=pivot && !cmp(items[j],pivot))   ) {
          if(destroy) return emp;
            j--;
        }
        if(destroy) return emp;
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    if(destroy) return emp;
    return i;
}





function quickSort(items, left, right) {
  // console.log(items,left,right);
    var index;
    if(destroy) return emp;
    if (items.length > 1) {
      // if(destroy) return emp;
        index = partition(items, left, right); //index returned from partition
        if(destroy) return emp;
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
            if(destroy) return emp;
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
            if(destroy) return emp;
        }
    }    
    return items;
}
