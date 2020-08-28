workers = []

for (let i = 0; i < 4; i++) {
    workers.push(new Worker('./js/bad_worker.js'))
}

for (let i = 0; i < 4; i++) {
    workers[i].postMessage({index: i})
}
