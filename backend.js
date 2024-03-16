const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const { q, accept } = req.query;

  // Check if the Accept header is present and supported
  const supportedMediaTypes = ['application/json', 'application/xml'];
  if (accept && !supportedMediaTypes.includes(accept)) {
    // If the media type is not supported, return a 406 error
    return res.status(406).send('The requested media type is not supported.');
  }

  // Check if the search query is present
  if (!q) {
    // If the search query is not present, return a 412 error
    return alert('The search query is missing.');
  }

  // Process the search query and return the results
  const results = ['Mumbai','Kashmir','Delhi','Ujjain','Manali'];
  // ...

  // Check if there are any results
  if (results.length) {
    // If there are results, return a 200 OK response
    if (accept === 'application/json') {
      return res.json({ results });
    } else {
      return res.status(200).send(`<results>${results.map(r => `<result>${r}</result>`).join('')}</results>`);
    }
  } else {
    // If there are no results, return a 404 error
    return res.status(404).send('No results found.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000.');
});