registerStorageEvents(handler)

refresh_interval_ms = 300

function handler() {
    if (!storage.isActive) return;

    const events = document.querySelectorAll('#gameList > table > tbody > tr')
    if (events) {
        const validEvents = Array.from(events).filter(event => isValidEvent(event))
        if (validEvents.length === 0) {
            setTimeout(reload, refresh_interval_ms)
        }

        for (let event of validEvents) {
            let findTicketButton = event.querySelector('button')
            findTicketButton.click()
        }
    }
}

function isValidEvent(event) {
    let findTicketTexts = ['立即訂購', 'Find tickets', 'お申込みへ進む']
    let unavailableTexts = ['選購一空', 'No tickets available', '空席なし']
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