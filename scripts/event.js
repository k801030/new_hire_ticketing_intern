registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    const events = document.querySelectorAll('#gameList > table > tbody > tr')
    if (events) {
        const validEvents = Array.from(events).filter(event => isValidEvent(event))
        if (validEvents.length === 0) {
            setTimeout(reload, 1000)
        }

        for (let event of validEvents) {
            let findTicketButton = event.querySelector('button')
            findTicketButton.click()
        }
    }
}

function isValidEvent(event) {
    let findTicketTexts = ['立即訂購', 'Find tickets']
    let unavailableTexts = ['選購一空', 'No tickets available']
    return event.textContent.includes(storage.eventName) &&
        include(event.textContent, findTicketTexts) &&
        notInclude(event.textContent, unavailableTexts)
}

function include(content, words) {
    return words.some(word => content.includes(word))
}

function notInclude(content, words) {
    return !include(content, words)
}


function reload() {
    chrome.runtime.sendMessage({message: "reload()"}, function (response) {
        console.log("Response from background:", response);
    });
}