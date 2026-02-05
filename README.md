Question : Differences between interface and type in TypeScript?
Ans:
Both are used to define the shape of data, but there are some key differences.

🔹 Interface

Mainly used for object shapes, Can be extended and merged
Preferred for public APIs and class contracts
Interfaces support declaration merging (same name, auto-merged)
Eaxample:
interface User {
  name: string;
  age: number;
}

interface User {
  isAdmin: boolean; 
}


🔹 Type

More flexible. Can define primitives, unions, tuples, intersections
Cannot be merged once declared

type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive"; // union type

Question : What is keyof in TypeScript?
Ans:
keyof extracts all keys of an object type as a union of string literals.
Prevents accessing invalid properties
Example
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;


Practical Use Case (Type-safe property access)

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  id: 1,
  name: "Mehedi",
  email: "mehedi@gmail.com"
};

getValue(user, "name"); //  OK
getValue(user, "age");  //  "age" is not a key
