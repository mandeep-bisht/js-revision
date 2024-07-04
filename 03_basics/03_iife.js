// Immendiately Invoked Function Expression (IIFE)

//In normal function
(function connectDB() {
    console.log(`DB Connected`)
})();

//In arrow function
((name) => {
    console.log(`DB Connected by ${name}`)
})("Mandeep")