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

let country = 'Philippines';
let continent = 'Asia';
let countryOne = 'Philip';
let countryTwo = 'pines';
let population = 110914345;
let language = 'tagalog';
let finlandPopulation = 11000000;
let averagePopulation = 33000000;

console.log(countryOne + ' has a population of ' + population/2);
console.log(countryTwo + ' has a population of ' + population/2);
console.log(population++);
console.log('Finland has more people than Philippines, which is ' + (finlandPopulation > population));
console.log('Philippines have less people than an average country, which is ' + (averagePopulation > population));

let description = country + " is in " + continent + ", and its " + population + " people speaks " +  language;
console.log(description);
*/

/** OPERATOR PRECEDENCE*/
/**

reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

e.g.
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018); // - has precedence then the greater than symbol

associativity - the order from left-to-right or right-to-left the operation happens
e.g
console.log(25 - 10 - 5); // prints 10 -> left-to-right associativity

let x, y;
x = y = 25 - 10 - 5; // associativiy is right-to-left because ' - ' took precedence.

console.log(x, y); prints x=10 and y=10
 */

/////////////////////////////////////
// Coding Challenge #1
/**
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIS using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test Data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
- Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//SOLUTION

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Mark has a higher BMI which is " + markHigherBMI);

*/

/**
/// Strings and Template Literals ///

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//Template literals
// use back ticks ``
// use ${} in the variables
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//multiline string -> use \n\ -> new line

// Assignment //
1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

SOLUTION


let country = 'Philippines';
let continent = 'Asia';

let population = 110914345;
let language = 'tagalog';


// let description = country + " is in " + continent + ", and its " + population + " people speaks " +  language;

//using template literals solution

let description = `${country} is in ${continent}, and its ${population} people speaks ${language}.`
console.log(description);
*/


/// TAKING DECISIONS ///
/**
const age = 15;


if (age >= 18) {
   console.log('You can start driving lessons 🚗');
} else {
   const yearsLeft = 18 - age;
   console.log(`You can NOT drive yet 🛑. You have to wait in ${yearsLeft} years.`);
}
*/

/**
// if else condition statement

if(CONDITION){
   STATEMENT if TRUE
} else {
   STEMENT if FALSE
}
 */

/**
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);

// Assignment
1. If your country's population is greater than 33 million, log a string like this to the console:
"Portugal's population is above average." Otherwise, log a string like "Portugal's population is 22 million
below average"
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results,
and set the population back to original

// Solution


let country = 'Philippines';
let continent = 'Asia';

let population = 13;
let average = 33;
let language = 'tagalog';

if (population > 33) {
   console.log(`${country}'s population is above average.`);
} else {
   console.log(`${country}'s population is ${average - population} million below average.`)

}
*/

/// CODING CHALLENGE 2 ///
/**
 Use the BMI example from Challenge 1, and the code you already wrote, and improve it
 Your tasks:
 1. Print a nice output to the console, saying who has the higher BMI. The message is either
 "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3)
  is higher than John's (23.9)!"

Solution

const markWeight = 90;
const markHeight = 1.99;
const johnWeight = 78;
const johnHeight = 1.65;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

*/

// CONVERSION AND COERCION
/**
 Type Conversion - when we manually convert from one type to another

 Type Coercion - when JavaScripts automatically converts type behind the scene for the user.
               - happens implicitly, necessary in some situations

// Conversion

const inputYear = '1991'; //string value
console.log(inputYear + 18); // 199118 -> string + string concatenates
//manually converting
console.log(Number(inputYear) + 18); //2009

console.log(Number('Jonas')); //NaN -> not a number -> invalid number
console.log(String(12)); // '23' as a string value

//JavaScript can convert 3 types only. to a Number, to a String, and to a Boolean

//Coercion
// -happens whenever an operator is dealing with values that have different types.

console.log("I am " + 23 + " years old"); // string + number + string -> output "I am 23 years old" as a string.
//JavaScript automatically converts 23 as a string and outputs a string

console.log('23' - '10' - 3); // string + string - number -> output 10 as a number
//JavaScript automatically converts the '23' and '10' to numbers and output a number value.
// ' - ' operation converts string to number
// ' * ' operation converts string to number
// ' / ' operation converts string to number
// ' > ' operation converts string to logical value

// ' + ' operation converts number to string. Output: 23103

// ' + ' works because it's also a concatenation symbol for string but the other operation won't make sense
// that's why JavaScript use type coercion to converts the string to number

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

// Assignment //
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
4 + 6 + '4' + 9 - 4 - 2;

2. Execute the operations to check if you were right

// Solution //

Prediction
4
617
23
False
107 -> wrong -> correct output: 1043


console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(4 + 6 + '4' + 9 - 4 - 2);
*/

// Truthy and Falsy
/**

Falsy - values that are not exactly falst but will become false when we try to convert them into a boolean

5 Falsy Values
0, '', undefined, null, NAN -> when converted to boolean becomeas a falsy value


console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;

if (money) {
   console.log(`Don't spend it all ;)`);
}else {
   console.log(`You should get a job!`);
}

let height; //undefined is falsy
if (height) {
   console.log(`Height is defined`);
} else {
   console.log(`Height is undefined`);
}
 */

// Equality Operators == vs === //
/*
const age = 18;

// strict equality operator
// does not perform type coercion
// only returns true if the are exactly the same
if (age === 18) console.log(`You just became an adult`);

// loose equality operator
// performs type coercion
if (age == '18') console.log(`You just became an adult`);
// results to TRUE

const favourite = prompt(`What's your fave number?`);

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
   console.log(`it's strict equality operator!`);
} else if (favourite == '23') {
   console.log(`it's a loose equality operator`);
} else {
   console.log('please use 23 only');
}

// Equality Operators: == vs === Assignment

1. Declare a variable 'numNeighbours' based on a prompt input like this:
   prompt('How many neighbour countries does your country have?');
2. If there's only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
4. Use an else block to log 'No borders' (this block wil lbe executed when 'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours' , including 1 and 0;
6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice
what happens when there is exactly 1 border! Why is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type coversion in this situation

//Solution


let numNeighbours = Number (prompt(`How many neighbour countries does your contry have?`));

if (numNeighbours === 1) {
   console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
   console.log(`More than 1 border`);
} else {
   console.log(`No borders`)
}

*/

/** Boolean Logic */

/**
AND Operator - &&

True AND True = TRUE
True AND False = FALSE
False AND True = FALSE
False AND False = FALSE

OR Operator - ||

True OR True = TRUE
True OR False = TRUE
False OR True = TRUE
False OR False = FALSE

NOT Operator - !

NOT True = FALSE
NOT False = TRUE

 */

/** Logical Operators */

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision); //false
// console.log(hasDriversLicense || hasGoodVision); //true
// console.log(!hasDriversLicense); //false


// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//    console.log('Sarah is able to drive');
// } else {
//    console.log('Someone else should drive');
// }

// //OUTPUT: Someone else should drive

// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && isTired); //false


/** Logical Operator Assignment */

//Solution
/**
const country = 'Philippines'
const isIsland = true;
const population = 30;
const isEnglish = false;

if (isIsland && isEnglish && population < 50) {
   console.log(`Sarah can live in the ${country}.`);
} else {
   console.log(`Sarah can not live in ${country}!`);
}

*/

//Coding Challenge 3

const dScoreOne = 97;
const dScoreTwo = 112;
const dScoreThree = 101;

const kScoreOne = 109;
const kScoreTwo = 95;
const kScoreThree = 106;

const minimum = 100;

const dAverage = (dScoreOne + dScoreTwo + dScoreThree) / 3;
const kAverage = (kScoreOne + kScoreTwo + kScoreThree) / 3;

/** Task 1&2
if (dAverage > kAverage) {
   console.log('Dolphins won!');
} else {
   console.log('Koalas won!');
}
*/

/** Task 3 & 4 */
if (dAverage > minimum && dAverage > kAverage) {
   console.log('Dolphins won!');
} else if (kAverage > minimum && kAverage > dAverage) {
   console.log('Koalas won!');
} else if (dAverage == kAverage) {
   console.log('It was a draw!');
} else {
   console.log('Both averages are below 100!');
}








