const EVENT_NAME = "eventName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";

const storage = {
    eventName: null,
    ticketCount: "1",
    isActive: false
}

init(handleTicket)

function handleTicket() {
    if (!storage.isActive) return;
    const select = document.querySelector('table#ticketPriceList > tbody > tr').querySelector('select')

    if (select) {
        let option = selectTicket(select.options)
        option.selected = true
    }
    const agreement = document.querySelector('#TicketForm_agree')
    agreement.checked = true
    const captchaInput = document.querySelector('#TicketForm_verifyCode')
    captchaInput.focus()
}


// TODO: apply rules for selection
function selectTicket(options) {
    for (const option of options) {
        if (option.value === storage.ticketCount) {
            return option
        }
    }
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