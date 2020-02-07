function angkaPrima(angka) {
  // you can only write your code here!
  var k = 0;
  for(var i = 2; i <= angka ; i++){
    if(angka % i == 0 ){
      k = k+1;
    }    
  }
  if(k == 1){
    return true;
  }else{
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false