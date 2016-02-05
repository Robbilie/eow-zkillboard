	
	"use strict";

	Widget.INSTANCE.loadPlugin({
		title: "zKillboard",
		name: "Robbilie/eow-zkillboard"
	}, plugin => {

		// debugging
		console.log("plugin", plugin);
		
		plugin.getBody().appendChild(eowEl("webview", {
			src: "https://zkillboard.com/",
			className: "hideof"
		}));
	});
