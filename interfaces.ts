interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
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

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  console.log(`Made In: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(newNissan);
