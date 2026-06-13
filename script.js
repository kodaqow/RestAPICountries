let html = ``;
let countries = [];
let container = document.getElementById('countries');

async function loadCountries() {
    const url = "countries.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        countries = await response.json();

        renderCards(countries);

        console.log(countries);
    } catch (error) {
        console.error(error.message);
    }
}

function renderCards(data) {
    html = '';
    data.forEach(country => {
        html += `
        <div class="country-card">
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
            <h2>${country.name.common}</h2>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
        </div>
        `;
    });
    container.innerHTML = html;
}

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filtered = countries.filter(country => {
        return country.name.common.toLowerCase().includes(searchValue);
    });
    renderCards(filtered);
});

loadCountries();