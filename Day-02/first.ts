//*Type Inference in TypeScript is the feature where TypeScript automatically determines the type of a variable or
// * expression without the developer explicitly specifying it.
//* ✅ Examples:
//* 1. Simple Variable Assignment
//let username = "Aman"; // inferred as string
//TypeScript infers username as a string. If you later try:
//username = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
//***************************************************************************************** */
//* 🔸 any – “I don’t care what type it is”
	//*•	Turns off type checking
//*	•	You can do anything with it
// 	//*•	Not safe ❌
//let money:any;
//money=true; 

//let data: any = "hello";
//data.toUpperCase();   // *✅ No error
//data();               //* ✅ No error (even if it's not a function!)
//*Hm yaha data ko 123 bhi kar denge to string ka method ya koi bhi method ye laga dega jabki wo koi datatype rahe
//*🔴 Dangerous: TypeScript won’t help you catch errors here.
//**************************************************************************************** */
//**🔸 unknown – “I don’t know what type it is yet”
// *	•	Type-safe alternative to any
// *	•	You can’t use it directly unless you narrow or assert the type
// *	•	Safer ✅
//*🔧 Syntax & Examples
//*1. Basic Declaration
//*let value: unknown;
//value = 10;
//value = "hello";
//value = true;
//*All these are allowed. So far, it looks like any.
//*2. Trying to use it directly value.toUpperCase(); // ❌ Error: Object is of type 'unknown'
// *value.toUpperCase(); // ❌ Error: Object is of type 'unknown'
//*You can’t perform operations on unknown unless you first check or narrow the type.

//*A. Type Checking with typeof
// let value: unknown = "hello";
// if (typeof value === "string") {
//   console.log(value.toUpperCase()); //* ✅ Safe
// }
// if (typeof value === "number") {
//   console.log(value.toFixed(2)); //* ✅ Safe
// }
// console.log(value)

//* Note - agar ts file me code terminal me run karna hai to use ts-node filename.ts
//*************************************************************************************** */
//*Declare Arrays in TypeScript by expicit type
//* ✅ Method 1: number[] (or string[], etc.)
// let numbers: number[] = [1, 2, 3, 4];
// let fruits: string[] = ["apple", "banana"];

//* 🧪 Example with Operations:
// let names: string[] = ["Aman", "Rohit", "Neetu"];

// names.push("Ravi");     // *✅ OK
/// names.push(123);     //* ❌ Error: number is not assignable to string[]

// *🔍 Mixed Type Array
// let mixed: (string | number |boolean)[] = ["Aman", 123, "Ravi", 456,true];//*|union sign bolte hai
//*This means the array can contain strings , numbers, boolean
//* But ts me array type inference se khud hi jan jata hai array ka type kya hai
// let numbers = [1, 2, 3, 4];         // TypeScript infers number[]
// let fruits = ["apple", "banana"];  // TypeScript infers string[]
// *🔍 TypeScript is smart enough to detect:
// *	•	All elements are numbers → number[]
// *•	All elements are strings → string[]

// *But better expilicit type hi hai;
// let marks = [];           //* inferred as any[]
// marks.push("hello");      // *❌ Allowed — not safe
// marks.push(100);          //* ❌ Allowed — mixed types
//* ✅ Fix:
// let marks: number[] = []; //* Now only numbers allowed
// marks.push(100);          //* ✅
// marks.push("hello");      //* ❌ Error
//****************************************************************************************** */

//* ✅ What is a Tuple?
//* A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
// *You know exactly what goes at each index.
//* 🔸 Syntax:let tupleName: [type1, type2, ...] = [value1, value2, ...];
//* 🔍 Example:
// let user: [string, number] = ["Aman", 22];
// 	•	user[0] must be a string
// 	•	user[1] must be a number

//  *   user[0] = "Rohit"; // ✅ OK
//* user[1] = 30;      // ✅ OK
// * user[1] = "thirty"; // ❌ Error	
// *	•	Enforces strict position + type.
// *	•	Useful for returning multiple values from a function.
// *	•	Great for pairs like [status, message], [x, y], etc.

//* 🔁 Array of Tuples

//* You can also make an array of tuples:
// let students: [string, number][] = [
//   ["Aman", 22],
//   ["Rohit", 23],
// ];
//* Each item must follow [string, number] format.

//* 🧪 Tuple with Optional Elements
// let person: [string, number?] = ["Neha"]; // second value is optional
//************************************************************************************** */
//* ✅ 1. Basic Object in TypeScript
// let person: { name: string; age: number; isStudent: boolean };

// person = {
//     name: "Rohit",
//     age: 23,
//     isStudent: true
// }
// *🔎 Explanation:
// *	•	This is how you explicitly define the structure of an object.
// *	•	If you miss a key or give the wrong type, TypeScript will show an error.



//  *   ✅ 2. Inline Object with Optional Property
//     let account: {name: string, balance: number, age?: number} = {
//     name: "Rohit",
//     balance: 420
// };


// *✅ 3. Using Type Aliases (type)
// type Student = {
//     name: string,
//     age: number
// };

// let collegeStudent: Student = {
//     name: "Rohit",
//     age: 20
// };
// *🔎 Why use type?
// *	•	To reuse object shapes across multiple places.
// *	•	More readable, cleaner code.
// *	•	You can also use union, intersection, etc., with type.


    //*✅ 4. Using interface mostly yahi use karenge kyoki type merge nai karta ye karta hai
//     interface Customer {
//     name: string,
//     account_number: number,
//     balance: number,
//     age: number
// }

// let per: Customer = {
//     name: "Rohit",
//     account_number: 230921,
//     balance: 420,
//     age: 12
// };
//* 🔎 When to use interface?
// *	•	For objects and classes (preferred for public APIs).
// *	•	Can be extended and merged, unlike type.


// *    ✅ 5. Interface Extension

//     interface Animal {
//     species: string;
// }

// interface Dog extends Animal {
//     breed: string;
// }

// let puppy: Dog = {
//     species: "Canine",
//     breed: "Labrador"
// }


// *🔎 Extension with interface:
//* 	•	You can build on existing interfaces using extends.

// *    ✅ 7. Declaration Merging with Interface
//     interface Person {
//     name: string;
// }

// interface Person {
//     age: number;
// }

// let user: Person = {
//     name: "Rohit",
//     age: 25
// };
//* ✅ TypeScript merges both interfaces automatically.

//* But this does NOT work with type:
// type Person = { name: string };
// type Person = { age: number }; // ❌ Error: Duplicate identifier 'Person'


//* ✅ 8. Optional Properties (?)
// interface Car {
//     model: string;
//     price?: number; // *optional
//}
// *🔎 Use Case:
// *	•	Useful when some data may not be available.
// *	•	TypeScript will not throw error if you skip it.



   //* 🔵 Use type when:

//  *   ✅ You want to define primitive aliases
//      type ID = string;
//      type Age = number;

// *✅ You want union or intersection types
// type Status = "success" | "error";
// type Dog = { breed: string };
// type Pet = Dog & { age: number }; // intersection

//* ✅ You want to define tuples or arrays
// type Coordinates = [number, number]; // Tuple
// type NameList = string[]; // Array


//* 🔚 Final Line:

//* 🔸 interface = Best for objects and OOP-style modeling
//* 🔹 type = Best for complex types, combinations, and flexibility


// *Type Inference- matlb obj ko bhi auto samajh jata hai kya likha hai kya nai
// const user = {
//   name: "Rohit",
//   age: 21,
//   isStudent: true,
// };
// ➡️ Inferred type:
// {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }