const book = {
  title: "1984",
  author: "George Orwell",
  isAvailable: true,

  // Method: สำหรับการยืมหนังสือ [cite: 522, 523]
  checkOut: function() {
    // 'this' refers to this book object [cite: 525]
    this.isAvailable = false;
  },

  // Method: สำหรับการคืนหนังสือ [cite: 527, 530]
  checkIn: function() {
    // 'this' refers to this book object [cite: 531]
    this.isAvailable = true;
  }
};

// ทดสอบการใช้งาน [cite: 533]
console.log(book.isAvailable); // true
book.checkOut(); // เรียกใช้ method [cite: 534]
console.log(book.isAvailable); // false [cite: 535]
book.checkIn(); // เรียกใช้ method [cite: 536]
console.log(book.isAvailable); // true [cite: 537]