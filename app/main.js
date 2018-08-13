import SwapiController from './components/swapi-controller.js'

class App {
  constructor() {
    this.controllers = {
      swapi: new SwapiController
    }
  }
}

const app = new App()
// @ts-ignore
window.app = app