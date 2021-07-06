import { Aritiafel } from "../../Aritiafel.js"
import { Doc, Div, Rule, Text } from "../../Ansrabrar.js"
class Riana {

    static FloatStyle;
    static BorderStyle;

    static Initiailize(doc) {
        Riana.FloatStyle = doc.createStyle(`Float`);
        Riana.FloatStyle.addRule(`float`, `left`);

        Riana.BorderStyle = doc.createStyle(`Border`);
        Riana.BorderStyle.addRule(`border-style`, `solid`);
        Riana.BorderStyle.addRule(`border-width`, `1px`);
        Riana.BorderStyle.addRule(`box-sizing`, `border-box`);
    }

    static CreateDiv(doc, id, width, height, border = false, float = false, parent = null, ...styles) {
        const result = new Div(id);
        let style = doc.createStyle(id);
        style.addRule(`width`, `${width}px`);
        style.addRule(`height`, `${height}px`);        
        if (float)
            result.Styles.push(Riana.FloatStyle);
        if (border)
            result.Styles.push(Riana.BorderStyle);
        if (parent != null)
            parent.Elements.push(result);
        for (let i = 0; i < styles.length; i++)
            result.Styles.push(styles[i]);
        result.Styles.push(style);
        return result;
    }

    static CreateText(value, parent = null) {
        const result = new Text(value);
        if (parent != null)
            parent.Elements.push(result);        
        return result;
    }
}

if (Aritiafel.Characters == null)
    Aritiafel.Characters = {};
if (Aritiafel.Characters.Heroes == null)
    Aritiafel.Characters.Heroes = {};
Aritiafel.Characters.Heroes.Riana = Riana;

export { Riana };