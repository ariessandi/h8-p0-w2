
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