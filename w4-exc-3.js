function cariMedian(arr) {
  // you can only write your code here!
  var posisi = arr.length/2;
  var hasil = 0;
  var a,b;
  
  if(posisi - Math.floor(posisi) != 0){
    a = arr[Math.ceil(posisi - 1)];
    hasil = a;
  }else{
    a = arr[posisi - 1];
    b = arr[posisi];
    //hasil = ( a + b )/2;
    hasil = ( a + b )/2 ;

  }
  return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5