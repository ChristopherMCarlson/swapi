import Person from "../models/Person.js";

let people = {}


export default class SwapiService {

  getStarships(url, callback) {
    return fetch(url)
      .then(res => res.json())
      .then(function (res) {
        console.log(res)
        return res
      })
      .then(callback)
      .catch(x => console.log(x))

  }

  getPeople(url, callback) {
    return fetch(url)
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          let person = new Person(rawPerson)
          people[person.id] = person
          return person
        })
        console.log(myPeople)
        callback(myPeople)
      })
      .catch(x => console.log(x))
  }

  getSpecies(url, callback) {
    return fetch(url)
      .then(res => res.json())
      .then(callback)
      .catch(x => console.log(x))
  }

  getPlanets(url, callback) {
    return fetch(url)
      .then(res => res.json())
      .then(callback)
      .catch(x => console.log(x))
  }
}