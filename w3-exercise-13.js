function targetTerdekat(arr) {
  // you can only write your code here!
  var b=[];
  var k = 0;
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i]=='o'){
       k = i;
    }
  }
  for(var j = 0; j < arr.length; j++){
    if(arr[j]=='x'){
      if(j > k){
        b.push(j - k);
      }else if(j < k){
        b.push(k - j);
      }
      
    }
    
  }
  if(b.length == 0){
    b.push(0);
  }

    var temp;
    for(var m = 0; m < b.length; m++){
      for(var n = 0; n < b.length; n++){
      if(b[n] > b[n+1]){
        temp = b[n+1];
        b[n+1] = b[n];
        b[n] = temp;

       }
      }
    }

  return b[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
