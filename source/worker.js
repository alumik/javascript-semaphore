importScripts('./semaphore.js')

onmessage = msg => {
    const index = msg.data.index
    const buffer = msg.data.shared_buffer
    const mutex = Semaphore.fromSharedBuffer(1, buffer)
    // const mutex = Mutex.fromSharedBuffer(buffer)

    mutex.p()
    // mutex.waitOne()

    for (let i = 0; i < 5; i++) {
        console.log(index + '-' + i)
    }

    mutex.v()
    // mutex.releaseMutex()
}
