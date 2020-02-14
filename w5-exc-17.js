function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var arr="" + angka + "";
  var arrx=1;

  
    if (angka > 0 && arr.length > 1) {

        for( var i =0 ; i < arr.length; i++){
            arrx = parseInt(arr[i]) * parseInt(arrx);
    
        }
      angka = arrx;
      return kaliTerusRekursif(angka);
    } else {
        return angka;
    }
  

}


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6