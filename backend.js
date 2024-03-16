const express = require('express');
const app = express();

app.get('/search', function(req, res) {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send('Please provide a search query.');
  }

  // Search for packages or records related to the query
  // ...

  // Return the search results
  res.json({
    results: [
      {
        id: 1,
        name: 'Package 1',
        description: 'Description of Package 1',
        price: 1000,
      },
      {
        id: 2,
        name: 'Package 2',
        description: 'Description of Package 2',
        price: 2000,
      },
      // ...
    ],
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000.');
});