console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Scott";
let lastName = "Martin";
var age = "30";

// Exercise 2
let fullName = firstName + " " + lastName; // Scott + " " + "Martin" => Scott Martin
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);

// Exercise 3
let myStory;
let city = "Tampa";
let pastime = "coding, gaming, biking, videogames and gym";

myStory = `My name is ${fullName}. 
I live in ${city}. 
I like ${pastime}.`;

console.log(myStory);
