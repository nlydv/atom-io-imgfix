let fixCount = 0;
const images = document.querySelectorAll("img");

for ( const img of images ) {
    if ( img.hasAttribute("data-canonical-src") ) {
        let url = img.getAttribute("data-canonical-src");
        url = ( url.startsWith("http://") ? `https${url.substring(4)}` : url );

        img.setAttribute("src", url);
        img.removeAttribute("data-canonical-src");
        fixCount++;
    }
}

console.log("> Wow, they've still yet to fix these images...? 🙄");
console.log("Neel Yadav (https://neelyadav.com/)");
console.log("October 9, 2021");
console.log(fixCount);

(async () => {
    await chrome.runtime.sendMessage({count: fixCount});
})();
