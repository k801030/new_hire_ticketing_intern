const EVENT_NAME = "eventName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";

const storage = {
    eventName: null,
    ticketCount: "1",
    isActive: false
}

init(handleSeat)

function handleSeat() {
    if (!storage.isActive) return;

    const seats = document.querySelectorAll('.area-list > li > a')
    if (seats) {
        seat = selectSeat(seats)
        seat.click()
    } else {

    }
}


// TODO: apply rules for selection
function selectSeat(seats) {
    let array = Array.from(seats)
    return array[array.length - 1]
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