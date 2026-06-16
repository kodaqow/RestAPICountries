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
            <h2><strong>${country.name.common}</strong></h2>
            <p><strong>Population: </strong> ${country.population}</p>
            <p><strong>Region: </strong> ${country.region}</p>
            <p><strong>Capital: </strong> ${country.capital}</p>
            <p><strong>Area: </strong> ${country.area} km²</p>
            <p><strong>Timezone: </strong> ${country.timezones}</p>
        </div>
        `;
    });

    container.innerHTML = html;
}

function applyFilters() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const regionValue = document.getElementById('region-filter').value;

    const filtered = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchValue);
        const matchesRegion = regionValue === '' || country.region === regionValue;
        return matchesSearch && matchesRegion;
    });

    renderCards(filtered);
}

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('region-filter').addEventListener('change', applyFilters);

loadCountries();