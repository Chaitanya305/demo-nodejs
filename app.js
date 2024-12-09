const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded secret (SonarQube will flag this)
const SECRET_KEY = '1234567890abcdef';

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Unused function (SonarQube will flag this)
function unusedFunction() {
    console.log('This function is not used anywhere.');
}

// Example of SQL Injection vulnerability
app.get('/user', (req, res) => {
    const userId = req.query.id; // User-provided input directly used in SQL
    const sqlQuery = `SELECT * FROM users WHERE id = ${userId}`;
    console.log(sqlQuery);
    res.send('Check logs for query');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

