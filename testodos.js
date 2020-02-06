
var todos =[
["makan",3],
["belajar",1],
["mandi",2],
];

todos[0][1]=0;
todos[1][1]--;

console.log(todos);



var student=["Fadi","Kholid","Juan"];
var depan=[];
var kamus="ABCDEFGHIJKLMNOPQRSTUVWXYZ";


for(var i = 0; i < student.length ; i++){

  depan[i]=student[i][0];
  //for(var j=0; j < kamus.length; j++){
  
  //}
}
console.log(depan);


for(var i=0; i< depan.length; i++){
  for(var j=0; j< depan.length - 1; j++){
    if(depan[j] > depan[j + 1]){
      var temp= depan[j + 1];
      depan[j+1]=depan[j];
      depan[j]=temp;
    }
  } 

}

console.log(depan);





var todos = [
  ["makan",3],
  ["belajar",2],
  ["game",1]
];

var log=["makan","belajar","game"];

for(var i=0; i < log.length; i++){
  for(var j=0; j < todos.length; j++){
    if(log[i] === todos[j][0]){
      todos[j][1]--;
    }
  }
}

console.log(todos);








//var nomor = [1,2,3,4,5,6,7,8,9,10,11,12];
/*
var x=0;
var y=[];
for(var i=1;i< nomor.length; i++){
  if(i%3 == 0){
    
    y[x]=nomor;
    x= x+1;
  }
}

console.log(y);
*/
function numbers(rows,colums){
  var nomor = [1,2,3,4,5,6,7,8,9,10,11,12];
  var x=0;
  var arr=[];
  var y=[];
  var z=0;
for(var i=0;i< rows; i++){

 x=(i+1)*colums - colums;

 z= colums + x;
  for(var j=x; j< z;j++){
      
        arr.push(nomor[j]);
     
     x=x+1;
  }
  y[i]=arr;
  //return arr;
  
  arr=[];
//return y[0]=arr;

}
console.log(y);

}

console.log(numbers(4,3));




//for(var i = 0; i < student.length ; i++){
  //for(var j=0; j < kamus.length; j++){

  //}
//}
var numbers=[2,3,1,5,4,7];
for(var i=0; i< numbers.length; i++){
  for(var j=0; j< numbers.length - 1; j++){
    if(numbers[j] < numbers[j + 1]){
      var temp= numbers[j + 1];
      numbers[j+1]=numbers[j];
      numbers[j]=temp;
    }
  } 

}

console.log(numbers);



function balikString(kata){
  var katabaru='';
    for(i=kata.length-1; i>=0 ; i--){
       katabaru +=kata[i]; 
    }
    return katabaru;
}


balikString("hello world!");

var urut,temp;
var strr=['f','a','c','g','d','b','e'];

for(var i=0; i< strr.length; i++){
  for(var j=0; j< strr.length; j++){
    if(strr[j] > strr[j+1]){ . // f < a
      temp = strr[j+1];   // temp =a
      strr[j+1]=strr[j];   // strr[1]=f
      strr[j]=temp;        // strr[0]= a

    }
  }
}

console.log(strr);
