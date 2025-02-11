const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Improved error handling for invalid user IDs and database errors
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database Error'); // Improved error message
      return; // Stop further execution
    }
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    res.json(user);
  });
});
// ...other routes...