const express = require('express');        // import express
const app = express();                     // create express app

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            employeeName: "Ayush",
            employeeSalary: 1000000
        },
        {
            id: 2,
            employeeName: "Aman",
            employeeSalary: 900000
        }
    ]);
});

const PORT = 3000;                          // define port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
