

STORE = {
    breed: "",
    breedURL: 'https://dog.ceo/api/breeds/image/random/',
    default: 'https://dog.ceo/api/breeds/image/random/'
}

function getDogImage() {
  fetch(STORE.breedURL)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if(responseJson.status === "success") {
    doggoUrl = responseJson.message;
    $('.results-img').replaceWith(`<img src = ${doggoUrl} class = "results-img">`);
    $('.results').show();
  }
  if(responseJson.status === "error") {$('#bad-dog').replaceWith(`<h2>That breed does not exist...yet.</h2>`)
  $('.bad-search').show();
    };
}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('section').hide();
    const breed = $('#breed').val();
    STORE.breed = breed;
    STORE.breedURL = `https://dog.ceo/api/breed/${STORE.breed}/images/random`;
    console.log(STORE.breedURL);
    getDogImage();
  });
}

$(function() {
    watchForm();
});