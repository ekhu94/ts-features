let numApples: number = 10;
let sentence: string = 'hellooooooo';

let now: Date = new Date();
let nothing: null = null;
let evenMoreNothing: undefined = undefined;

// Arrays
let lieutenants: string[] = ['Kuze', 'Awano', 'Shibusawa'];
let ages: number[] = [27, 31, 27, 30, 22];
let absolutes: boolean[] = [true, false, false, true];

// Classes
class Dog {}

let axel: Dog = new Dog();

// Object Literal
let book: { title: string; publishDate: number; numPages: number } = {
  title: 'Go the *!)@ to sleep',
  publishDate: 2013,
  numPages: 100,
};

// Function
const printNumber = (n: number): void => {
  console.log(n);
};

// Annotating a function(method) that returns the ANY type
const str = '{"name": "Lawnmower Dog", "episode": 2, "show": "Rick and Morty"}';
const json: { name: string; episode: number; show: string } = JSON.parse(str);

// Delayed Initialization
const dogs = ['Axel', 'Choco', 'Mochi'];
let myDog: string;

for (let dog of dogs) {
  if (dog === 'Axel') myDog = dog;
}

// When a variable could have multiple types
const nums = [20, 8, 1, 17, 0, -3, 140];
let negativeVal: boolean | number = false;

for (let num of nums) {
  if (num < 0) negativeVal = num;
}
