function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var newarr = [];
  for(var j = 0; j < 3 ; j++){
    newarr[j]=[];
    for(var i = 0; i < arr.length; i++){
    
      
      if(j == 0){  
        if((arr[i]%2 == 0)&&(arr[i]%3 != 0)){
            newarr[j].push(arr[i]);
        }
      }

      if(j == 1){  
        if((arr[i]%2 != 0)&&(arr[i]%3 != 0)){
            newarr[j].push(arr[i]);
        }
      }

      if(j == 2){  
        if(arr[i]%3 == 0){
            newarr[j].push(arr[i]);
        }
      }
    }
  }

  //console.log(newarr);
  return newarr;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
