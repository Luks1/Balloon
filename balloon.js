
//store them in array
var myOder = "4 sets of red, 3 sets of blue, 3 sets of yellow";
// also here store in array
var prices = "R4 for red, R5 for blue, R5.50 for yellow"
// spliting my first line
var fixedOnes = myOder.split(",");
//spliting my second line
var fixPr = prices.split(",");
//printing out the first one
 console.log(fixPr);
// printing out second one
console.log(fixedOnes);

var rep = myOder.replace(/sets of/g,"");
console.log(rep);
var em = [];

fixedOnes.forEach(function(ab){
  em.push(ab.split("sets of"))
});

console.log(em);
var say =[];

fixedOnes.forEach(function(ac){

  say.push(Number(ac[0]*3))
});
console.log(say);
