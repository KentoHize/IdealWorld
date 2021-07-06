import { Doc, Div, Text } from "../Aritiafel/Ansrabrar.js";
import { Riana } from "../Aritiafel/Characters/Heroes/Riana.js"
class IWDisplayInitializer {
    static #doc;    
    static DisplayWindow

    static initialize(iwSystem, document, displayWindow) {
        IWDisplayInitializer.#doc = document;
        IWDisplayInitializer.DisplayWindow = displayWindow;
        IWDisplayInitializer.createScreen();
    }

    static createScreen() {

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

        let styleLineHeight50 = newDoc.createStyle(`LH50`);
        styleLineHeight50.addRule(`line-height`, `50px`);

        let styleCD = newDoc.createStyle(`CD`)
        styleCD.addRule(`text-indent`, `2em`);
        styleCD.addRule(`text-align`, `left`);
        styleCD.addRule(`padding`, `5px`);
        
        let cdw = Riana.CreateDiv(newDoc, `CardDetailWindow`, 300, 900,
            true, true, newDoc, styleCenterText);
        let cd = Riana.CreateDiv(newDoc, `CardDetail`, 300, 400,
            true, false, cdw);
        let cdt = Riana.CreateDiv(newDoc, `CardDetailTop`, 300, 50,
            false, false, cd, styleLineHeight50);
        let cdtl = Riana.CreateDiv(newDoc, `CardDetailTopLeft`, 50, 50,
            false, true, cdt);
        let cdtm = Riana.CreateDiv(newDoc, `CardDetailTopMiddle`, 200, 50,
            false, true, cdt);
        let cdtr = Riana.CreateDiv(newDoc, `CardDetailTopRight`, 50, 50,
            false, true, cdt);
        let cdm = Riana.CreateDiv(newDoc, `CardDetailMiddle`, 300, 300,
            false, false, cd);
        let cdb = Riana.CreateDiv(newDoc, `CardDetailBottom`, 300, 50,
            false, false, cd, styleLineHeight50);
        let cdbl = Riana.CreateDiv(newDoc, `CardDetailBottomLeft`, 50, 50,
            false, true, cdb);
        let cdbm = Riana.CreateDiv(newDoc, `CardDetailBottomMiddle`, 200, 50,
            false, true, cdb);
        let cdbr = Riana.CreateDiv(newDoc, `CardDetailBottomRight`, 50, 50,
            false, true, cdb);
        let cds = Riana.CreateDiv(newDoc, `CardDescription`, 300, 500,
            true, false, cdw, styleCD);
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
}

export { IWDisplayInitializer };