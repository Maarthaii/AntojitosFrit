document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('boton').addEventListener('click', function(event) {
    event.preventDefault();
    buscar();
  });
  
function buscar() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  const bodyText = document.body.innerText.toLowerCase();

  const matches = [];

  let startIndex = 0;
  let index;

  while ((index = bodyText.indexOf(searchTerm, startIndex)) !== -1) {
    matches.push(index);
    startIndex = index + searchTerm.length;
  }

  mostrarResultados(matches, searchTerm);
}

function mostrarResultados(matches, searchTerm) {
  const resultsContainer = document.getElementById('search-results');

  if (matches.length > 0) {
    let resultsHTML = `<p>La palabra que buscas coincide en estos lugares: </p>`;
    resultsHTML += '<ul>';
    console.log(resultsHTML)
    matches.forEach(matchIndex => {
      const context = document.body.innerText.substr(matchIndex - 20, 40); 
      resultsHTML += `<li>...${context.replace(searchTerm, `<strong>${searchTerm}</strong>`)}...</li>`;
    });

    resultsHTML += '</ul>';
    resultsContainer.innerHTML = resultsHTML;
  } else {
    resultsContainer.innerHTML = `<p>No se encontraron resultados para: ${searchTerm}</p>`;
  }
}

var about = document.getElementById('about');
var message = document.querySelector('.message');

about.addEventListener('click', function(event){
  event.preventDefault();

  message.classList.toggle('seeMessage');
})

});

