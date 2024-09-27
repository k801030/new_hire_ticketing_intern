function sleep(ms) {
    console.log('sleep')
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hello() {
    console.log('hello')
}