[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YyzhNsIj)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22108938)
# โจทย์: นับคำ / นับตัวอักษร / นับสระ (JavaScript)

ให้เขียน function เพื่อรับค่า  

- `input` -> ข้อความ  
- `type`  -> ประเภทที่จะให้นับ  
  - `type = w` ให้นับจำนวนคำ  
  - `type = c` ให้นับจำนวนตัวอักษร (ไม่รวมช่องว่าง)  
  - `type = v` ให้นับจำนวนสระ  

---

## Code ที่ให้

```javascript
function countString(input, type) {
    // Your code here

}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8


module.exports = countString;
```

---

## คำสั่งที่ใช้ run

```bash
❯ node strCount.js
Word count: 5
Character count: 21
Vowel count: 8
```

---

## คำสั่งที่ใช้ส่งโปรแกรมเพื่อเช็คคะแนน

```bash
❯ npx mocha testStrCount.js
Word count: 5
Character count: 21
Vowel count: 8


  countString
    ✔ should return the correct word count for 'Hello world!'
    ✔ should return the correct character count for 'Hello world!'
    ✔ should return the correct vowel count for 'Hello world!'
    ✔ should return 0 for an empty string when counting words
    ✔ should return 0 for an empty string when counting characters
    ✔ should return 0 for an empty string when counting vowels
    ✔ should throw an error for an invalid parameter
    ✔ should handle strings with only spaces for word count
    ✔ should handle strings with only spaces for character count
    ✔ should handle strings with only vowels


  10 passing (11ms)
```
