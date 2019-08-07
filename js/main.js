function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const countryContainer = document.getElementById('countries');
const url = 'https://restcountries.eu/rest/v2/all';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let countries = data;
  let count = 0;
  console.log(countries);
  return countries.map(function(country) {
    let rootDiv = createNode('div');
    count++;
    rootDiv.innerHTML = `
    <a class="root-hyperlink" href="#" data-toggle="modal" data-target="#countryModal${count}">
      <div class="country-block">
        <div class="row align-items-center">
          <div class="col-4">
            <img src="${country.flag}" alt="" />
          </div>
          <div class="col-8">
            <h4 class="country-name">${country.name}</h4>
          </div>
        </div>
      </div>
    </a>
    <!-- Modal -->
    <div class="modal fade" id="countryModal${count}" tabindex="-1" role="dialog" aria-labelledby="ModalLabel${count}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel${count}">${country.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-3">
                <img src="${country.flag}" alt="" />
              </div>
              <div class="col-md-9">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Country Name</th>
                      <td>${country.name} <small>(${country.altSpellings})</small></td>
                    </tr>
                    <tr>
                      <th scope="row">Region</th>
                      <td>${country.region}</td>
                    </tr>
                    <tr>
                      <th scope="row">Alpha 2 Code</th>
                      <td>${country.alpha2Code}</td>
                    </tr>
                    <tr>
                      <th scope="row">Demonym(s)</th>
                      <td>${country.demonym}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Zone</th>
                      <td>${country.timezones}</td>
                    </tr>
                    <tr>
                      <th scope="row">Currency</th>
                      <td>${country.currencies[0].code}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    rootDiv.setAttribute('class', 'col-md-4');
    append(countryContainer, rootDiv);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
