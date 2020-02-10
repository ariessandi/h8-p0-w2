function changeMe(arr) {
  // you can only write your code here!
  var hasil = "";
  var year = 0;
  var kolom = ['firstName','lastName','gender','age'];
  if(arr.length < 1){
     arr = "";
  }else{
    for(var i = 0; i < arr.length; i++){
      hasil = i + 1 + ". "+ arr[i][0] +" "+ arr[i][1] +"{";
      for(var j = 0; j < kolom.length; j++){
        if(j == 3){
          year = new Date().getFullYear() - arr[i][j];
          if(year > 0 ){
            arr[i][j] = year;
          }else{
            arr[i][j] ="Invalid Date";
          }
        }
          hasil +=  kolom[j] +": "+ arr[i][j];
        
          
        if(j < kolom.length - 1 ){
          hasil += ",";
        }
      }
      hasil += "}";
      console.log(hasil);
    }


  }

  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
