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
const printNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Annotating a function(method) that returns the ANY type
const str = '{"name": "Lawnmower Dog", "episode": 2, "show": "Rick and Morty"}';
const json: { name: string; episode: number; show: string } = JSON.parse(str);
console.log(json);
