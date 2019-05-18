names_inp = document.getElementById('names_inp');

items=[];
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelectorAll('.modal');
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


dc={}
count=0;
function start(reset = 0){
  items = names_inp.value.split(',');
  console.log(items);
  if(reset){
    //start things
    document.getElementById('results').innerHTML = ""
    dc={}
    count=0;
  }
  var sortedArray = quickSort(items, 0, items.length - 1);
  if(sortedArray.length>0){
    document.getElementById('results').innerHTML += "<br> Total comparisons " + count +
    "<br> Result: " + items + "<br>";

    close_modal();
  }
  destroy = 0;
}

function close_modal(){
  document.getElementById("close_modal").click();
  document.getElementById('results').scrollIntoView();
}

destroy = 0;
emp=[];

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
  console.log(items,left,right);
    var index;
    if(destroy) return emp;
    if (items.length > 1) {
      if(destroy) return emp;
        index = partition(items, left, right); //index returned from partition
        if(destroy) return emp;
        if (left < index - 1) { //more elements on the left side of the pivot
          if(destroy) return emp;
            quickSort(items, left, index - 1);
            if(destroy) return emp;
        }
        if(destroy) return emp;
        if (index < right) { //more elements on the right side of the pivot
          if(destroy) return emp;
            quickSort(items, index, right);
            if(destroy) return emp;
        }
    }
    if(destroy) return emp;
    return items;
}
// first call to quick sort

function chose(sel){
  a = document.getElementById('red_inp').innerHTML;
  b = document.getElementById('blue_inp').innerHTML;
  count+=1;
  dc[a+":"+b] = sel;
  dc[b+":"+a] = not(sel);
  _a = a; _b = b;
if(!sel){ document.getElementById('results').innerHTML += "<br>Chose " + b + " over " + a;   }
else{ document.getElementById('results').innerHTML += "<br>Chose " + a + " over " + b;   }

  start(0);
}

function not(a){
  if(a==0) return 1;
  else return 0;
}

function cmp(elem1,elem2){
  if(elem1==elem2){ dc[elem1+":"+elem2] = 0;  }
if(dc[elem1+":"+elem2]==0 || dc[elem1+":"+elem2]==1) return dc[elem1+":"+elem2];
document.getElementById('red_inp').innerHTML = elem1;
document.getElementById('blue_inp').innerHTML = elem2;
destroy = 1;
}
