
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




//looping through both my arrays
for(i=0; i<em.length; i++){
//printing out the numbers from strings
 console.log(em[i][0]);
 console.log(read[i][0]);
//giving my them a values so that i can be able to calculate
var num = em[i][0];
 var mun = read[i][0];
//finding out the total
 var total = num*mun;
 console.log(total);
}
