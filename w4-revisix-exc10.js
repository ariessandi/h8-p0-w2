function changeMe(arr) {
  // you can only write your code here!
  var obj ={};
  var stud = [];
  var oname = "";

    for(var i = 0; i < arr.length; i++){  
            stud.push({firstName : arr[i][0], lastName :arr[i][1] , gender : arr[i][2] , year :arr[i][3]});
    }

    var k = 0;
    var yearx = 0;
    for(var j = 0; j < stud.length; j++){  

          yearx = new Date().getFullYear() - stud[j].year;
          if(yearx > 0 ){
            stud[j].year = yearx;
          }else{
            stud[j].year ="Invalid Date";
            yearx="Invalid Date";
          }

           k = k + 1;
            oname = k +"."+stud[j].firstName + " "+stud[j].lastName
            obj[oname] ={firstName : stud[j].firstName, lastName :stud[j].lastName , gender :stud[j].gender, age : yearx};
   
    }
    console.log(obj);
    //return obj;
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