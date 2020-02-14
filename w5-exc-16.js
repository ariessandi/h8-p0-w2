function totalDigitRekursif(angka) {
  // you can only write your code here!
  var arr="" + angka + "";
  var arrx="";

  for( var i =1 ; i < arr.length; i++){
    arrx += arr[i];
  }
    if (angka > 0) {
      angka = parseInt(arrx);
      return parseInt(arr[0]) + totalDigitRekursif(angka);
    } else {
        return 0;
    }
    

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
