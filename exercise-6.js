
var i=0;
var j=0;
while(i<20){
  if( i == 0){
    console.log('Looping pertama');
  }
  if( i == 10){
    console.log('');
    console.log('Looping kedua');
    j=j+2;
  }
  if(i<10){
     j = j+2;
     console.log(j + '- I love Coding');
  }else{
     j = j-2;
     console.log(j + '- I will become fullstack developer');
  }
 
  
  i++;
}

var b=0;
for(var a=0; a<20; a++){
  if( a == 0){
    console.log('Looping pertama');
  }  

  if( a == 10){
    console.log('');
    console.log('Looping kedua');
    b = b+1;
  }
  if(a<10){
     b = b+1;
     console.log(b + '- I love Coding');
  }else{
     b = b-1;
     console.log(b + '- I will become fullstack developer');
  }

}

 console.log('');

for(var c = 1; c <= 100 ; c++){
  if(c%2 == 0){
    console.log( c + ' - Genap');
  }else{
    console.log( c + ' - Ganjil');
  }


}
 console.log('');
var g = 1;
for(d = 1; d <= 100 ; d++){
  
  if(g%3 == 0 && g <= 100){
    console.log(g + "Kelipatan 3");
  }
   g += 2;
  
  

}
 console.log('');
var h = 1;
for(x = 1; x <= 100 ; x++){
  if(h%6 == 0 && h <= 100 ){
    console.log(h + "Kelipatan 6");
  }
  h += 5;
  

}
 console.log('');
var k=1;
for(var y = 1; y <= 100 ; y++){

  if(k%10 == 0  && k <= 100 ){
    console.log(k + "Kelipatan 10" );
  }
  k += 9;
  

}


