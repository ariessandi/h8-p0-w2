function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr=[];
  var x=0;
  var temp;
  for(var i = angka;  i > 0 ; i--){
    if(angka%i == 0){
        x = angka/i;
        arr.push(i +""+ x);
    }
  }

  for(var a = 0; a < arr.length; a++){
    for( var b = 0; b < arr.length; b++){
      if(arr[b]< arr[b+1]){
      temp = arr[b+1];
      arr[b+1] = arr[b];
      arr[b] = temp;
      }

    }
  }
  
  return arr[0].length;

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2