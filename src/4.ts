// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[];
  constructor(door: boolean, key: Key) {
    door: false;
    key: Key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract OpenDoor(key: Key): void;
}

class myHouse extends House {
  constructor(key: Key) {
    super(true, key);
  }
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is opened.');
    } else {
      console.log(console.log('Door is closed.'));
    }
  }
}
const key = new Key();

const house = new myHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);
export {};
