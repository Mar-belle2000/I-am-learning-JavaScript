console.log("Hello, World!")
//variables are declared using "let" and "const"
let numberOfEggs = 4 //let allows us to reassign a new value, const does not!
numberOfEggs = 6
console.log(numberOfEggs + 6)

const mySentence = "hello world"
console.log(numberOfEggs + 6, mySentence) 

//Assignment by reference
let newNumberOfEggs = numberOfEggs
console.log(newNumberOfEggs)

//data types (init, read, write)
//data types are values assigned to variables. There are two types of data types, primitive and non-primitive data types
//primitive data types are non-modifiable or immutable, while, non-primitive data types are modifiable
//primitive data types includes strings, number, null, undefined, booleans, symbols.
//non-primitive data types are objects and arrays

//strings

let myString = "hello my name is Marybelle"
let extendedString = myString + '. And I like the color yellow'
console.log(extendedString)
console.log(myString[4])

//Numbers

const myFavouriteNumbers = [83, 36, 54, 72, 90]
let oddNumbers = [
    1,
    3,
    5,
    7,
    11
]
myFavouriteNumbers[3] = 48
console.log(myFavouriteNumbers[3])
console.log(oddNumbers)


//Arrays

const groceryList = [
    'Eggs',
    'bananas',
    'Oats',
    'Vegetables'

]

groceryList[1] = 'Kiwi fruits'
console.log(groceryList[1])

//objects
//dictionary is indexed using a key
const dictionary = {
    ocean: 'A body of water between countries',
    'sea': 'A different body of water',
    myFavouriteNumber: 73
}

const user = {
    name: 'Marybelle',
    password: '********'
}
console.log(user['name'])
console.log([dictionary])

//key can also be consoled using a .
console.log(user.name, user['password'])

//A dictionary can be rewritten or replaced without cancelling the old values
user.name = 'Anabelle'
user['password'] = '****'
console.log(user)

//Null : Absence of information
const unknownNumber = null

//Undefined : A value that is not defined
const undefinedValue = undefined
console.log(unknownNumber, undefinedValue)

//Boolean : true/false value
const isMarybelleCool = true
let isCabbageDelicious = false
console.log(isMarybelleCool)
console.log(isCabbageDelicious)


//SECTION 2 : LOGIC/OPERATIVE
//Operators (+ - / %)
const sum = 3 + 5
const subtraction = 8 - 6
const division = 12 / 5
const remainder = 12 % 5
const isEven = 12 % 2
console.log('SUM: ', sum)
console.log('isEven: ', isEven)
console.log('subtraction: ', subtraction)
console.log('remainder: ', remainder)
console.log('division: ', division)


const randomNumber = 900
console.log(typeof randomNumber, typeof 'random string' )

//conditional statements
//if else

const x = 6
if (x > 10) {
    // Whatever code is written in here, is conditionally executed
    console.log('The value was greater than 10')
} else {
    console.log('The value was not greater than 10')
}


const y = 11
if (y > 10 && y < 20) {
    // The ||(or) and &&(and) logical operator combines conditional statements
    console.log('The value was greater than 10, and also less than 20')

} else {
    console.log('The value was not greater than 10, or it was greater than 20')
}

const z = 21
if (z > 10 || z < 20) {
    // The ||(or) and &&(and) logical operator combines conditional statements
    console.log('The value was greater than 10, or less than 20')

} else {
 
   console.log('The value was not greater than 10, or it was greater than 20')
}

//Loops
//While loop
let i = 0
while (i < 10) {
    console.log('THE VALUE OF I = ', 1)
    i = i + 1
}


//for loop

for (let p = 0; p < 10; p = p + 1) {
    console.log(p)
}

//example
const animals = ['duck', 'dog', 'cat', 'piggy']
console.log(animals)

for (let j = 0; j < animals.length; j++) {
    const currentAnimal = animals[j]
    if (currentAnimal == 'dog') {
        continue
    }

    if (currentAnimal == 'cat') {
        break
    }

    const stringToPrint = 'The animal at index: ' + j + 'And the value at that index is: ' + animals[j]
    console.log(stringToPrint)
}
    

// Functions
// Create a function
function printSquare() {
    console.log(4*4)
}
printSquare()

function PrintCube() {
    console.log(2*2*2)
}
PrintCube()

function printFunction(y) {
    console.log(y*y)
}
printFunction(4)

function multiplyFunction(x, y) {
    console.log(x*y)
}
multiplyFunction(8, 10)


function divideFunction(x, y) {
    console.log(x/y)
}
divideFunction(10, 2)

//Return
function addstrings(s1, s2) {
    const concatString = s1 + s2
    console.log(concatString)
    let notEqualString = 'NO'
    console.log(notEqualString)

    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        return notEqualString
    }
    return concatString
}

const newString = addstrings('Hello', ' World')
addstrings('Hello', ' Marybelle')
console.log('NEWSTRING: ', newString)

//Arrow function syntax
const arrowFunction = (arg) => {
    console.log('ARG: ', arg)
}

arrowFunction('Hellow')