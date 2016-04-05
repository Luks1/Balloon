
//store my oder in array
var myOder = "4 sets of red, 3 sets of blue, 3 sets of yellow";
var fixedOnes = myOder.split(",");
console.log(fixedOnes);





 // also here store prices array
 var prices = "R4 for red, R5 for blue,and R5.50 for yellow";
 var fixPr = prices.split(",");
  console.log(fixPr)


  ;
//creating array
 var read = [];
//looping ,replacing them and push to the array
 fixPr.forEach(function(ls){
   read.push(ls.replace("R", "")
               .replace("for", ",")
               .replace("and", "")
                .split(","));

 });
 console.log(read);




//looping , spliting and push sametime
var em = [];
fixedOnes.forEach(function(ab){
  em.push(ab.split("sets of"))
});
console.log(em);




//finding numbers for each oder *3
var say =[];
em.forEach(function(ac){
say.push(Number(ac[0]*3)+" "+ ac[1]);
});
console.log(say);
