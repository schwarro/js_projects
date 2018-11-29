let appId = '73632de92b826178fd025c9ef3372ed5';
let units = "metric";
let searchMethod = 'zip';

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&AAPID=${appId}&units${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}
function init(resultFromServer){
  console.log(resultFromServer);
}

document.getElementById('searchButton').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);
})
