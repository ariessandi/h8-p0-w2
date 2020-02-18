function cariPelaku(str) {
var arr=[];
for(var i = 0; i < str.length; i++){
  arr.push(str[i]);
}
var jum =0;
  var hasil = "";
  var patt = /abc/i;
  for(var a = 0; a < arr.length; a++){
    
      
      hasil += str[a];
      //console.log(hasil);
    if(hasil.match(patt)){
     jum = jum+1;
     hasil = "";
    }
   
  }
//console.log(jum);
return jum;

  // you can only write your code here!
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2