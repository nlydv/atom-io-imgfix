chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {

        const images = document.querySelectorAll("img");
        images.forEach(
            function(image) {
                var url = image.getAttribute("data-canonical-src");
                if (!!url) {
                    image.setAttribute("src", url);
                    image.removeAttribute("data-canonical-src", url);
                }
            }
        );

		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			console.log("You'd think that such a simple fix to such an obvious bug would've already been fixed by now...");
			console.log("Neel Yadav (https://neelyadav.com)");
			console.log("May 18, 2021");
		}

    }, 10);
});
