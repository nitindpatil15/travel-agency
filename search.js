// Get the search input field and search button elements
const searchInput = document.querySelector('[data-search]');

// Add a click event listener to the search button
searchInput.addEventListener('input', e => {
  const value = e.target.value
  console.log(value)
});