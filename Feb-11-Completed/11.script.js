console.log(`1.Object types are the building block of javascript.`);
console.log(`2.Object types are used to store collection of data.`);
console.log(`3.Object types are used to store more complex entities.`);
console.log(`4.Objects in javascript are used to group variables.`)

console.log('1.Example of variables for object adoption');
console.log(`------------`);
console.log(`1.Creating two variables belonging a single entity firstPerson.`);

const name = 'Cedric';
const age = 41;
console.log(`2.Variable one: const name = Cedric of data type:`, typeof name)
console.log(`3.Variable two: const age = 41 of data type:`, typeof age);
const firstPerson = {
   name: `Cedric`,
   age: 41
}
console.log(`4.Once both are added like this:const{ name: cedric, age: 41}`);
console.log(firstPerson);

console.log(`2.Example of dot notation`);
console.log(`----------`);
console.log(`1.Defining an object with the required data and outside no variables.`);
console.log(`2.The object will be: const secondPerson ={name:cedric, age:41}`);
console.log(`3.Extracting specific data using dot notation from our object.`);
const secondPerson = {
    name: 'Cedric',
    age: 41
};
console.log(`4.To get the name will use secondPerson.name.`);
console.log(secondPerson.name);
console.log(`5.To get the age data only will use secondPerson.age`);
console.log(secondPerson.age);

console.log(`3.Example of array objects`);
console.log('---------------------------');
const arrDefOne= [ 1, 9, 8, 2 ];
console.log(`1.For const arrDefOne= [ 1,9,8,2 ]`);
console.log(`2.The result will be ${arrDefOne} and the type will be of type ${typeof arrDefOne}.`);

console.log(`4.Example of date objects`);
console.log('---------------------------');
const date = new Date();
console.log(`Fetching the system date and time: ${date} of type ${typeof date}.`);




