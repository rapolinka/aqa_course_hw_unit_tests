const minAge = 18;
const maxAge = 60;
let age = 18;
age = +age;

if(isNaN(age)){
    console.log("Incorrect data type.");
}
else if(age < minAge){
    console.log(`You don't have access cause your age is ${age}. It's less then.`);
} else if(age >= minAge && age <= maxAge){
    console.log("Welcome!");
} else if (age > maxAge){
    console.log("Keep calm and look Culture channel.");
} else {
    console.log("Technical work.")
}