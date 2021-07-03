
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

    save() {
        return this.#_data;
    }

    add(card) {
        this.#_data.push(card);
    }

    addBottom(card) {
        this.#_data.unshift(card);
    }

    moveToTop(target, index = 0, count = 1) {
        target.add(this.#_data.splice(index, count));
    }

    moveToBottom(target, index = 0, count = 1) {
        target.addBottom(this.#_data.splice(index, count));
    }

    moveAndShuffle(target, index = 0, count = 1) {
        target.add(this.#_data.splice(index, count));
        target.shuffle();
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

    draw(index = 0) {
        return this.#_data.shift();
    }

    drawBottom() {
        return this.#_data.pop();
    }
}

export { CardsContainer };