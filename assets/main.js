names_inp = document.getElementById('names_inp');

// customSort = quickSort;
customSort = mergeSort;

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
  var sortedArray = customSort(items, 0, items.length - 1);

  if(sortedArray.length>0){
    document.getElementById('results').innerHTML += "<br> Total comparisons " + count +
    "<br> Result: " + sortedArray + "<br>";

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
