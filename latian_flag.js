function cariModus(arr) {
  var jum = 0;
  var newarr = [];
  var newjum = [];
  // you can only write your code here!
  for(var i = 0; i < arr.length; i++){
    //newarr[i] = [];
    jum = 0;
    for(var j = 0; j < arr.length; j++){
      if(arr[i] == arr[j]){
        jum = jum + 1;
      }
    }

        if(jum > 1){
         newarr.push(arr[i]);
         if(newarr[i]==arr[j]){
           newarr.pop();
         }
         //newjum.push(jum);
          
        }
  }

console.log(newarr);
//console.log(newjum);
  
}

// TEST CASES
//console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 5 ,10, 10, 6, 5])); // 5
/*
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
*/



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






OBJEK




function highestScore (students) {
  // Code disini
  var obj ={};
  var stud = [];

    for(var l = 0; l < students.length; l++){  
       //if(students[l].score > 75 ){ 
            stud= {nama : students[l].name, score :students[l].score};
          //} 
    }
    obj[l]=stud;
    stud=[];


    return obj;

}




// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
