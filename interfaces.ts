interface Reportable {
  summary(): string;
}

const newNissan = {
  name: 'nissan',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Vehicle name: ${this.name}`;
  },
};

const myDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My ${this.color} drink tastes like a fried boot.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newNissan);
printSummary(myDrink);
