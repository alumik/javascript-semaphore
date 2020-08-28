onmessage = msg => {
    const index = msg.data.index
    for (let i = 0; i < 20; i++) {
        console.log(index + '-' + i)
    }
}
