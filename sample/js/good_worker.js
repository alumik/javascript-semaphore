importScripts('../../src/semaphore.js')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

onmessage = async msg => {
    const index = msg.data.index
    const color = msg.data.color
    const buffer = msg.data.shared_buffer
    const mutex = Semaphore.fromSharedBuffer(1, buffer)
    // const mutex = Mutex.fromSharedBuffer(buffer)

    mutex.p()
    // mutex.waitOne()

    for (let i = 0; i < 5; i++) {
        console.log('%c' + index + ' - ' + i, 'color:' + color)
        await sleep(50)
    }

    mutex.v()
    // mutex.releaseMutex()
}
