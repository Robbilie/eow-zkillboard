	
	"use strict";

	Widget.initialize({
		title: "zKillboard",
		width: 300,
		height: 400,
	}, widget => {

		// debugging
		console.log("widget", widget);
		
		var tabs = eowTabs("div", {}, [{
			name: "zKillboard",
			content: [
				eowEl("webview", {
					src: "https://zkillboard.com/",
					className: "hideof"
				})
			]
		}]);
		
		widget.appendChild(tabs);
		
		tabs.selectTab("zKillboard");
	});
