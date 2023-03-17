class Contact {
  id: number;
  name: string;
  birthDate: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.birthDate = "string";
  }
}


interface Animal {
  name: string;
  id: number;
}

// Typing Functions
// state return value of the function
function clone(source: Animal) : Animal {
  return Object.apply({}, source);
}

const a : Animal = {id: 31, name: "Cat"};
const b = clone(a) 