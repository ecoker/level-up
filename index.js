
/* ------- DAY 1 ------- */


// FUNCTIONS

// 1) Write a basic function that logs out "Hello World"

let greeting = function () {
  console.log("Hello World");
}
greeting();

// 2) Write out a basic function that writes out "Hello World",
// but use the "this" property. example: this.greeting

greeting = function () {
  console.log(this.greeting);
}
let obj = {
  greeting: "Hello Worldndonfljng"
}

greeting.call(obj);

// 3) Pass a name into the function as well as using the: this.greeting to output:
// Hello, {{ Name }}

greeting = function (name) {
  console.log(`${this.greeting}, ${name}`);
}

obj = {
  greeting: `hello`
}

greeting.call(obj, "Ehren");

// 4) Call a function with an array of arguments. function should read function(one, two, three)
// but needs to be called once. Do this using classic javascript and using the spread operator
// and an array

greeting = function (one, two, three) {
  console.log(one, two, three)
}

let arr = [1, 2, 3]
greeting.apply({}, arr)

// Bonus: Do the "spread" equivalent
console.log('spread')
greeting(...arr)

// Double Bonus: do the "rest" equivalent
console.log('rest')
greeting(...[1,2], 3)
greeting(1, ...[2,3])

console.log('rest w/ function definition')
greeting = (...args) => {
  console.log(Math.min(...args))
}

greeting(...arr)

// jlngerljetjklbrjl
greeting = function (...arr) {
  console.log(arr)
}

greeting(...["hi ehren", "hi david", "hi corban"])

// 5) Construct a Lambda function
// write all three versions

lambda1 = () => {
  console.log('Some people call me an anonymous function')
}

lambda2 = first => {
  return first
}

lambda3 = (first, second) => {
  return first + second
}

lambda4 = (first, second) => first + second

lambda1()
lambda2(2)
lambda3(2, 3)
lambda4(2, 3)

// 5A) An exploration...
// Not all functions operate within the context within which they were originally called.

// Take a moment with that...

// Here's an example:
setTimeout(function() { 
  console.log('Hello!')
}, 800)

// The default for that function is to run in the GLOBAL context unless the "this" is explicitly defined.
// Longer example.

let fancyTime = {
  response: `It's fancy time`,
  whatTimeIsIt: function() {
    console.log('Let me think about that...')
    console.log('NOW', this.response)
    setTimeout(function() {
      console.log('LATER', this.response)
    }, 1200)
  }
}

fancyTime.whatTimeIsIt()


// VARIABLE DECLARATIONS

// Define multiple variables from array
const movieEndings = [
  'Robot dies',
  'Man Dies',
  'Dog Dies'
]

const [Terminator, Braveheart, TurnerAndHooch] = movieEndings;

console.log(Terminator, Braveheart, TurnerAndHooch);

let stuff = {
  yatta: 'blah',
  etc: 'yatta yatta yatta',
  ramble: 'blurgh blargh bleeep'
}

const { yatta, ramble } = stuff;

console.log(yatta, ramble);

