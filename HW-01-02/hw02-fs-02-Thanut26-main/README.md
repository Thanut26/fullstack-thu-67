[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/392eqK6V)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22108970)
# แบบฝึกหัด: การจัดการคลังหนังสือส่วนตัว

กำหนดวัตถุ (object) ที่ใช้เก็บข้อมูลเกี่ยวกับคลังหนังสือส่วนตัว โดยวัตถุนี้จะเก็บข้อมูลเกี่ยวกับหนังสือที่คุณมี เช่น ชื่อหนังสือ ผู้แต่ง ปีที่พิมพ์ และสถานะการอ่าน

## โจทย์:
ให้เขียนเมธอด (method) สำหรับวัตถุคลังหนังสือ เพื่อให้สามารถจัดการข้อมูลหนังสือได้ดังนี้:

- `addBook(book)` – เพิ่มหนังสือใหม่เข้าไปในคลัง โดย `book` จะเป็นอ็อบเจ็กต์ที่ประกอบด้วย:
  - `title` (string): ชื่อหนังสือ
  - `author` (string): ชื่อผู้แต่ง
  - `year` (number): ปีที่พิมพ์
  - `isRead` (boolean): สถานะการอ่าน (อ่านแล้วหรือยัง)

- `removeBook(title)` – ลบหนังสือออกจากคลังตามชื่อหนังสือ หากไม่พบชื่อหนังสือ ไม่ต้องทำอะไร

- `listBooks()` – แสดงรายชื่อหนังสือทั้งหมดในคลัง โดยสำหรับแต่ละเล่มให้แสดงชื่อหนังสือ ผู้แต่ง ปีที่พิมพ์ และสถานะการอ่าน

- `getUnreadBooks()` – ส่งคืนอาร์เรย์ของหนังสือทั้งหมดที่ยังไม่ได้อ่าน

## โครงสร้างเริ่มต้น

```javascript
const library = {
  books: [],

  addBook: function(book) {
    // TODO: เขียนโค้ดสำหรับเพิ่มหนังสือ
  },

  removeBook: function(title) {
    // TODO: เขียนโค้ดสำหรับลบหนังสือตามชื่อ
  },

  listBooks: function() {
    // TODO: เขียนโค้ดสำหรับแสดงรายชื่อหนังสือทั้งหมด
  },

  getUnreadBooks: function() {
    // TODO: เขียนโค้ดสำหรับส่งคืนหนังสือที่ยังไม่ได้อ่าน
  }
};
```

## ตัวอย่างการใช้งาน

```javascript
library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/
```

## Test Command

```bash
npx mocha testPersonalLib.js
```

## Console Output

```text
The book "The Great Gatsby" has been added to the library.
The book "To Kill a Mockingbird" has been added to the library.
The book "1984" has been added to the library.
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
[
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    isRead: false
  }
]
The book "1984" has been removed from the library.
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน


  Library Object Tests
The book "The Great Gatsby" has been added to the library.
    ✔ should add a book to the library
The book "The Great Gatsby" has been added to the library.
The book "The Great Gatsby" already exists in the library.
    ✔ should not add a duplicate book
The book "1984" has been added to the library.
The book "1984" has been removed from the library.
    ✔ should remove a book from the library
The book "Book 1" has been added to the library.
The book "Book 2" has been added to the library.
The book "Book 3" has been added to the library.
    ✔ should return the correct list of unread books
The book "1984" has been added to the library.
The book "Non-Existent Book" was not found in the library.
    ✔ should do nothing if trying to remove a non-existent book


  5 passing (2ms)
```





## แนวทางการเขียนโค้ดเพิ่มเติม:

- เพิ่มการตรวจสอบซ้ำ: เพิ่มการตรวจสอบว่าหนังสือที่มีชื่อเดียวกันจะไม่ถูกเพิ่มซ้ำในคลัง
- นับจำนวนหนังสือ: เพิ่มเมธอด `countBooks()` ที่ส่งคืนจำนวนหนังสือทั้งหมดในคลัง
- ค้นหาหนังสือตามชื่อ: เพิ่มเมธอด `findBook(title)` ที่ส่งคืนอ็อบเจ็กต์ของหนังสือที่มีชื่อตรงกับที่ระบุ หรือส่งคืน `null` หากไม่พบ

