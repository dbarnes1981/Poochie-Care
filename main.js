const form = document.getElementById('searchForm'),
 input = document.getElementById('search'),
 results = document.getElementById('woof'),
 pic = document.getElementById('dog_pic'),
 info = document.getElementById('dog-details'),
 btn = document.getElementById('search-btn');

//  Search dog and fetch from API
function searchDog(e) {
  e.preventDefault();

  // Clear single meal
  // info.innerHTML = '';

  // Get search term
  const term = search.value;


  
  // Check for empty
  if(term.trim()) {
    fetch(`https://dog.ceo/api/breeds/image/random/${term}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      results.innerHTML = `<h2>Search results for '${term}':</h2>`;

      if(data.message === null) {
        results.innerHTML = `<p>There are no search results. Try again!</p>`;
      } else {
        results.innerHTML = data.message.map(m => `
        <div class="dog">
          <img src="${m.message}" />
        </div>
        `)
        .join('');
      }
    });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search value');
  }
}

// Event listeners
form.addEventListener('submit', searchDog);

