const add = (x: number, y: number): number => {
  return x + y;
};

//! using type inference to determine RETURN value, WILL NOT USE
const subtract = (x: number, y: number) => {
  return x - y;
};

//! returning void return type by inference
const multiple = (x: number, y: number) => {
  x * y;
};

//! type annotation in anonymous function
const divide = function (x: number, y: number): number {
  return x / y;
};

//! function with no return value takes void as return type
const logger = (msg: string): void => {
  console.log(msg);
};

//! in extremely rare case of throwing errors, return type is NEVER
const error = (msg: string): never => {
  throw new Error(msg);
};

//! pass in an object input, and use destructuring to provide the specific keys in object

//? Object
const todaysWeather: { date: Date; weather: string } = {
  date: new Date(),
  weather: 'sunny',
};

//? Weather function
const declareWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(`Today's date is ${date}.`);
  console.log(`Today's weather is ${weather}.`);
};

console.log(declareWeather(todaysWeather));
