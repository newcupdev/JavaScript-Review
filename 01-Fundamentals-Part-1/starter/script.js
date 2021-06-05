/** VALUES AND VARIABLES */

/** Conventions for naming variables 

camelCase - first word as lowercase then subsequent words has uppercase first letter
            e.g firstName, firstNamePerson

Rules
- variables can't start with a number
- variables can contain numbers, letters, underscore or the dollar sign
- variables can't use reserve keywords e.g this, function
- variables can't start with uppercase

**/

/** Assignment 1

PROBLEM 

1. Declare variables called 'country', 'continent' and 'population' and assign
   their values according to your own country (population in millions)
2. Log their values to the console    

 
SOLUTION

let country = 'Philippines';
let continent = "Asia";
let population = 110914345; 

console.log(country);
console.log(continent);
console.log(population);
*/


/** DATA TYPES */

/**
7 Primitive Data Types

1. Number: Floating point numbers -> used for decimals and integers
2. String: Sequence of characters -> used for text
3. Boolean: Logical type that can only be TRUE or FALSE -> use for taking decisions

4. Undefined: Value taken by a variable that is not yet defined('empty value')
5. Null: Also means 'empty value'
6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
7. BigInt (ES2020): Larger integers than the Number type can hold

JavaScript has dynamic typing: We don NOT have to manually define the data type of
the value store in a variable, Instead, data types are determing AUTOMATICALLY

 */

/** COMMENT */

/** Multi-line comments */
// Single line comments
// Keyboard Shortcut: command + / 

/**
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof - displays new string value that displays the value it's referring to
console.log(typeof true);

//dynamic typing - changing the value of a variable.
//e.g below shows the variable value changed from boolean to string. 
javascriptIsFun = 'YES';
 
let year;
console.log(year); //shows undefined because the variable has an empty value;
console.log(typeof year); //displays undefine. Undefine is both value and data type
 */

/** Data type Lecture Assignment

1. Declare a variable called 'isIsland' and set its value according to your country. 
The variable should hold a Boolean value. Also declare a variable 'language',
but don't assign it any value yet.
2. Log the types of 'isIsland', 'population', 'country', and 'language' 
to the console.

ANSWERS


let isIsland = true;
let language;

console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
console.log(typeof isIsland);

**/

/** Different ways of declaring variables */
// let const var

//let - for declaring variables that can change later. 'mutate' the variables
//const - for declaring variables that won't change in the future. 
//var - old way of declaring variables. works like let

/** NOT MANDATORY TO DECLARE VARIABLES */ // not best practice for scope
// e.g lastName = 'Schmedtmann';
// console.log(lastName)

/** DATA TYPE Assignment 
1. Set the value of 'language' to the language spoken where you live (some
   contries have multiple languages, but just choose one)
2. Think about which variable should be const variables (which values will
   never change, and which might change?) Then, change these variables to conts.
3. Try to change one of the changed variables now, and observe what happens

ANSWER

const country = 'Philippines';
const continent = "Asia";
let population = 110914345;
let isIsland = true;
let language = 'tagalog';

console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
console.log(typeof isIsland);
 
*/

/** BASIC OPERATORS */

//Operator - allows us to transform or combine values

/**
Arithmetic Operators
+ - * /  

2 ** 3 // means 2 to the power of 3 -> 2 * 2 * 2

+ can concatenate strings 
e.g
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

Assignment Operators
= 

+= -> e.g x += 10 -> x = x + 10

x++ -> x = x + 1


Comparison Operator
> < >= <=
results a boolean value

Assignment
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the policy of your country by 1 and log the result to consule.
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country have
less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 
11 million people speak portuguese.

Solution


let countryOne = 'Philip';
let countryTwo = 'pines';
let population = 110914345; 
let finlandPopulation = 11000000;
let averagePopulation = 33000000;
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(countryOne + ' has a population of ' + population/2);
console.log(countryTwo + ' has a population of ' + population/2);
console.log(population++);
console.log('Finland has more people than Philippines, which is ' + (finlandPopulation > population));
console.log('Philippines have less people than an average country, which is ' + (averagePopulation > population));
console.log(description);

*/


