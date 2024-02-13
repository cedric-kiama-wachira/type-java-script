/* Decision making using:
    1/ Variables, 
    2/ Logical operators,
    3/ Comparison operators,
    4/ Truthy and Falsly values,
    5/ Switch statements, and
    6/ if statements.
*/

const ofAge = 21;
const notOfAGe = 20;
if( ofAge >= 21){
   // Block of code that is true
   console.log(`You may enter the club.`);
}

if( notOfAGe <= 20){
    // Block of code that is true
    console.log('You are not of age and access is denied');
}

if(ofAge < 21){

}else if( notOfAGe === 20){
    // Block of code that is true
    console.log("I checked your ID and you are one year shy, you may not enter.");
}

if(ofAge < 18){
    //Block of code that is unknown
} else if(notOfAGe < 18 ){
    // Block of code also unknown
} else{
    // Multiple Conditions checked and this is true.
    console.log("You don't even have an ID yet.")
}

