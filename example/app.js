// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var mymodule = require('com.appc.mymodule');
Ti.API.info("module is => " + mymodule);

label.text = mymodule.example();

var someView = Ti.UI.createView({ backgroundColor:'green', left: 20, width:30, height:40});
//track this view object ...
someView.setViewWatch({});
win.add( someView );

var anotherView = Ti.UI.createView({ backgroundColor:'red', width:30, height:40});
anotherView.setViewWatch({});
win.add( anotherView );



Ti.API.info("module exampleProp is => " + mymodule.exampleProp);
mymodule.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = mymodule.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}

