
class Deck {
    #_data;

    constructor(data = []) {
        this.#_data = data;
    }

    add(card) {
        this.#_data.push(card);
    }    
    
    shuffle() {
        for (let i = 0; i < this.#_data.length; i++) {
            let r = Math.floor(Math.random() * this.#_data.length);
            let d = this.#_data[i];
            this.#_data[i] = this.#_data[r];
            this.#_data[r] = d;
        }
    }

    draw() {
        return this.#_data.shift();
    }
}

export { Deck };