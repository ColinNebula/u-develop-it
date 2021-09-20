// Import express
const express = require('express');
// Importing connection route
const db = require('./db/connection');

//A Api Routes
const apiRoutes = require('./routes/apiRoutes');
// Add the PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// Add the Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});