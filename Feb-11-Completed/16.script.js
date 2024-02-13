/* A function is a block of code that performs a task.
// Creating a function involves two things:
1/ Function declaration - means defining a function.
2/ Function call - made when we are calling or executing a function.
*/
console.log(`1.Functions at Work`);
console.log(`--------------------`);

function square(number){ // Defining  and naming the function
                         // include the parameter number
                         // it will be used to send to the function
    return number * number; // Block of code that contains the 
                            // body and contains the results 
                            // of the function
};

// Calling/Invoking/Executing the function after declaring it, 
// and passing our arguments to a declared variable.
const result = square(5);

// Print out via console log the result of our function.
console.log(result);

// First method of declaring a function. 
// Preffered when using this key word.
console.log(`1.Using the declarative way`);
console.log(`----------------------------`)
console.log(`A.the first way to write a function is by using declaration`)
console.log(`function name(params) {`);
console.log(`/*// body of code */`);
console.log(`};`)

// Second method is by doing a function expression
// We use it to define a named or a function without a name
console.log(`2.Using the function expression way with variables`);
console.log(`--------------------------------------------------`);
console.log(`A.is doing a function expression, used mostly for functions with no names. `)
console.log(`const name = function(params) {`);
console.log(`// statements or block of code`);
console.log(`}`);

// Is use of Arrow Functions
console.log(`3.Use of Arrow Functions.`);
console.log(`The Most preffered and used method in JavaScript.`)
console.log(`--------------------------------------------------`);
console.log(`A.the shorter way for writting expressions `);
console.log(`const nameOfFunction = (parameters) => {`);
console.log(`// statements or block of code`);
console.log(`}`);

console.log(`4.simple function with no return statement means its undefined`);
console.log(`-----------------------------------------------------`);
function sayHello(name){
    console.log(`Hello!, ${name}`);
};
sayHello(`Mr. Cedric`);
sayHello(`Bwana. Cedric`);

console.log(`5.simple function with a return statement`);
console.log(`-----------------------------------------`);
function add( a , b ) {
    return a + b;
};
const sum = add(2000, 7);
console.log(sum);

console.log(`6.main way writting an arrow functions`);
console.log(`---------------------------------------`);
const squaretwo = (number2) => {
    return number2 * number2
};
const squareResultTwo = square(5);
console.log(squareResultTwo);

console.log(`7.shorter way of writing an arrow function.`);
console.log(`--------------------------------------------`)
const squareThree = (number2) => number2 * number2;
const  squareResulThree = squareThree(6);
console.log(squareResulThree);

