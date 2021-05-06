interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldNissan = {
  name: 'nissan',
  year: 1999,
  broken: true,
};

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`Vehicle Name: ${name}`);
  console.log(`Made In: ${year}`);
  console.log(`Broken? ${broken}`);
};

printVehicle(oldNissan);
