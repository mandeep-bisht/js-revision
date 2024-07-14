const books = [
    {
      name: "To Kill a Mockingbird",
      publishedYear: 1960,
      currentEdition: "60th Anniversary Edition",
      writer: "Harper Lee"
    },
    {
      name: "1984",
      publishedYear: 1949,
      currentEdition: "Signet Classic",
      writer: "George Orwell"
    },
    {
      name: "The Great Gatsby",
      publishedYear: 1925,
      currentEdition: "Scribner Paperback Edition",
      writer: "F. Scott Fitzgerald"
    },
    {
      name: "The Catcher in the Rye",
      publishedYear: 1951,
      currentEdition: "Little, Brown and Company",
      writer: "J.D. Salinger"
    },
    {
      name: "Pride and Prejudice",
      publishedYear: 1813,
      currentEdition: "Penguin Classics",
      writer: "Jane Austen"
    },
    {
      name: "The Hobbit",
      publishedYear: 1937,
      currentEdition: "Deluxe Edition",
      writer: "J.R.R. Tolkien"
    },
    {
      name: "Moby Dick",
      publishedYear: 1851,
      currentEdition: "Harper Perennial Modern Classics",
      writer: "Herman Melville"
    },
    {
      name: "War and Peace",
      publishedYear: 1869,
      currentEdition: "Penguin Classics",
      writer: "Leo Tolstoy"
    },
    {
      name: "Crime and Punishment",
      publishedYear: 1866,
      currentEdition: "Penguin Classics",
      writer: "Fyodor Dostoevsky"
    },
    {
      name: "The Brothers Karamazov",
      publishedYear: 1880,
      currentEdition: "Penguin Classics",
      writer: "Fyodor Dostoevsky"
    }
  ];

const shwoResult = books.filter( (items)=> items.publishedYear > 1880)

console.log(shwoResult)