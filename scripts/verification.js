registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    const input = document.querySelector('#form-ticket-verify > div > input.greyInput')
    const submit = document.querySelector('#form-ticket-verify > div > button')
    input.value = storage.verificationCode;
    submit.click()
}
