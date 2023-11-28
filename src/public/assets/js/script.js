//15 de agosto del 2023
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el envío del formulario
    console.log('Click')

    const searchTerm = searchInput.value.toLowerCase();
    const bodyText = document.body.innerText.toLowerCase();
    const matches = [];

    let startIndex = 0;
    let index;

    // while ((index = bodyText.indexOf(searchTerm, startIndex)) !== -1) {
    //     matches.push(index);
    //     startIndex = index + searchTerm.length;
    // }

    if (matches.length > 0) {
        let resultsHTML = '<p>Se encontraron coincidencias en los siguientes lugares:</p>';
        resultsHTML += '<ul>';

        matches.forEach(matchIndex => {
            const context = bodyText.substr(matchIndex - 20, 40); // Muestra 20 caracteres antes y después
            resultsHTML += `<li>...${context.replace(searchTerm, `<strong>${searchTerm}</strong>`)}...</li>`;
        });

        resultsHTML += '</ul>';
        searchResults.innerHTML = resultsHTML;
    } else {
        searchResults.innerHTML = `<p>No se encontraron resultados para: ${searchTerm}</p>`;
    }
})

//15 de agosto del 2023
/*
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const searchResults = document.getElementById('search-results');
    
        searchButton.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el envío del formulario
    
            const searchTerm = searchInput.value.toLowerCase();
            const bodyText = document.body.innerText.toLowerCase();
            const matches = [];
    
            let startIndex = 0;
            let index;
    
            while ((index = bodyText.indexOf(searchTerm, startIndex)) !== -1) {
                matches.push(index);
                startIndex = index + searchTerm.length;
            }
    
            if (matches.length > 0) {
                let resultsHTML = '<p>Se encontraron coincidencias en los siguientes lugares:</p>';
                resultsHTML += '<ul>';
    
                matches.forEach(matchIndex => {
                    const context = bodyText.substr(matchIndex - 20, 40); // Muestra 20 caracteres antes y después
                    resultsHTML += `<li>...${context.replace(searchTerm, `<strong>${searchTerm}</strong>`)}...</li>`;
                });
    
                resultsHTML += '</ul>';
                searchResults.innerHTML = resultsHTML;
            } else {
                searchResults.innerHTML = `<p>No se encontraron resultados para: ${searchTerm}</p>`;
            }
        });*/
       
    

