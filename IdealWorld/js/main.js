import { CardsContainer } from "./cardsContainer.js";
import { IWSystem } from "./IWSystem.js";

(() => {
    

    var iwSystem = new IWSystem();
    

    var d = new CardsContainer([]);
    //d.load()

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/Cards.json");
    xhr.responseType = "json";
    xhr.onload = function () {
        if (xhr.status == 200) {
            d.load(xhr.response)            
            d.shuffle();
            //alert(d.Legnth);
            //alert(d.draw().Name);
            //alert(d.draw().Name);
        }
        else
            alert(`Can't read cards.`);
    }
    xhr.send();

    //d.add("a");
    //d.add("b");
    //d.add("c");
    //d.add("e");
    //d.add("f");
    //console.log(d.#_data[0]);
    //d.shuffle();
    
    
    //alert(`ok`);
   /* Deck d = new Deck();*/
    //d.shffule();

})();