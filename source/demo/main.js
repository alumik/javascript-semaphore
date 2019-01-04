const mutex = new Semaphore(1)
// const mutex = new Mutex()

workers = []

for (let i = 0; i < 4; i++) {
    workers.push(new Worker('./worker.js'))
}

for (let i = 0; i < 4; i++) {
    workers[i].postMessage(
        {
            index: i,
            shared_buffer: mutex.buffer
        }
    )
}
