const EVENT_NAME = "eventName";
const SEAT_NAME = "seatName";
const TICKET_COUNT = "ticketCount";
const IS_ACTIVE = "isActive";
const VERIFICATION_CODE = "verificationCode";


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
    set(EVENT_NAME, event.target.value);
})

const seat = document.getElementById('seat');
seat.addEventListener('input', function (event) {
    set(SEAT_NAME, event.target.value);
})

const verificationCode = document.getElementById('verification-code');
verificationCode.addEventListener('input', function (event) {
    set(VERIFICATION_CODE, event.target.value);
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

const isExecuting = document.getElementById('executing');
const startText = document.getElementById('start-text');

// set default values
get(EVENT_NAME, (result) => {
    event.value = result
})

get(SEAT_NAME, (result) => {
    seat.value = result
})

get(VERIFICATION_CODE, (result) => {
    verificationCode.value = result
})

get(TICKET_COUNT, (result) => {
    updateButton(result)
})

get(IS_ACTIVE, (result) => {
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
    isExecuting.hidden = !value;
    startText.hidden = value;
}