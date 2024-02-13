/* Logical Operators = JavaScript has three of them and they are;
1/ AND - &&(It checks if all operands are TRUE and returns TRUE)
         The TRUE values can be either TRUE or FALSE,
2/ OR - || (It checks at least one operand is TRUE and returns TRUE) 
3/ NOT - !(All that it does is that it returns a true value.
They also include if else statements and falsey values.
*/
// Section for AND operator
console.log(`1.AND(&&) operator in action.`)
console.log(`-------------------------`)
console.log(`A.comparing two boolean operands true and false.`);
console.log(true && false);
console.log(`B.comparing two boolean operands that are equal- false`);
console.log(false && false);
console.log(`C.comparing two boolean operands that are equal - true`);
console.log(true && true);
console.log(`D.we can even compare three operands to simulate a false return.`);
console.log(true && false && true);

// Section for OR operator
console.log(`2.OR(||) operator in action.`);
console.log(`-------------------------`);
console.log(`A.check true and false.`);
console.log( true || false);
console.log(`B.vice versa - check false and True`);
console.log(false || true);
console.log(`C.check if both are the same - false/false`);
console.log(false || false);
console.log(`D.and vice versa - checj true and true`);
console.log(true || true);

// Section for NOT operator
console.log(`3.NOT(!) operator in action.`);
console.log(`----------------------------`);
console.log(`A.the oposite of True`);
console.log(!true);
console.log(`B.the oposite of False`);
console.log(!false);
