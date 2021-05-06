const drink: { color: string; carbonated: boolean; sugar: number } = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//! Defining a tuple using typescript
//* const pepsi: [string, boolean, number] = ['brown', true, 40];

//! Type alias
type Drink = [string, boolean, number];

//! defining similar tuples with Type alias
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['hazel', false, 0];
