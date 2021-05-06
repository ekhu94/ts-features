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
