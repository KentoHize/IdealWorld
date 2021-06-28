import { Deck } from "./deck.js";

(() => {
    
    
    var d = new Deck([]);
    
    d.add("a");
    d.add("b");
    d.add("c");
    //console.log(d);
    //d.shuffle();
    alert(d.draw());
    alert(d.draw());
    //alert(`ok`);
   /* Deck d = new Deck();*/
    //d.shffule();

})();