const person = {
  firstName: 'Mikasa',
  lastName: 'Ackerman',
  age: 16,
  nationalities: ['asian', 'eldian'],
  coords: {
    lat: 0,
    long: 15,
  },
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  setAge(): void {
    this.age += 1;
  },
};

const { firstName, lastName }: { firstName: string; lastName: string } = person;
const { age }: { age: number } = person;
const { nationalities }: { nationalities: string[] } = person;
const { fullName }: { fullName(): void } = person;

console.log(fullName());
