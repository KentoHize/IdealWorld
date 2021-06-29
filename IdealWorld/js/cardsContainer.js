
class CardsContainer {
    #_data;
    ID;
    DisplayText;

    constructor(data = []) {
        this.#_data = data;
    }

    load(jsonObject) {
       this.#_data = jsonObject;        
    }

    add(card) {
        this.#_data.push(card);
    }

    get Legnth() {
        return this.#_data.length;
    }
    
    shuffle() {
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < this.#_data.length; i++) {
                let r = Math.floor(Math.random() * this.#_data.length);
                let d = this.#_data[i];
                this.#_data[i] = this.#_data[r];
                this.#_data[r] = d;
            }
        }
    }

    draw() {
        return this.#_data.shift();
    }

    //set visibleFor(playerID) {

    //}
}

export { CardsContainer };