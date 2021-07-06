import { Doc, Div, Text } from "../Aritiafel/Ansrabrar.js";
import { Riana } from "../Aritiafel/Characters/Heroes/Riana.js"
class IWDisplayInitializer {
    static #doc;    
    static DisplayWindow

    static initialize(iwSystem, document, displayWindow) {
        IWDisplayInitializer.#doc = document;
        IWDisplayInitializer.DisplayWindow = displayWindow;
        IWDisplayInitializer.createScreen2();
    }

    static createScreen2() {

        let newDoc = new Doc();
        let style = newDoc.createStyle(`Window`);
        style.addRule(`width`, `1300px`);
        style.addRule(`height`, `900px`);
        style.addRule(`border-style`, `solid`);
        style.addRule(`border-width`, `2px`);
        //style.addRule(`background-color`, `yellow`);
        style.addRule(`text-align`, `left`);
        style.addRule(`vertical-align`, `top`);
        style.addRule(`border-spacing`, `0`);
        //style.addRule(`box-sizing`, `border-box`);


        Riana.Initiailize(newDoc);
        //common style

        //styleBorderLine.addRule(`outline`, `none`);
        //styleBorderLine.addRule(`border-collapse`, `collapse`);
        //styleBorderLine.addRule(`box-shadow`, `2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888, 2px 0 0 0 #888 inset, 0 2px 0 0 #888 inset`);
        

        let styleCenterText = newDoc.createStyle(`CenterText`);
        styleCenterText.addRule(`text-align`, `center`);
        styleCenterText.addRule(`vertical-align`, `middle`);

        //cdw
        let cdw = Riana.CreateDiv(newDoc, `CardDetailWindow`, 300, 900,
            true, true, newDoc, styleCenterText);

        let rw = Riana.CreateDiv(newDoc, `RightWindow`, 1000, 900,
            true, true, newDoc);

        let uw = Riana.CreateDiv(newDoc, `UpWindow`, 1000, 700,
            true, true, rw);

        let phw = Riana.CreateDiv(newDoc, `PlayerHandWindow`, 1000, 200,
            true, true, rw);

        let mw = Riana.CreateDiv(newDoc, `MainWindow`, 800, 700,
            true, true, uw);

        let pdw = Riana.CreateDiv(newDoc, `PlayerDetailWindow`, 198, 700,
            true, true, uw);

        let ea = Riana.CreateDiv(newDoc, `EnemyArea`, 800, 300,
            true, false, mw);

        let ead = Riana.CreateDiv(newDoc, `EnemyAreaDown`, 800, 200,
            true, false, ea);

        let eau = Riana.CreateDiv(newDoc, `EnemyAreaUp`, 800, 100,
            true, false, ea);

        let ecf = Riana.CreateDiv(newDoc, `EnemyCommonField`, 598, 200,
            true, true, ead);

        let eef = Riana.CreateDiv(newDoc, `EnemyEnhancementField`, 99, 200,
            true, true, ead);

        let edf = Riana.CreateDiv(newDoc, `EnemyDeckField`, 99, 200,
            true, true, ead);

        let edfd = Riana.CreateDiv(newDoc, `EnemyDeckFieldDeck`, 99, 100,
            true, false, edf);

        let edfdd = Riana.CreateDiv(newDoc, `EnemyDeckFieldDropDeck`, 99, 100,
            true, false, edf);

        let pua = Riana.CreateDiv(newDoc, `PublicArea`, 800, 100,
            true, true, mw);

        let pa = Riana.CreateDiv(newDoc, `PlayerArea`, 800, 300,
            true, true, mw);

        let pau = Riana.CreateDiv(newDoc, `PlayerAreaUp`, 800, 100,
            true, false, pa);

        let pad = Riana.CreateDiv(newDoc, `PlayerAreaDown`, 800, 200,
            true, false, pa);

        let pcf = Riana.CreateDiv(newDoc, `PlayerCommonField`, 598, 200,
            true, true, pad);

        let pef = Riana.CreateDiv(newDoc, `PlayerEnhancementField`, 99, 200,
            true, true, pad);

        let pdf = Riana.CreateDiv(newDoc, `PlayerDeckField`, 99, 200,
            true, true, pad);

        let pdfd = Riana.CreateDiv(newDoc, `PlayerDeckFieldDeck`, 99, 100,
            true, false, pdf);

        let pdfdd = Riana.CreateDiv(newDoc, `PlayerDeckFieldDropDeck`, 99, 100,
            true, false, pdf);

        newDoc.printTo(IWDisplayInitializer.#doc, IWDisplayInitializer.DisplayWindow);
    }

    static createScreen() {

        
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