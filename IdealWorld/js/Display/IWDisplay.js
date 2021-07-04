import { IWSystem } from "../System/IWSystem.js"

class IWDisplay {
    #doc;
    #style;
    DisplayWindow;
    CardDetailWindow;
    MainWindow;
    PlayerDetailWindow;
    EnemyHandWindow;
    PlayerHandWindow;

    constructor(iwSystem, document, displayWindow) {
        this.#doc = document;
        let styleSheet = this.#doc.getElementsByTagName(`style`);
        console.log(styleSheet);
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            this.#doc.getElementsByTagName(`head`)[0].appendChild(styleSheet);            
        }

        this.#style = this.#doc.styleSheets[0];
        this.DisplayWindow = displayWindow;        
        this.initialize();        
    }

    AddCssRule(sector, rule) {
        this.#style.insertRule(`${sector}{ ${rule} }`, 0);
    }

    initialize() {
        this.AddCssRule(`#${this.DisplayWindow.id}`, `width:1100px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.CardDetailWindow`, `float:left; width:300px; height:700px;`);
        this.AddCssRule(`.CardDetail`, `width:300px; height:400px;`);
        this.AddCssRule(`.CardDetailTop`, `width:300px; height:50px;`);
        this.AddCssRule(`.CardDetailMiddle`, `width:300px; height:300px;`);
        this.AddCssRule(`.CardDetailBottom`, `width:300px; height:50px;`);
        this.AddCssRule(`.CardDescription`, `width:300px; height:300px;`);
        this.AddCssRule(`.MainWindow`, `float:left; width:500px; height:700px;`);        
        this.AddCssRule(`.PlayerDetailWindow`, `float:left; width:300px; height:700px;`);        
        this.AddCssRule(`.UpperLayer`, `width:1100px; height:200px;`);
        this.AddCssRule(`.MiddleLayer`, `width:1100px; height:700px;`);
        this.AddCssRule(`.LowerLayer`, `width:1100px; height:200px;`);
        this.AddCssRule(`.EnemyHandWindow`, `width:700px; height:200px; margin:auto;`);
        this.AddCssRule(`.PlayerHandWindow`, `width:700px; height:200px; margin:auto;`);

        let upperLayer = this.#doc.createElement(`div`);
        upperLayer.id = `UpperLayer`;
        upperLayer.className = `UpperLayer`;
        
        let middleLayer = this.#doc.createElement(`div`);
        middleLayer.id = `MiddleLayer`;
        middleLayer.className = `MiddleLayer`;
        
        let lowerLayer = this.#doc.createElement(`div`);
        lowerLayer.id = `LowerLayer`;
        lowerLayer.className = `LowerLayer`;        

        let div = this.#doc.createElement(`div`);
        div.id = `EnemyHandWindow`;
        div.className = `EnemyHandWindow`;
        this.EnemyHandWindow = div;
        upperLayer.appendChild(div);

        div = this.#doc.createElement(`div`);        
        div.id = `CardDetailWindow`;
        div.className = `CardDetailWindow`;
        this.CardDetailWindow = div;
        this.DisplayWindow.appendChild(div)        

        let cd = this.#doc.createElement(`div`);
        cd.id = `CardDetail`;
        cd.className = `CardDetail`;        
        this.CardDetailWindow.appendChild(cd);

        let cdt = this.#doc.createElement(`div`);
        cdt.id = `CardDetailTop`;
        cdt.className = `CardDetailTop`;
        cd.appendChild(cdt);

        let cdtl = this.#doc.createElement(`div`);
        cdtl.id = `CardDetailTopLeft`;
        cdtl.className = `CardDetailTopLeft`;
        cdt.appendChild(cdtl);

        let cdtm = this.#doc.createElement(`div`);
        cdtm.id = `CardDetailTopMiddle`;
        cdtm.className = `CardDetailTopMiddle`;
        cdt.appendChild(cdtm);

        let cdtr = this.#doc.createElement(`div`);
        cdtr.id = `CardDetailTopRight`;
        cdtr.className = `CardDetailTopRight`;
        cdt.appendChild(cdtr);

        let cdm = this.#doc.createElement(`div`);
        cdm.id = `CardDetailMiddle`;
        cdm.className = `CardDetailMiddle`;
        cd.appendChild(cdm);

        let cdb = this.#doc.createElement(`div`);
        cdb.id = `CardDetailBottom`;
        cdb.className = `CardDetailBottom`;
        cd.appendChild(cdb);

        let cdbl = this.#doc.createElement(`div`);
        cdbl.id = `CardDetailBottomLeft`;
        cdbl.className = `CardDetailBottomLeft`;
        cdb.appendChild(cdbl);

        let cdbm = this.#doc.createElement(`div`);
        cdbm.id = `CardDetailBottomMiddle`;
        cdbm.className = `CardDetailBottomMiddle`;
        cdb.appendChild(cdbm);

        let cdbr = this.#doc.createElement(`div`);
        cdbr.id = `CardDetailBottomRight`;
        cdbr.className = `CardDetailBottomRight`;
        cdb.appendChild(cdbr);

        let cd2 = this.#doc.createElement(`div`);
        cd2.id = `CardDescription`;
        cd2.className = `CardDescription`;        
        this.CardDetailWindow.appendChild(cd2);


        



        div = this.#doc.createElement(`div`);
        div.id = `MainWindow`;
        div.className = `MainWindow`;
        this.MainWindow = div;
        this.DisplayWindow.appendChild(div);
        this.MainWindow.appendChild(upperLayer);
        this.MainWindow.appendChild(middleLayer);
        this.MainWindow.appendChild(lowerLayer);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerDetailWindow`;
        div.className = `PlayerDetailWindow`;
        this.PlayerDetailWindow = div;
        this.DisplayWindow.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerHandWindow`;
        div.className = `PlayerHandWindow`;
        this.PlayerHandWindow = div;
        lowerLayer.appendChild(div);
        
    }

    showCardDetail(card) {

        //var d = document.getElementById(aa);
        //d.style = 

    }
}

export { IWDisplay };