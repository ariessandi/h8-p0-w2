function hapusSimbol(str) {
  // you can only write your code here!
  var kamus ="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr = [];
  for(var j = 0; j < str.length; j++){
  for(var i = 0; i < kamus.length; i++){
    
      if(str[j]==kamus[i]){
        arr.push(str[j]);
      }
    }
  
  }
  //console.log(arr);
  var hasil ="";
 for(var a = 0; a < arr.length; a++){
    hasil += arr[a];
 }

   return hasil;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100