function highestScore (students) {
  // Code disini
  var newarr = [];
  var newarrx = [];
  var newarrz = {};
  var hasil = [];
  var temp;
  

   for(var j = 0; j < students.length; j++){
    if(students[j].class == 'foxes' ){
      newarrx.push(students[j].score);
    }
   }

   for(var k = 0; k < students.length; k++){
    if(students[k].class == 'wolves' ){
      newarr.push(students[k].score);
    }
   }

 for(var a = 0; a < newarr.length; a++){
  for(var b = 0; b < newarr.length; b++){
    if(newarr[b]<newarr[b+1]){
      temp = newarr[b+1];
      newarr[b+1] = newarr[b];
      newarr[b] = temp;
    }
  }   
 }

  for(var c = 0; c < newarrx.length; c++){
    for(var d = 0; d < newarrx.length; d++){
      if(newarrx[d]<newarrx[d+1]){
        temp = newarrx[d+1];
        newarrx[d+1] = newarrx[d];
        newarrx[d] = temp;
      }
  }   
 }

  for(var e = 0; e < students.length; e++){
    if((students[e].score == newarrx[0]) && (students[e].class = 'foxes')){
       hasil.push(students[e]);
    }

    if((students[e].score == newarr[0]) && (students[e].class = 'wolves')){
       hasil.push(students[e]);     
    }

  }

  for(var c = 0; c < hasil.length; c++){ 
   key = hasil[c].class;
   newarrz[key] = { name : hasil[c].name , score : hasil[c].score };

  }

return newarrz;


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

