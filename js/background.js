const counter = async function (msg, sender, response) {
    const tab = sender.tab.id;
    const count = msg.count;

    if ( count > 0 ) {
        await chrome.action.setBadgeBackgroundColor({color: "red", tabId: tab});
        await chrome.action.setBadgeText({text: String(count), tabId: tab});
    } else {
        await chrome.action.setBadgeText({text: ""});
    }

    return true;
};

(async () => {
    chrome.runtime.onMessage.addListener(counter);
})();
