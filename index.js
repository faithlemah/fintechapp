const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Bank!');
});

app.get('/accounts', (req, res) => {
  // Retrieve account information from database
  const accounts = [
    { id: 1, name: 'Checking', balance: 1000 },
    { id: 2, name: 'Savings', balance: 5000 }
  ];
  res.json(accounts);
});

app.post('/accounts', (req, res) => {
  // Create a new account in the database
  const account = req.body;
  // Save the account to the database and return the saved object with an ID
  account.id = 3; // Replace with actual ID from database
  res.status(201).json(account);
});

app.get('/transactions', (req, res) => {
  // Retrieve transaction history from database
  const transactions = [
    { id: 1, accountId: 1, amount: -100, date: '2023-05-10' },
    { id: 2, accountId: 1, amount: 500, date: '2023-05-09' },
    { id: 3, accountId: 2, amount: -1000, date: '2023-05-08' }
  ];
  res.json(transactions);
});

// Start the server
app.listen(port, () => {
  console.log(`Bank app listening at http://localhost:${port}`);
});