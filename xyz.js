/*
var arr=['Meja','Meja','Sepatu','Buku','Buku','Meja'];
var ress = [];
for(var i = 0; i < arr.length; i++ ){
  var flag = true;
  for(var j = 0; j < arr.length; j++){

    if(arr[i] == ress[j]) {
        flag = false;
    }
  }

  if(flag == true){
    ress.push(arr[i]);
  }
}
console.log(ress);
*/




function cariModus(arr) {
  var jum = 0;
  var  k = 1;
  var newarr = [];
  var hasil = [];
  var ress = [];
  // you can only write your code here!
  /*
  for(var i = 0; i < arr.length; i++){
    jum = 0;
    for(var j = 0; j < arr.length; j++){
      if(arr[i] == arr[j]){
        jum = jum + 1;
      }
    }

        if(jum > 1){
         newarr.push(arr[i]);
        }
  }

console.log(newarr);
//console.log(newjum);
*/


for(var i = 0; i < arr.length; i++ ){
  var flag = true;
  for(var j = 0; j < arr.length; j++){

    if(arr[i] == ress[j]) {
        flag = false;
    }
  }

  if(flag == true){
    ress.push(arr[i]);
  }
}






  for(var a = 0; a < ress.length; a++){
    jum = 0;
    for(var b = 0; b < arr.length; b++){
      if(ress[a] == arr[b]){
        jum = jum + 1;

      }

    }

        if(jum > 1){
          newarr.push([ress[a],jum]);
        }
        //console.log(jum);

  }

if(newarr.length > 1){
  for(var x = 0; x < newarr.length; x++){
    for(var y = 0; y < newarr.length; y++){
      if(newarr[x][1] > newarr[y][1]){
          hasil.push(newarr[x][0]);
      }
    } 
  } 
}else if(newarr.length == 1){
  hasil=newarr[0][0];
}else{
  hasil = -1;
}


//console.log(ress);

//console.log(newarr);
console.log(hasil);
  
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 5 ,10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


