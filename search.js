$(document).ready(function() {
  $('#search-input').on('input', function() {
    const query = $(this).val();
    if (!query) {
      $('#search-results').empty();
      return;
    }

    // Send a GET request to the /search endpoint with the query parameter
    $.get('/search', { q: query }, function(data) {
      // Clear the search results
      $('#search-results').empty();

      // Add the search results to the page
      if (data.results.length) {
        const results = data.results.map(function(result) {
          return `<div class="search-result">
                    <h3>${result.name}</h3>
                    <p>${result.description}</p>
                    <a href="/packages/${result.id}">View Package</a>
                  </div>`;
        });
        $('#search-results').append(results.join(''));
      } else {
        $('#search-results').append('<p>No results found.</p>');
      }
    });
  });
});