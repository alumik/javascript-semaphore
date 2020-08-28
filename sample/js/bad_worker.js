function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

onmessage = async msg => {
    const index = msg.data.index
    const color = msg.data.color
    for (let i = 0; i < 5; i++) {
        console.log('%c' + index + ' - ' + i, 'color:' + color)
        await sleep(50)
    }
}
