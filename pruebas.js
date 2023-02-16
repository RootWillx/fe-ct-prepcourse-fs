var x = 0;
var y = 0;
var arrayNums = [5,6,7,8,9,10];
function agregarNumeros(arrayOfNums) {
   for (let i = 0; i < arrayOfNums.length; i++) {
      y = arrayOfNums[i];
      x = x + y;
   }
   return x;
}
var x = agregarNumeros(arrayNums);
console.log(x);