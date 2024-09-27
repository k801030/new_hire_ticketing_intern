// Redirection

registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;
    window.location.href = window.location.href.replace("detail", "game");
}

