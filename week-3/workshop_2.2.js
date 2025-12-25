const message = "Hello World";
const vowels = "aeiouAEIOU"; // สร้างชุดตัวแปรสระไว้เช็คทั้งตัวเล็กและใหญ่

for (const char of message) {
  // ตรวจสอบว่าตัวอักษรปัจจุบันอยู่ในชุดสระหรือไม่
  if (vowels.includes(char)) {
    console.log(char);
  }
}