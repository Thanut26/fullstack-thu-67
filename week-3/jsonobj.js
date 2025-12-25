// 1. เริ่มต้นด้วย JavaScript Object
const bookObj = {
  title: "Becoming",
  author: "Michelle Obama",
  isAvailable: false
};

// 2. แปลงเป็น JSON String (Serialization)
const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON); 
// Output: '{"title":"Becoming","author":"Michelle Obama","isAvailable":false}' [cite: 636]
console.log(typeof bookJSON); // "string" [cite: 636]

// 3. แปลง JSON String กลับเป็น Object (Parsing)
const receivedBookObj = JSON.parse(bookJSON);
console.log(receivedBookObj.author); // "Michelle Obama" [cite: 636]
console.log(typeof receivedBookObj); // "object" [cite: 636]