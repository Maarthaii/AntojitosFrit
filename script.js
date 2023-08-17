//15 de agosto del 2023
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const bodyText = document.body.innerText.toLowerCase();

        if (bodyText.includes(searchTerm)) {
            searchResults.innerHTML = `<p>Se encontró una coincidencia con: ${searchTerm}</p>`;
        } else {
            searchResults.innerHTML = `<p>No se encontraron resultados para: ${searchTerm}</p>`;
        }
    });


