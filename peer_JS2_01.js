
//1. Start with the number 64 and set that equal to 'value'
var value = 64;

//2. Create condition logic to check if the value is great or equal to 10
//2-1. If true, add 9 to 'value'
//2-2. If false, subtract 5 from 'value'
if(value >= 10) {
  value += 9;
} else {
  value -= 5;
}

//3. Create a string that is set to 28, add it to 'value'
var a = "28";
value = value + a; // could use += here too. value = "7328"
//4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0; i < value.length; i++ ){
  array[i] = value.charAt(i);
} // array = ["7","3","2","8"]
console.log(value, array);
//5. Remove the first and last values off the array
array.pop();
array.shift(); // array = ["3","2"]

//6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var b ="";
for (var i = array.length-1; i >= 0; i--){
b += array[i];
} // var b = "23"
console.log(b);

//7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value); // 7328
b = parseInt(b); // 23
console.log(value, b);

//******* SWITCH PROGRAMMERS *******

//8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value = value + b;

console.log(value); //Expect it to be 7351

//9. If the new value of 'value' is greater than 1954, set 'value' equal to 56. If not, check to see if it is equal to 1852, if it is, set 'value' equal to 19.
//If neither of these are true, set the value to 91.
if (value > 1954) {
  value = 56;
}
else if (value === 1852) {
  value = 19;
}
else {
  value = 91;
}
console.log(value); //Expect it to be 56

//10. Create a while loop that counts down (to 0) from 11 and increments 'value' by 1.
i = 11;
while(i > 0){
  value++;
  i--;
}
console.log(value); //Expect it to be 67

//11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there
//is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
function convert(val) {
  val = String(val);
  if(val.length > 1) {
    val = val.substring(1, val.length);
  }
  return val;
}
value = convert(value);

//12. Call the function.
value = convert(value);

//13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
console.log(value);

//14. Your answer should be a String value that equals 7. Is that what you got?
YES!!!
