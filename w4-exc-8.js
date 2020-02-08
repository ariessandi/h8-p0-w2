function tukarBesarKecil(kalimat) {
  var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var kecil = "abcdefghijklmnopqrstuvwxyz";
  var arr=[];
  var hasil = "";
  // you can only write your code here!
  for(var i = 0; i < kalimat.length; i++){
    arr.push(kalimat[i]);
  }

  for(var a = 0; a < arr.length; a++){
    for(var b = 0; b < besar.length; b++){
      if(arr[a]==besar[b]){
        arr[a] = kecil[b];
      }else if(arr[a]==kecil[b]){
        arr[a] = besar[b];
      }

    }
    
  }

  for(var c = 0; c < arr.length; c++){
    hasil += arr[c];
  }
  //console.log(hasil);
  return hasil;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"