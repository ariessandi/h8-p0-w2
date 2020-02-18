function hapusSimbol(str){
var arr=[];
for(var i = 0; i < str.length; i++){
  arr.push(str[i]);
}
  var hasil = "";
  var patt = /^[a-zA-Z0-9]+$/;
  for(var a = 0; a < arr.length; a++){
    if(arr[a].match(patt)){
      //console.log(arr[a]);
      hasil += arr[a];
    }
   
  }
//console.log(hasil);
return hasil;
}


// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100