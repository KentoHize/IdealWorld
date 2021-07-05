//起始畫面
//
//

class IWDisplayInitializer {
    static #doc;
    static #style;
    
    static initialize(iwSystem, document, displayWindow) {
        this.#doc = document;        
        let styleSheet = this.#doc.getElementsByTagName(`style`);        
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            this.#doc.getElementsByTagName(`head`)[0].appendChild(styleSheet);
        }

        this.#style = this.#doc.styleSheets[0];
        this.DisplayWindow = displayWindow;
        IWDisplayInitializer.createScreen();
    }

    static AddCssRule(sector, rule) {
        this.#style.insertRule(`${sector}{ ${rule} }`, 0);
    }

    static createScreen() {

        this.AddCssRule(`#${this.DisplayWindow.id}`, `width:1305px; height:900px; border-style:solid; border-width:2px;`);
        this.AddCssRule(`.CardDetailWindow`, `float:left; width:300px; height:900px; border-style:solid; border-width:1px; text-align:center; vertical-align: middle;`);
        this.AddCssRule(`.CardDetail`, `width:300px; height:400px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.CardDetailTop`, `width:300px; height:50px; line-height:50px;`);
        this.AddCssRule(`.CardDetailTopLeft`, `float:left; width:50px; height:50px;`);
        this.AddCssRule(`.CardDetailTopMiddle`, `float:left; width:200px; height:50px;`);
        this.AddCssRule(`.CardDetailTopRight`, `float:left; width:50px; height:50px;`);
        this.AddCssRule(`.CardDetailMiddle`, `width:300px; height:300px;`);
        this.AddCssRule(`.CardDetailBottom`, `width:300px; height:50px; line-height:50px;`);
        this.AddCssRule(`.CardDetailBottomLeft`, `float:left; width:50px; height:50px;`);
        this.AddCssRule(`.CardDetailBottomMiddle`, `float:left; width:200px; height:50px;`);
        this.AddCssRule(`.CardDetailBottomRight`, `float:left; width:50px; height:50px;`);
        this.AddCssRule(`.CardDescription`, `width:288px; height:488px; border-style:solid; border-width:1px; padding:5px; text-align:left; text-indent:2em;`);
        this.AddCssRule(`.RightWindow`, `float:left; width:1000px; height:900px;`);
        this.AddCssRule(`.UpWindow`, `width:1010px; height:700px;`);
        this.AddCssRule(`.MainWindow`, `float:left; width:800px; height:700px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.PlayerDetailWindow`, `float:left; width:200px; height:700px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.UpperLayer`, `width:800px; height:100px;`);
        this.AddCssRule(`.MiddleLayer`, `width:800px; height:600px;`);
        /*        this.AddCssRule(`.LowerLayer`, `width:500px; height:200px;`);*/
        this.AddCssRule(`.EnemyHandWindow`, `width:800px; height:100px; margin:auto; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.PlayerHandWindow`, `width:1000px; height:200px; margin:auto; border-style:solid; border-width:1px;`);

        let upperLayer = this.#doc.createElement(`div`);
        upperLayer.id = `UpperLayer`;
        upperLayer.className = `UpperLayer`;

        let middleLayer = this.#doc.createElement(`div`);
        middleLayer.id = `MiddleLayer`;
        middleLayer.className = `MiddleLayer`;

        //let lowerLayer = this.#doc.createElement(`div`);
        //lowerLayer.id = `LowerLayer`;
        //lowerLayer.className = `LowerLayer`;        

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

        let rw = this.#doc.createElement(`div`);
        rw.id = `RightWindow`;
        rw.className = `RightWindow`;
        this.DisplayWindow.appendChild(rw);

        let uw = this.#doc.createElement(`div`);
        uw.id = `UpWindow`;
        uw.className = `UpWindow`;
        rw.appendChild(uw);

        div = this.#doc.createElement(`div`);
        div.id = `MainWindow`;
        div.className = `MainWindow`;
        uw.appendChild(div);
        this.MainWindow = div;
        this.MainWindow.appendChild(upperLayer);
        this.MainWindow.appendChild(middleLayer);
        /*this.MainWindow.appendChild(lowerLayer);*/


        div = this.#doc.createElement(`div`);
        div.id = `PlayerDetailWindow`;
        div.className = `PlayerDetailWindow`;
        this.PlayerDetailWindow = div;
        uw.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerHandWindow`;
        div.className = `PlayerHandWindow`;
        this.PlayerHandWindow = div;
        rw.appendChild(div);

    }
}

export { IWDisplayInitializer };