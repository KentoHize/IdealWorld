//起始畫面
//
//

class IWDisplayInitializer {
    static #doc;
    static #style;
    static DisplayWindow

    static initialize(iwSystem, document, displayWindow) {
        this.#doc = document;        
        let styleSheet = this.#doc.getElementsByTagName(`style`);        
        if (styleSheet.length == 0) {
            styleSheet = document.createElement(`style`);
            styleSheet.type = `text/css`;
            this.#doc.getElementsByTagName(`head`)[0].appendChild(styleSheet);
        }

        this.#style = this.#doc.styleSheets[0];
        IWDisplayInitializer.DisplayWindow = displayWindow;
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
        this.AddCssRule(`.RightWindow`, `float:left; width:900px; height:1000px;`);
        this.AddCssRule(`.UpWindow`, `width:1010px; height:700px;`);
        this.AddCssRule(`.MainWindow`, `float:left; width:800px; height:700px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.PlayerDetailWindow`, `float:left; width:200px; height:700px; border-style:solid; border-width:1px;`);
        //this.AddCssRule(`.UpperLayer`, `width:800px; height:100px;`);
        //this.AddCssRule(`.MiddleLayer`, `width:800px; height:700px;`);
        /*this.AddCssRule(`.EnemyHandWindow`, `width:800px; height:100px; margin:auto; border-style:solid; border-width:1px;`);*/
        this.AddCssRule(`.PlayerHandWindow`, `width:1000px; height:200px; margin:auto; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.EnemyArea`, `width:800px; height:300px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.PublicArea`, `width:800px; height:100px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.PlayerArea`, `width:800px; height:300px; border-style:solid; border-width:1px;`);

        this.AddCssRule(`.EnemyStage`, `float:left; width:700px; height:300px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.EnemyAreaRight`, `float:left; width:90px; height:300px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.EnemyDeck`, `width:100px; height:150px; border-style:solid; border-width:1px;`);
        this.AddCssRule(`.EnemyDropDeck`, `width:100px; height:150px; border-style:solid; border-width:1px;`);

        //let upperLayer = this.#doc.createElement(`div`);
        //upperLayer.id = `UpperLayer`;
        //upperLayer.className = `UpperLayer`;

        //let middleLayer = this.#doc.createElement(`div`);
        //middleLayer.id = `MiddleLayer`;
        //middleLayer.className = `MiddleLayer`;



        //let div = this.#doc.createElement(`div`);
        //div.id = `EnemyHandWindow`;
        //div.className = `EnemyHandWindow`;
        //this.EnemyHandWindow = div;
        //upperLayer.appendChild(div);
        var div;
        let cdw = this.#doc.createElement(`div`);
        cdw.id = `CardDetailWindow`;
        cdw.className = `CardDetailWindow`;
        IWDisplayInitializer.DisplayWindow.appendChild(cdw);

        let cd = this.#doc.createElement(`div`);
        cd.id = `CardDetail`;
        cd.className = `CardDetail`;
        cdw.appendChild(cd);

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
        cdw.appendChild(cd2);

        let rw = this.#doc.createElement(`div`);
        rw.id = `RightWindow`;
        rw.className = `RightWindow`;
        IWDisplayInitializer.DisplayWindow.appendChild(rw);

        let uw = this.#doc.createElement(`div`);
        uw.id = `UpWindow`;
        uw.className = `UpWindow`;
        rw.appendChild(uw);

        let mw  = this.#doc.createElement(`div`);
        mw.id = `MainWindow`;
        mw.className = `MainWindow`;
        uw.appendChild(mw);        
        
/*        this.MainWindow.appendChild(upperLayer);*/
        /*this.MainWindow.appendChild(middleLayer);*/

        let ea = this.#doc.createElement(`div`);
        ea.id = `EnemyArea`;
        ea.className = `EnemyArea`;

        let pa = this.#doc.createElement(`div`);
        pa.id = `PublicArea`;
        pa.className = `PublicArea`;

        let pla = this.#doc.createElement(`div`);
        pla.id = `PlayerArea`;
        pla.className = `PlayerArea`;

        mw.appendChild(ea);
        mw.appendChild(pa);
        mw.appendChild(pla);

        div = this.#doc.createElement(`div`);
        div.id = `EnemyStage`;
        div.className = `EnemyStage`;
        ea.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `EnemyStage`;
        div.className = `EnemyStage`;
        ea.appendChild(div);

        let ear = this.#doc.createElement(`div`);
        ear.id = `EnemyAreaRight`;
        ear.className = `EnemyAreaRight`;
        ea.appendChild(ear);

        div = this.#doc.createElement(`div`);
        div.id = `EnemyDeck`;
        div.className = `EnemyDeck`;
        ear.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `EnemyDropDeck`;
        div.className = `EnemyDropDeck`;
        ear.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerDetailWindow`;
        div.className = `PlayerDetailWindow`;        
        uw.appendChild(div);

        div = this.#doc.createElement(`div`);
        div.id = `PlayerHandWindow`;
        div.className = `PlayerHandWindow`;        
        rw.appendChild(div);

    }
}

export { IWDisplayInitializer };