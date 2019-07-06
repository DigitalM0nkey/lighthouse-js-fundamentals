
/*
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/
for (let i = 100; i <= 200; i++) {

  i % 3 === 0 && i % 4 === 0 ? console.log("LoopyLighthouse") : i % 4 === 0 ? console.log("Lighthouse") : i % 3 === 0 ? console.log("Loopy") : console.log(i);

}