
// type inference
let x = 5; // infers a type is number
let y: number; // explicitly assign a type


// interface

interface Person {
    id: number;
    name: ContactName;
    birthDate: Date;
    role?: string; // conditional
    status?: PersonStatus
}

// allows strictly to only have certain values
enum PersonStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}


let primaryPerson: Person = {
    id: 6,
    name: 'Juan',
    birthDate: new Date('01/01/1990'),
    status: PersonStatus.New
}

// alias for types
type ContactName = string;
