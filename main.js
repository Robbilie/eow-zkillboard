	
	"use strict";

	Widget.initialize({
		title: "zKillboard",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);
		
		widget.tabs.addTab("zKillboard", eowEl("webview", {
			src: "https://zkillboard.com/",
			className: "hideof"
		}));
		
		widget.tabs.selectTab("zKillboard");
	});
