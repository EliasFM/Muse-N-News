'use strict';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var hasYear = false;
var year = '';
var keyword = '';


function findKeywordID(keyword) {
  let url = "https://api.themoviedb.org/3/search/keyword?api_key=06281c636bf07bf7ba505c2c83932760&query={searchTerm}&page=1".replace('{searchTerm}', keyword);
  let promise = fetch(url)  //start the download  
    .then(function (response) {  //when done downloading
      return response.json();  //hand this Promise up
    })
    .then(function (data) {  //when done encoding
      //do something with the data!!
      let id = data.results[0].id;
      fetchMovieList(id);
    })
    .catch(function (err) {
      renderError(err);  //e.g., show in the console
    })
  return promise;
}

function renderMovie(movie) {
  let item = $('<div>', { 'class': 'carousel-item' });
  if ($.trim($(".carousel-inner").html()) == '') {
    item = $('<div>', { 'class': 'carousel-item active' });
  }

  let img = '';
  if (movie.poster_path == null) {
    img = $('<img>', { 'class': 'd-block w-100', 'src': 'imgs/no_image.png', "alt": 'no image', "title": 'no image', "style": "width:100%" })
  } else {
    let poster = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    img = $('<img>', { 'class': 'd-block w-100', 'src': poster, "alt": movie.title, "title": movie.title, "style": "width:100%" });
  }

  let caption = $('<div>', { 'class': 'carousel-caption d-none d-md-block' });
  caption.append($('<h4>' + movie.title + '</h4>'));
  caption.append($('<p>' + movie.overview + '</p>'));

  let carousel = $('.carousel-inner');
  item.append(img);
  item.append(caption);
  carousel.append(item);
}



function renderResults(search) {
  $('.carousel-inner').empty();
  if (search.results.length == 0) {
    renderError(new Error("No results found"));
  } else {
    for (let i = 0; i < search.results.length; i++) {
      renderMovie(search.results[i]);
    }
  }
}

function fetchMovieList(search) {
  let url = 'https://api.themoviedb.org/3/discover/movie?api_key=06281c636bf07bf7ba505c2c83932760&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_keywords={searchTerm}'.replace('{searchTerm}', search);
  if (hasYear) {
    url = url + '&primary_release_year=' + year;
  }
  toggleSpinner();
  let promise = fetch(url)  //start the download  
    .then(function (response) {  //when done downloading
      return response.json();  //hand this Promise up
    })
    .then(function (data) {  //when done encoding
      //do something with the data!!
      renderResults(data); //will now be encoded as a JavaScript object!
    })
    .catch(function (err) {
      renderError(err);  //e.g., show in the console
    })
    .then(toggleSpinner)
  return promise;
}


function renderError(error) {
  let p = $("<p class=\"alert alert-danger\">");
  p.text(error.message);
  $('#movies').append(p);
}

function toggleSpinner() {
  let spinner = $('.fa-spinner');
  spinner.toggleClass('d-none');
}


$('#lgbt').click(function (event) {
  event.preventDefault();
  keyword = 'lgbt';
  findKeywordID('lgbt');
});

$('#feminism').click(function (event) {
  event.preventDefault();
  keyword = 'feminism';
  findKeywordID('feminism');
});

$('#racism').click(function (event) {
  event.preventDefault();
  keyword = 'racism';
  findKeywordID('racism');
});

$('#year').click(function (event) {
  event.preventDefault();
  year = $('#searchQuery').val();
  hasYear = true;
  findKeywordID(keyword);

});