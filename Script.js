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
const division = 12 / 5
const remainder = 12 % 5
const isEven = 12 % 2
console.log('SUM: ', sum)
console.log('isEven: ', isEven)


//conditional statements
//if else
const x = 6
if (x > 10) {
    //whatever code is written in here, is conditionally executed
    console.log('The value was greater than 10')
    console.log('The value was less than 10')
}

const y = 15
if (y > 10) {
    console.log('The value was greater than 10')
    console.log('The value was less than 10')
}

//else
else {
    console.log('The value was not greater than 10')
    console.log('the value was less than 10')
}


let num1 = 6
let num2 = 4
let result = num1 > num2

if(result){
    console.log("num1 is greater")
}

else{
console.log("num 2 is greater")
console.log("Bye...")
}
//logical operators combines conditional statements


//Type of is used to confirm the type of data type
const randomNumber = 458
console.log(typeof randomNumber, typeof 'random string')

//loops makes work more effective and efficient, we have the while loop and for loop
//while loop
let i = 0
while (i < 20) {
    console.log('THE VALUE OF I = ', i)
    i = i + 1
}


