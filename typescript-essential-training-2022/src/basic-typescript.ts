
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



/*

Index Access Types

- Use reference to another interface type
- Can use more deeply nested interface types
*/


type ContactStatus = 'active' | 'inactive' | 'new'
interface Address {
    street: string;
    postalCode: string;
}

interface Contact {
    id: number;
    address: Address;
    status: ContactStatus;
}

// reference another type
type Code = Contact["id"]
// example of deeply nested types
type CodeAddress = Contact["address"]["postalCode"]

interface ContactEvent {
    contactId: Contact["id"]
}

interface ContactDeletedEvent extends ContactEvent{}

interface ContactStatusChangedEvent {
    oldStatus: Contact["status"],
    newStatus: Contact["status"]
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
}

/*
    - eventName will take any of the properities on the ContactEvents interface (e.g., deleted, statusChanged)

    reduces really advanced type checking
*/

// This example demonstrates how the type safety of TypeScript can be used to ensure that the handler function is correctly typed based on the specified event name.
function handleEvent<T extends keyof ContactEvents>(eventName: T, handler: (evt: ContactEvents[T]) => void) {
    if (eventName === "statusChanged") {
        handler({contactId: 1, oldStatus: "active", newStatus: "inactive"})
    }
}

// this is how to use the handleEvent above
handleEvent("statusChanged", evt => evt)