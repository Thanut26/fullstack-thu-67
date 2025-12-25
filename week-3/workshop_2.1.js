const guests = ['Alice', 'Bob', 'Charlie', 'David'];
let index = 0;

while (index < guests.length) {
  if (guests[index] === 'Charlie') {
    console.log("Found Charlie!");
    break; // หยุดการทำงานของ Loop ทันทีตามโจทย์สั่ง 
  }
  index++; // อัปเดตค่า index เพื่อไม่ให้เกิด Infinite Loop [cite: 329, 341]
}