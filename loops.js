function forLoop(arr) {
  
for (let i = 0; i < 25; i++) {
  if (i == 1) {
  arr.push("I am 1 strange loop.")
  } else {
    arr.push(`I am ${i} strange loops.`)
    }
 }
 
 return arr;
}

function whileLoop(n) {
     while(n > 0) {
        console.log(n)
        n -= 1
     }
     return 'done'
     
}


function incrementVariable(val) {
  val++;
  return val;
}

function doWhileLoop(num) {
  var i = 0;
  
  do
  {
    i++;
    console.log("I run once regardless.");
  } 
  while (incrementVariable(i)< num + 1);
    
}


