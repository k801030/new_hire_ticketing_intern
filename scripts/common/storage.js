const EVENT_NAME = "eventName";
const SEAT_NAME = "seatName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";

const storage = {
    eventName: null,
    seatName: null,
    ticketCount: "1",
    isActive: false
}


// register the storages event
function registerStorageEvents(callback) {
    chrome.storage.local.onChanged.addListener((changes, namespace) => {
        for (const [key, {oldValue, newValue}] of Object.entries(changes)) {
            switch (key) {
                case EVENT_NAME:
                    storage.eventName = newValue
                    break;
                case SEAT_NAME:
                    storage.seatName = newValue
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
        storage.seatName = result[SEAT_NAME]
        storage.ticketCount = result[TICKET_COUNT]
        storage.isActive = result[IS_ACTIVE]
        callback()
    });
}