/**
 * return true if content includes any of the words
 * @param content
 * @param words
 * @returns {*}
 */
function include(content, words) {
    return words.some(word => content.includes(word))
}

/**
 * return true if content doesn't include any of the words
 * @param content
 * @param words
 * @returns {boolean}
 */
function notInclude(content, words) {
    return !include(content, words)
}


/**
 * Select an element including the keyword; if not found, return random item
 * @param elements
 * @param word
 * @returns {*|item}
 */
function selectOrRandom(elements, word) {
    for (const element of elements) {
        if (element.textContent.includes(word)) {
            console.log(`selectOrRandom ${element.textContent} is found`)
            return element
        }
    }
    console.log(`selectOrRandom ${word} not found`)
    return randomItem(elements)
}

/**
 * Pick a random item from the array
 * @param items
 * @returns item
 */
function randomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}