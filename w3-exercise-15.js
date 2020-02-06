function groupAnimals(animals) {
  // you can only write your code here!
  var kamus="abcdefghijklmnopqrstuvwxyz";
  var newarr = [];
  var newarrx = [];
  
  for(var j = 0; j < kamus.length; j++){
  newarr[j]=[];
    for(var i = 0; i < animals.length; i++){ 
      if(animals[i][0] == kamus[j]){  
            newarr[j].push(animals[i]);  
      }

    }
    if(newarr[j]!=""){
      newarrx.push(newarr[j]);
    }

  }
  return newarrx;
}



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
