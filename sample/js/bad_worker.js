onmessage = msg => {
    const index = msg.data.index
    const color = msg.data.color
    for (let i = 0; i < 20; i++) {
        console.log('%c' + index + ' - ' + i, 'color:' + color)
    }
}
