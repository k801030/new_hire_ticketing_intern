const EVENT_NAME = "eventName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";


function set(key, value) {
    chrome.storage.local.set({[key]: value}, function () {
        console.log(`Data set: ${value}`);
    });
}

function get(key, callback) {
    chrome.storage.local.get([key], (result) => {
        const data = result[key] || '';
        console.log(`Data loaded: ${data}`);
        callback(data)
    });
}

const event = document.getElementById('event');
event.addEventListener('input', function (event) {
    const eventName = event.target.value;
    set(EVENT_NAME, eventName);
})

const countPicker = document.getElementById('count-picker');
countPicker.addEventListener('click', function (event) {
    updateButton(event.target.value)
    set(TICKET_COUNT, event.target.value)
})

const start = document.getElementById('start');
start.addEventListener('click', function (event) {
    set(IS_ACTIVE, true)
    isActive(true)
})

const stop = document.getElementById('stop');
stop.addEventListener('click', function (event) {
    set(IS_ACTIVE, false)
    isActive(false)
})

// set default values
get(EVENT_NAME, (result) => {
    event.value = result
})

get(TICKET_COUNT, (result) => {
    updateButton(result)
})

get(IS_ACTIVE, (result) => {
    console.log(`current is active: ${result}`)
    isActive(result)
})

function updateButton(value) {
    const buttons = countPicker.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('btn-light');
        if (button.value === value) {
            button.classList.remove('btn-light');
        }
    });
}

function isActive(value) {
    start.disabled = value;
    stop.disabled = !value;
}