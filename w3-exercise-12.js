function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var selisih=[];
  var hasil ="";
  for(var i = 0; i < arr.length-1; i++){
    selisih[i] = arr[i+1]/arr[i];
  }
  for(var j=0; j < selisih.length-1; j++){
    if(selisih[j] != selisih[j+1]){
      hasil = false;
    }
  }
  //console.log(hasil);
  
  if(hasil === false){
    return false;
  }else{
    return true;
  }
  
  //return selisih;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false