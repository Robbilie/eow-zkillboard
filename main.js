	
	"use strict";

	Widget.initialize({
		title: "EOW zKillboard"
	}, widget => {

		// debugging
		console.log("widget", widget);
		
		widget.tabs.addTab("zKillboard", eowEl("webview", {
			src: "https://zkillboard.com/",
			className: "hideof"
		}));
		
		widget.tabs.selectTab("zKillboard");
	});
