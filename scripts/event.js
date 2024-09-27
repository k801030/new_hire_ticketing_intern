const EVENT_NAME = "eventName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";

const storage = {
    eventName: null,
    ticketCount: "1",
    isActive: false
}

init(handleEvent)

function handleEvent() {
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

// common init function
function init(callback) {
    chrome.storage.local.onChanged.addListener((changes, namespace) => {
        for (let [key, {oldValue, newValue}] of Object.entries(changes)) {
            switch (key) {
                case EVENT_NAME:
                    storage.eventName = newValue
                    break;
                case TICKET_COUNT:
                    storage.ticketCount = newValue;
                    break;
                case IS_ACTIVE:
                    storage.isActive = newValue;
                    break;
            }
            console.log(`${key} update to ${newValue}`)
        }

        callback()
    });

    chrome.storage.local.get(null, (result) => {
        storage.eventName = result[EVENT_NAME]
        storage.ticketCount = result[TICKET_COUNT]
        storage.isActive = result[IS_ACTIVE]
        callback()
    });
}