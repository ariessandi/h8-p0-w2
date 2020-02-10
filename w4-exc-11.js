function shoppingTime(memberId, money) {
  // you can only write your code here!
  var hargaProduk = [['Sepatu brand Stacattu',1500000],
['Baju brand Zoro',500000],
['Baju brand H&N',250000],
['Sweater brand Uniklooh',175000],
['Casing Handphone',50000]];

var newProduk = [];
var produk = [];
var sisa = [];
var k =0;
var temp;
var money_awal = money;
var flag = false;

if(money >= 0 && memberId != ""){
    flag = true;
}else{
    flag = false;
}

if(flag == false){
  console.log("Mohon maaf, toko X hanya berlaku untuk member saja");
}else if(money < 50000){
  console.log("Maaf uang tidak cukup");
}else{
  //var sisa = money;

  for(var a = 0; a < hargaProduk.length ; a++){
   
    if(money >= hargaProduk[a][1]){
      produk.push(hargaProduk[a][0]);
      sisa = money - hargaProduk[a][1];
      money = sisa;
      
    }
    //a = a + 1;
    //console.log(money);
  }
/*
console.log("{ memberId:'" + memberId +"',");
console.log("money:'" + memberId +"',");
console.log(produk);
*/
return { memberId : memberId,
         money : money_awal,
         listPurchased : produk ,
         changeMoney : money }

//console.log(harga);
}
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }


console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
