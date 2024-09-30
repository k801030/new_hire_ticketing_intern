registerStorageEvents(handler)

function handler() {
    if (!storage.isActive) return;

    // redirection
    window.location.href = window.location.href.replace("detail", "game");
}
