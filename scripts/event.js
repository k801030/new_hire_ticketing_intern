const events = document.querySelectorAll('#gameList > table > tbody > tr')


if (events) {
    console.log(`events are found: ${events}`)
    const validEvents = Array.from(events).filter(event => isValidEvent(event))

    if (validEvents.length === 0) {
        setTimeout(sendMessage, 2000, "reload()")

    }

    for (let event of validEvents) {
        let findTicketButton = event.querySelector('button')
        findTicketButton.click()
    }
}

function isValidEvent(event) {
    let findTicketTexts = ['立即訂購', 'Find tickets']
    let unavailableTexts = ['選購一空', 'No tickets available']
    return include(event.textContent, findTicketTexts) && notInclude(event.textContent, unavailableTexts)
}

function include(content, words) {
    return words.some(word => content.includes(word))
}

function notInclude(content, words) {
    return !include(content, words)
}


function sendMessage(message) {
    chrome.runtime.sendMessage({message: message}, function (response) {
        console.log("Response from background:", response);
    });
}