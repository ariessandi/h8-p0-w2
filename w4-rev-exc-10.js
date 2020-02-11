function changeMe(arr) {
  // you can only write your code here!

  var newarrz = [];
  var newarry = [];

var year = 0;

    for(var c = 0; c < arr.length; c++){

          year = new Date().getFullYear() - arr[c][3];
          if(year > 0 ){
            arr[c][3] = year;
          }else{
            arr[c][3] ="Invalid Date";
          }

   key = arr[c][0] + " " + arr[c][1];
   newarrz = { firstName : arr[c][0] , lastName : arr[c][1], gender : arr[c][2] , age : arr[c][3] };
    newarry.push( { [key] : newarrz });    
  }
  console.log(newarry);

  
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