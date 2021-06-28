import { Deck } from "./deck.js";

(() => {
    
    
    var d = new Deck([]);
    
    d.add("a");
    d.add("b");
    d.add("c");
    d.add("e");
    d.add("f");
    //console.log(d.#_data[0]);
    //d.shuffle();
    
    d.shuffle();
    alert(d.draw());
    alert(d.draw());
    
    //alert(`ok`);
   /* Deck d = new Deck();*/
    //d.shffule();

})();