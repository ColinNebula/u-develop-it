// Import express
const express = require('express');

// Add the PORT designation
const PORT = process.env.PORT || 3000;
const app = express();

// Get goes here

// Add the Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
  app.use((req, res) => {
      res.status(404).end();
  });

  
// Listener here
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });