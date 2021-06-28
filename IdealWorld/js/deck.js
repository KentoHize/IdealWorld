
class Deck {
    _data = [];

    constructor(data = null) {
        this._data = data;
    }

    add(card) {
        this._data.push(card);
    }    
    
    shuffle() {
        let r = Math.random() * this._data.length;
        
    }

    draw() {
        return this._data.shift();
    }
}

export { Deck };