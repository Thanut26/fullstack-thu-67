const library = {
    books: [],

    addBook: function (book) {
        // ตรวจสอบว่ามีหนังสือซ้ำหรือไม่
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === book.title) {
                console.log(`The book "${book.title}" already exists in the library.`);
                return;
            }
        }

        this.books.push(book);
        console.log(`The book "${book.title}" has been added to the library.`);
    },

    removeBook: function (title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1);
                console.log(`The book "${title}" has been removed from the library.`);
                return;
            }
        }

        console.log(`The book "${title}" was not found in the library.`);
    },

    listBooks: function () {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            let status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";

            console.log(
                `${i + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`
            );
        }
    },

    getUnreadBooks: function () {
        let unreadBooks = [];

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].isRead === false) {
                unreadBooks.push(this.books[i]);
            }
        }

        return unreadBooks;
    }
};


library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();

console.log(library.getUnreadBooks());

library.removeBook("1984");
library.listBooks();


module.exports = library;
