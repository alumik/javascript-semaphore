const mutex = new Semaphore(1)
// const mutex = new Mutex()

workers = []
colors = ['red', 'green', 'blue', 'black']

for (let i = 0; i < 4; i++) {
    workers.push(new Worker('./js/good_worker.js'))
}

for (let i = 0; i < 4; i++) {
    workers[i].postMessage(
        {
            index: i,
            color: colors[i],
            shared_buffer: mutex.buffer
        }
    )
}
