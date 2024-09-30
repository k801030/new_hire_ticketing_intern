export function sendMessage(sender, message) {
    console.log("send message");
    chrome.runtime.sendMessage({message: 'Hello, from content scripts'}, function (response) {
        console.log("Response from background:", response);
    });
}