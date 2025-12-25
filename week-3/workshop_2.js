let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

// ใช้ .filter เพื่อสร้าง Array ใหม่ที่มีเฉพาะสมาชิกที่ซ้ำกัน
const commonValues = values1.filter(item => {
  // ตรวจสอบว่า item จาก values1 มีอยู่ใน values2 และ values3 หรือไม่
  return values2.includes(item) && values3.includes(item);
});

console.log(commonValues); 
// Expected Output: ['Apple']