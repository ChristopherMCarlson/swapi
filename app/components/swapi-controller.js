import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
let app = document.getElementById('app')

const draw = function draw() {
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships('https://swapi.co/api/starships')">Get Starships</button>
  <button onclick="app.controllers.swapi.getPeople('https://swapi.co/api/people')">Get People</button>
  <button onclick="app.controllers.swapi.getSpecies('https://swapi.co/api/species')">Get Species</button>
  <button onclick="app.controllers.swapi.getPlanets('https://swapi.co/api/planets')">Get Planets</button>
  <div id="info"></div>
  `
}


function drawStarships(data) {
  let template = ``
  data.results.forEach(starship => {
    template += `
    <div>
    ${starship.name}
    </div>
    `
  });
  template += `
  <button onclick="app.controllers.swapi.getStarships('${data.previous}')">Previous</button>
  <button onclick="app.controllers.swapi.getStarships('${data.next}')">Next</button>
  `
  document.getElementById("info").innerHTML = template
}

function drawPeople(data) {
  let template = ``
  data.forEach(person => {
    template += `
    <div>
    ${person.name}
    </div>
    `
  });
  template += `
  <button onclick="app.controllers.swapi.getPeople('${data.previous}')">Previous</button>
  <button onclick="app.controllers.swapi.getPeople('${data.next}')">Next</button>
  `
  document.getElementById("info").innerHTML = template
}

function drawSpecies(data) {
  let template = ``
  data.results.forEach(species => {
    template += `
    <div>
    ${species.name}
    </div>
    `
  });
  template += `
  <button onclick="app.controllers.swapi.getSpecies('${data.previous}')">Previous</button>
  <button onclick="app.controllers.swapi.getSpecies('${data.next}')">Next</button>
  `
  document.getElementById("info").innerHTML = template
}

function drawPlanets(data) {
  let template = ``
  data.results.forEach(planet => {
    template += `
    <div>
    ${planet.name}
    </div>
    `
  });
  template += `
  <button onclick="app.controllers.swapi.getPlanets('${data.previous}')">Previous</button>
  <button onclick="app.controllers.swapi.getPlanets('${data.next}')">Next</button>
  `
  document.getElementById("info").innerHTML = template
}

function drawError(error) {
  document.getElementById('error').innerHTML = error.message
}

export default class SwapiController {
  constructor() {
    draw()
  }

  getStarships(url) {
    swapiService.getStarships(url, drawStarships)
  }

  getPeople(url) {
    swapiService.getPeople(url, drawPeople)
  }

  getSpecies(url) {
    swapiService.getSpecies(url, drawSpecies)
  }

  getPlanets(url) {
    swapiService.getPlanets(url, drawPlanets)
  }
}