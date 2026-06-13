let html = ``;
let container = document.getElementById('countries');

async function loadCountries() {
    const url = "countries.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const countries = await response.json();

        countries.forEach(country => {
            html += `
            <div class="country-card">
                <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
                <h2>${country.name.common}</h2>
            </div>
        `;
        })

        container.innerHTML = html;

        console.log(countries);
    } catch (error) {
        console.error(error.message);
    }
}

loadCountries();