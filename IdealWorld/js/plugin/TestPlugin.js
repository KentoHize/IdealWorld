/*:
 * @target MZ
 * @plugindesc Test
 * @author KentoHize
 *
 * @help TestPlugin.js
 *
 * Test Description
 *
 * @command set
 * @text Set Args
 * @desc as title
 * 
 * @command C1
 * @text C1
 * @desc as title
 * 
 * @arg Arg1
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text Arg1
 * @desc Number Should be used
 */


(() => {
    $dataProfession = null;
    $dataCard = null;
    const pluginName = "TestPlugin";

    

    PluginManager.registerCommand(pluginName, "C1", args => {
        console.log("c1");
        //this.character(0);
        //var My_Window;
        //My_Window.prototype = Object.create(Window_Message.prototype);

    });

    
    PluginManager.registerCommand(pluginName, "set", args => {

        
        //console.log(args["Arg1"]);
        //console.log(Number(args.Arg1));
        const arg1 = Number(args.Arg1);
        //console.log(arg1);
        //console.log($dataCards[0].Name);
        DataManager.loadDataFile("$dataCards", "Cards/Cards.json");
        DataManager.loadDataFile("$dataProfession", "Cards/Profession.json");

        $gameVariables.setValue(2, 1);


        //console.log($gameVariables.value(0));
        //console.log($gameVariables._data[1]);
        console.log($gameVariables);
        console.log($gameVariables.value(1));
        console.log($gameVariables.value(2));
            //.setValue(1, 1);
        //console.log($dataActors);

        setTimeout(() => {
            console.log($dataCards[0].Name);
            console.log($dataProfession[0].CName);
            //console.log(window["$dataProfession"]);
            
        }, 2000);
        

        //const arg1 = Number(args.Arg1);
        //const arg1 = Number(args.Arg1);
        //const commonEventId = Number(args.commonEventId);
       // const picture = $gameScreen.picture(pictureId);
        //if (picture) {
        //    picture.mzkp_commonEventId = commonEventId;
        //}
    });

    

    //Input.isPressed()
    //console.log("hello world");
    //console.log(args[1]);
})();


//var lh = Window_Base.prototype.lineHeight() * 2

//function My_Window() {
//    this.initialize.apply(this, arguments);
//}

//My_Window.prototype = Object.create(Window_Base.prototype);
//My_Window.prototype.constructor = My_Window;

//My_Window.prototype.initialize = function () {
//    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, lh);
//    this.refresh();
//}

//My_Window.prototype.refresh = function () {
//    this.contents.clear();
//    this.drawText(text, 0, 0);

//    var smstart = Scene_Map.prototype.start;
//    Scene_Map.prototype.start = function () {
//        smstart.apply(this, arguments);
//        this.my_window = new My_Window();
//        this.addChild(this.my_window);
//    }
//}
