function meleeRangedGrouping (str) {
  //your code here
  var strx = [];
  var stry = [];
  var strz = [];
  var flag = false;
  //console.log(str.length);
  for(var i = 0; i < str.length; i++){
     if(str[i]!="'" && str[i]!=","){
         strx.push(str[i]);
         flag = false;
     }else if(str[i]==","){
       stry.push(strx);
       strx = [];
       flag = true;
     }

      
  }

  //console.log(stry);
  var kata = "";
  var ars = [];
 for(var a = 0; a < stry.length; a++){
   for(var b = 0; b < stry[a].length; b++){
     kata += stry[a][b];
   }
   //console.log(kata);
   ars.push(kata);
   kata = "";
 }
console.log(ars);
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
/*
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
*/