//Object Creation and Access
var book = {
  title: "The 5AM Club",
  author: "Robin Sharma",
  year: 2020,
};
console.log(book);

console.log(
  `The title of the book is ${book.title} and the author is ${book.author}`
);

//Object Methods
var books = {
  title: "The 5AM Club",
  author: "Robin Sharma",
  year: 2020,
  printBook: function () {
    return `Title: "${this.title}", Author: ${this.author}`;
  },
};

console.log(books.printBook());

var bookss = {
  title: "The 5AM Club",
  author: "Robin Sharma",
  year: 2020,
  printBook: function (year) {
    bookss.year = year;
  },
};

bookss.printBook(10);
console.log(bookss);

//NESTED OBJECTS

const library = {
  name: "Dr Mudit",
  booksIssued: ["Fairy Tail", "The NightMare"],
};

console.log(library);

const libraryy = {
  name: "Mudit Library",
  books: [
    { title: "5AM Club", author: "Robin Sharma", year: 2020 },
    { title: "The power", author: "Earn Nightingale", year: 1800 },
  ],

  loglibraryName: function () {
    console.log(`Name of library is : ${this.name}`);
  },
  //   logbooks: function () {
  //     this.books.forEach((book) => {
  //       console.log(book.title);
  //     });
  //   },

  logBookDetails: function () {
    console.log("Book Details:");
    this.books.forEach((book) => {
      //   for (let property in book) {
      //     console.log(`${property}: ${book[property]}`);
      //   }

      const keys = Object.keys(book);
      const values = Object.values(book);

      keys.forEach((key, index) => {
        console.log(`${key} : ${values[index]}`);
      });
      console.log("---");
    });
  },
};

libraryy.loglibraryName();
libraryy.logBookDetails();
