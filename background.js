chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("Message received from content script:", request.message);
    sendResponse({message: "Hello from background script!"});
    switch (request.message) {
        case "reload()":
            chrome.tabs.reload(sender.tab.id)
            break
        default:
            console.log("Unknown command");
    }
});