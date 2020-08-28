importScripts('../../src/semaphore.js')

onmessage = msg => {
    const index = msg.data.index
    const color = msg.data.color
    const buffer = msg.data.shared_buffer
    const mutex = Semaphore.fromSharedBuffer(1, buffer)
    // const mutex = Mutex.fromSharedBuffer(buffer)

    mutex.p()
    // mutex.waitOne()

    for (let i = 0; i < 20; i++) {
        console.log('%c' + index + ' - ' + i, 'color:' + color)
    }

    mutex.v()
    // mutex.releaseMutex()
}
