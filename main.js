	
	"use strict";

	Widget.initialize({
		title: "zKillboard",
		tabs: ["zKillboard"],
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);

		// create zkb tab
		widget.setTabContent("zKillboard", eowEl("webview", {
			src: "https://zkillboard.com/",
			className: "hideof"
		}));
	});
