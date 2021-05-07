class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle);

class Car extends Vehicle {
  constructor(color: string, public year: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('red', 1998);
console.log(car);
