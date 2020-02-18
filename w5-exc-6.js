function meleeRangedGrouping (str) {
  //your code here
  var strx = [];
  var stry = [];
  var strz = [];
  var flag = false;
  
  str = str +",";
  for(var i = 0; i < str.length; i++){
     if(str[i]!=","){
         strx.push(str[i]);
     }else if(str[i]==","){
       stry.push(strx);
       strx = [];
     }
  }

var grup ="";
var grupx = [];
var g ="";
for(var c = 0; c < stry.length; c++){
 var flag = true;
  for(var d = 0; d < stry[c].length; d++){
    if(stry[c][d]=="-"){
       g = d+1;    
       for(var e = g; e < stry[c].length; e++){
         grup += stry[c][e];
       }
       grupx.push(grup);  
       grup = ""; 
     
    }
  }
}

var ress = [];
for(var i = 0; i < grupx.length; i++ ){
  var flag = true;
  for(var j = 0; j < grupx.length; j++){

    if(grupx[i] == ress[j]) {
        flag = false;
    }
  }

  if(flag == true){
    ress.push(grupx[i]);
  }
}

 var kata = "";
 var ars = [];
 
 for(var a = 0; a < stry.length; a++){
   
   for(var b = 0; b < stry[a].length; b++){
     if( stry[a][b] =="-"){
       //stry[a][b] =',';
       b = stry[a].length ;
       stry[a][b] ="";
       //kata = "";
     }
     kata += stry[a][b];
   }
   ars.push([kata, grupx[a]]);
   kata = "";
   
 }

var hasil =[];
var hasilx =[];
for(var x = 0; x < ress.length; x++){
  
  for(var y = 0; y < ars.length; y++){
      if(ars[y][1]==ress[x]){
          hasil.push(ars[y][0]);
      }
    
  }

  hasilx.push(hasil);
  hasil =[];
}

if(hasilx.length == 1){
  hasilx.push([]);
}
return hasilx;

 
}
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
