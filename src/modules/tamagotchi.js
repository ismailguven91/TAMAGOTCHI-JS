export class Tamagotchi {
  #hungerLevel = 5;
  #happinessLevel = 5;
  #name;
  #type;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  getName() {
    return this.#name;
  }
  getType() {
    return this.#type;
  }

  getHungerLevel() {
    return this.#hungerLevel;
  }

  getHappinessLevel() {
    return this.#happinessLevel;
  }

  hungerDrain() {
    const update = setInterval(() => {
      if (this.#hungerLevel < 10) {
        this.#hungerLevel += 1;
        document.querySelector("#pHunger").innerText = this.#hungerLevel;
        
      }
      else if (this.#hungerLevel == 10) {
        clearInterval(update);

        const refresh = confirm("Tamagotchi has died");
        location.reload(true)
      }
    }, 3000);
  }

  happinessDrain() {
    const update2 = setInterval(() => {
      if (this.#happinessLevel > 0) {
        this.#happinessLevel -= 1;
        document.querySelector("#pHappy").innerText = this.#happinessLevel
        
      }
      else if (this.#happinessLevel == 0) {
        clearInterval(update2);
        const refresh = confirm("Tamagotchi has died");
        location.reload(true)
      }
    }, 3000);
  }

  retartGame() {
    if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
      location.reload();
    }
  }

  feed() {
    this.#hungerLevel -= 1;
    console.log(this.feed);
  }

  play() {
    this.#happinessLevel += 1;
  }

  isTamaDead() {
    if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
      return true;
    } else {
      return false;
    }
  }
}