import { IWSystem } from "../System/IWSystem.js"

class IWDisplay {
    #doc;
    #style;
    CardDetailWindow;
    StageWindow;
    PlayerDetailWindow;

    constructor(iwSystem, document, displayWindow) {
        this.#doc = document;
        let styleSheet = this.#doc.getElementsByTagName('style');
        console.log(styleSheet);
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            this.#doc.getElementsByTagName('head')[0].appendChild(styleSheet);            
        }
        this.#style = this.#doc.styleSheets[0];
    }

    createClass(name, css) {

        this.#style.insertRule(`${name}{ ${css}}`, 0);

        //alert('in');
        //alert(`${name}{${css}}`);
        //this.#style.sheet.insertRule(`${name}{${css}}`, 0);
        //console.log(this.#doc.styleSheets);
        //this.#style.innerHTML = "ada";
        //console.log(this.#style.sheet);
        //console.log(this.#doc.styleSheets);
    }

    static showCard(cards) {
        //var d = document.getElementById(aa);
        //d.style = 

    }
}

export { IWDisplay };