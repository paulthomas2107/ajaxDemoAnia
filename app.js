function showCountries() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      let countries = JSON.parse(this.response);

      countries.forEach((country) => {
        console.log(country);
        let countryCard = document.createElement('div');
        const countryCardImage = document.createElement('img');
        countryCard.innerHTML = country.name.common;
        countryCardImage.src = country.flags.png;
        countryCardImage.style = 'width: 20px; height: 20px;';
        countryCard.appendChild(countryCardImage);
        document.getElementById('feed').appendChild(countryCard);
      });
    }
  };

  xhr.send();
}
