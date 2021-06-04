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

 
SOLUTIOn

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