function Students() {
    const students = [
        {
             id: 1,
              name: "Alia",
              age: 25 },
        {
             id: 2,
              name: "Erum",
               age: 30 },
        { id: 3,
             name: "Fareen",
              age: 28 }
    ];

    return students.map(students=> `ID: ${students.id}, Name: ${students.name}, Age: ${students.age}`);}

// Calling the function
console.log(Students());




// data.js
/*function getData() {
    return [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 }
    ];
}

// Export using CommonJS module.exports
module.exports = getData;*/
