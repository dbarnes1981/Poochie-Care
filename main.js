const form = document.getElementById('searchForm');
//  input = document.getElementById('search'),
//  btn = document.getElementById('search-btn'),
//  card_body = document.querySelector('.card');

//  const apiURL = 'https://api.thedogapi.com/v1/images/search';


//   async function searchDogs() {
//     const res = await fetch(`${apiURL}`);
//     const data = await res.json();
//     console.log(data[0].breeds);
// }
  
// searchDogs();

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.value;
  const res = await fetch(`https://dog.ceo/api/breed/boxer/images`);
  const data = await res.json();
  console.log(data.message)
  form.value = '';
})

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if( result.show.image ) {
//       const img = document.createElement('IMG');
//       img.src = result.show.image.medium;
//       document.body.append(img)
//     }
//   }
// }


//  function createBreedPic(picbreed) {
//   document.getElementById("card_2").innerHTML = `
//    <div class="card" id="card_2" style="width: 24rem;">
//                 <img src="/images/second_pic.jpg" class="card-img-top">
                
//                 <div class="card-body">
//                   <h5 class="card-title text-center">Card title</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//                 <ul class="list-group list-group-flush text-center">
//                   <li class="list-group-item">Cras justo odio</li>
//                   <li class="list-group-item">Dapibus ac facilisis in</li>
//                   <li class="list-group-item">Vestibulum at eros</li>
//                 </ul>
//               </div> 
//   `;
// }


// Event listeners
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   // Get input text
//  const userText = input.value.trim();

//  if (!userText) {
//    alert('Please type in a search term');
//  } else {
//   searchDogs(userText);
//  }
// });


