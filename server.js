// Import express
const express = require('express');

// Add the PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// Add the Express.js middleware
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
  app.use((req, res) => {
      res.status(404).end();
  });

// Add the function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });