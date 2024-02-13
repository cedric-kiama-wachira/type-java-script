/*
 Conditional Loops For or while loop
*/
console.log(`1.DRY(Don't Repeat Yourself) code section`);
console.log(`-----------------------------------------`);
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

// While loop - simple loop.
console.log(`2.Using while loop in order not to write buggy code.`);
console.log(`-----------------------------------------------`);

let i = 0; // Declare a variable externally.

while(i < 10 /* condition set. */){
    // Block of code that contains iteration function until
    // the condition is met. Here the risk is running into 
    // an infite loop and our browser may crush.
    console.log(i);
    i++; 
}
// For loop
console.log(`3.using for loop in order not to write buggy code.`);
console.log(`--------------------------------------------------`);

// For loop also known as the complex loop,
// Declaration contains three options within,
// and separated by semi colons.

for(
    /* One Time Initialization before the loop starts*/ 
    let j = 0; // Variable is declared here.
     /* condition check will execute at the begining  
     of the loop, if it meets the iteration/ is true 
     and it executes */ 
     j < 10; 
     /* final expression is executed at end of each loop
      iteration, prior  to the next condition check,
      it is usually used to increment or decrement the
      loop counter  */
     j++
){
    // Block of code
    console.log(j);
}

