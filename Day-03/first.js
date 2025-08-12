"use strict";
//*interface ke faida
const obj = {
    name: "Rohit",
    age: 20,
    gender: "male",
    //* adhaar:1234 rakho ya na rakho optional
};
// *****************************************************************************************
//*Utility Types of Objects
// 1:Partial<Person>
// 2:Required<Person>
// 3:Readonly<Person>
// interface customer{
//     name:string,
//     age:number,
//     balance:number
// }
// 1️⃣ Partial<Type>
// const c1: Partial<customer> = {
//   name: "Aman"
// };
// ✅ Kya karta hai:
// Sabhi properties optional bana deta hai.
// 🧠 Use when:
// 	•	Tum object ko gradually populate kar rahe ho.
// 	•	For example: form filling, step-by-step object creation.
//     2️⃣ Required<Type>
//     const c2: Required<customer> = {
//   name: "Ravi",
//   age: 25,
//   balance: 10000
// };
// ✅ Kya karta hai:
// Ensure karta hai ki har property required ho, even if original interface me optional thi.
// 3️⃣ Readonly<Type>
// const c3: Readonly<customer> = {
//   name: "Shyam",
//   age: 30,
//   balance: 5000
// };
// c3.name = "Ram"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
// ✅ Kya karta hai:
// Object ko immutable bana deta hai — koi bhi property change nahi kar sakte baad mein.
// 🧠 Use when:
// 	•	Tum object ko accidentally change hone se bachana chahte ho (e.g., config object).
// *****************************************************************************************
//* 💡 What is an Array of Objects?
//*It’s simply an array where each element is an object.
// ✅ JavaScript Example:
// const users = [
//   { name: "Aman", age: 22 },
//   { name: "Rohit", age: 25 },
//   { name: "Priya", age: 28 }
// ];
// 🔸 users is an array
// 🔸 Each element is an object with properties name and age
// 🔍 How to Access Values?
// console.log(users[0].name);  // Aman
// console.log(users[1].age);   // 25
// You can loop through them:
// users.forEach(user => {
//   console.log(user.name + " is " + user.age + " years old.");
// });
// *✅ TypeScript Version (with Interface):
// interface User {
//   name: string;
//   age: number;
// }
// const users: User[] = [
//   { name: "Aman", age: 22 },
//   { name: "Rohit", age: 25 },
//   { name: "Priya", age: 28 }
// ];
// Now, TypeScript ensures every object in the array matches the User structure
// ⚙️ Common Operations:
// 🔹 Add a new object:users.push({ name: "Ravi", age: 30 });
// 🔹 Find someone by name:const person = users.find(user => user.name === "Rohit");
// 🔹 Filter people older than 24:const olderUsers = users.filter(user => user.age > 24)
// 🔥 Real Life Example – Products
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
// }
// const products: Product[] = [
//   { id: 1, name: "Mobile", price: 15000, inStock: true },
//   { id: 2, name: "Laptop", price: 55000, inStock: false },
//   { id: 3, name: "Keyboard", price: 1500, inStock: true }
// ];
// 🧠 Why Important?
// Because in real-world apps (React, Node, APIs), you’ll deal with a lot of array of objects — users, products, blogs, comments, etc
// *Important example.
// ✅ Code:
// interface people {
//   name: string;
//   age: number;
// }
// interface manager {
//   salary: number;
//   id: string;
// }
// const arr: (people | manager)[] = [
//   { name: "Rohit", age: 24 },
//   { salary: 24, id: "cid" }
// ];
// ✅ Explanation:
// 🔹 interface people
// Defines a type where every object must have:
// 	•	name: string
// 	•	age: number
// 🔹 interface manager
// Defines a type where every object must have:
// 	•	salary: number
// 	•	id: string
// 🔹 const arr: (people | manager)[]
// This means:
// “arr is an array of objects, where each object can either be of type people OR type manager.”
// { name: "Rohit", age: 24 }        ✅ This is a `people`
// { salary: 24, id: "cid" }         ✅ This is a `manager`
// *****************************************************************************************
//*Function
//* ✅ 1. Basic Function with Types
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
// console.log(greet("Aman")); // Hello, Aman
// 🔹 name: string → input parameter type
// 🔹 : string → return type
//*Function Returning Nothing (void)
//  function logMessage(msg: string): void {
//   console.log("Log:", msg);
// }
// logMessage("aman")
// *****************************************************************************************
//*optional Parameter
//* “Ye parameter de diya to thik, nahi diya to bhi chalega.”
//* ✅ Syntax:
// function greet(name?: string) {
//   if (name) {
//     console.log(`Hello, ${name}!`);
//   } else {
//     console.log("Hello, Guest!");
//   }
// }
//* 🔹 ? lagane ka matlab:
// 	•	name optional hai.
// 	•	Agar name pass karega to use karega.
// 	•	Agar nahi karega to default ya alternate logic chalega.
// *✅ Example 1: Function with Optional Parameter
// function sum(a: number, b?: number): number {
//   return b ? a + b : a;
// }
// console.log(sum(5));      // ➤ 5
// console.log(sum(5, 10));  // ➤ 15
// function sum(a: number, b?: number): number {
//   return b ? a + b : a;
// }
// console.log(sum(5));      // ➤ 5
// console.log(sum(5, 10));  // ➤ 15
// *****************************************************************************************
//*Default parameter
//*“Agar koi value na di jaye, to ek default value use ho jaaye.”
//* function greet(name: string = "Guest") {
//*   console.log(`Hello, ${name}!`);
// }
//* 📌 Iska matlab:
// *	•	Agar name nahi diya → "Guest" use hoga
// *	•	Agar diya → wahi value use hogi
//*Arrow function
