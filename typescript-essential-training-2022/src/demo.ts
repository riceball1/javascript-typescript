
// Example Record Syntax

let z: Record<string, string | number | boolean> = {name: "lois lane"}

// 
// Z.id = 1234
// Z = banana
// Z = true
// Z = () => console.log('awesome!')




//////////


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


///////////


interface Query {
  sort?: 'asc' | 'desc';
  matches(val): boolean;
}

type ContactQuery = Record<keyof Contact, Query>;


type PartialContactQuery = Partial<Record<keyof Contact, Query>>;

// example of Omit
type OmitContactQuery = Omit<Partial<Record<keyof Contact, Query>>, "address" | "status">;


// example limit to only certain types

type PickContactQuery = Partial<Pick<Record<keyof Contact, Query>, "address" | "id">>


// example of require type, opposite of partial type, which turns all properties to be required

type RequiredContactQuery = Required<ContactQuery>


function searchContacts(contacts: Contact[], query: ContactQuery) {
  return contacts.filter(contact => {
    // need to cast the call to Object.keys to the same type
    for(const property of Object.keys(contact) as (keyof Contact)[]) {
      // get the query object of this property
      const propertyQuery = query[property];
      // check to see if it matches
      if(propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  })
}


const filteredContacts = searchContacts(
    [/* contacts */],
  {

    id: {matches: (id) => id === 123},
    name: {matches: (name) => name === 'Carol Weaver'},
    // warns that phoneNumber is not a valid property on Contact
    // phoneNumber: { matches: (name) => name === 'Carol Weaver'}

})


// Extending and modifying exisiting types to pick and choose what you want in your types
// use partial helper type
// In TypeScript, partial types are types that allow for some properties of an object to be optional or partially defined. They are denoted using the Partial<T> utility type, where T represents the original type that is being modified.

// Omit helps to restrict certain properties
