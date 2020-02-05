var rows1 = 5;
  do {
     console.log('*');
    rows1--;
  }
  while (rows1 > 0);

  console.log('');
  console.log('============');
  console.log('');

var rows2 = 4;
var bintang="";
for(var i=0; i< rows2; i++){
 for(var j=0; j<rows2; j++){
   bintang += "*";
   
 }
  console.log(bintang);
  bintang ="\n";
  
}

console.log('');
console.log('============');
console.log('');

var rows3 = 5;
bintang="";
for(var i=0; i< rows3; i++){
 for(var j=0; j< i+1; j++){
   bintang += "*";
   if(j==i){
   console.log(bintang);
   }
   
 }
 
  bintang ="\n";
  
}
