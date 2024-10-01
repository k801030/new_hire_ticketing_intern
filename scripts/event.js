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
        const event = selectOrRandom(validEvents, storage.eventName)
        const findTicketButton = event.querySelector('button')
        findTicketButton.click()
    }
}

function isValidEvent(event) {
    const findTicketTexts = ['立即訂購', 'Find tickets', 'お申込みへ進む']
    const unavailableTexts = ['選購一空', 'No tickets available', '空席なし']
    return include(event.textContent, findTicketTexts) &&
        notInclude(event.textContent, unavailableTexts)
}


function reload() {
    chrome.runtime.sendMessage({message: "reload()"}, function (response) {
        console.log("Response from background:", response);
    });
}