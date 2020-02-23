






























// // Search dogs.json and filter it
// const searchDogs = async searchIt => {
//   const res = await fetch('../data/dogs.json');
//   const dogs = await res.json();
//   // console.log(dogs);

  
//  //Get matches to current text input
//  let matches = dogs.filter(dog => {
//   const regex = new RegExp(`^${searchIt}`, 'gi');
//   return dog.name.match(regex) || dogs.id.match(regex);
// });

// console.log(matches);
// };

// if(searchIt.length === 0) {
//   matches = [];
//   matchList.innerHTML = '';
// }

// // outputHtml(matches);

// // Show results in HTML
// if(matches.length > 0) {
//   const html = matches.map(match => `
//     <div class="card card-body mb-4">
//       <h4>${match.name}</h4>
//     </div>
//   `)
//   .join('');

//   matchList.innerHTML = html;

//   console.log(html);
// };
// console.log(matches);

// inputElement.addEventListener('input', () => searchDogs(inputElement.value));




