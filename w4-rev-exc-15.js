function highestScore (students) {
  // Code disini
  var obj ={};
  var stud = [];
  var arr = [];
  var flag = true;
  var scorex = [];
  var temm;
  if(students.length==0){
    return [];

  }else{


  for(var i = 0; i < students.length; i++){

    arr.push(students[i].class);
    
  }


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


      for(var k = 0; k < ress.length; k++ ){  

        for(var m = 0; m < students.length; m++){  
          if(students[m].class ==ress[k]){ 

scorex.push(students[m].score);

for(var x = 0; x < scorex.length; x ++){
  for(var y = 0; y < scorex.length; y ++){
    if(scorex[y] < scorex[y+1]){
      temm = scorex[y+1];
      scorex[y+1] =scorex[y];
      scorex[y] = temm;
    }
  }  
}


        }
}

for(var l = 0; l < students.length; l++){  

 // console.log(scorex[0]);
       if(students[l].score==scorex[0] &&students[l].class ==ress[k]){ 

            stud= {nama : students[l].name, score :students[l].score};
          } 
        }
        obj[ress[k]]=stud;
        stud=[];
        scorex=[];
      }
    }

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