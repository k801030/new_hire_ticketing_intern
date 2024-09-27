// Redirection

registerStorageEvents(handler)

function handler() {
    window.location.href = window.location.href.replace("detail", "game");
}

