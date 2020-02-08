function urutkanAbjad(str) {
  // you can only write your code here!
  var temp;
  var arr = [];
  var hasil ="";
  for(var a = 0; a < str.length; a++){
    arr.push(str[a]);
  }
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[j]> arr[j+1]){
          temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
      }
    }
  }  

  for(var b = 0; b < arr.length; b++){
    hasil +=arr[b];
  }
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

