class Semaphore {
    constructor(value, buffer) {
        if (buffer) {
            this.buffer = buffer
        } else {
            this.buffer = new SharedArrayBuffer(4 * value)
        }
        this.value = value
        this.current_value = -1
        this.view = new Int32Array(this.buffer)
    }

    static fromSharedBuffer(value, buffer) {
        return new Semaphore(value, buffer)
    }

    p() {
        while (true) {
            for (let i = 0; i < this.value; i++) {
                if (Atomics.compareExchange(this.view, i, 0, 1) === 0) {
                    this.current_value = i
                    return;
                }
            }
        }
    }

    v() {
        Atomics.store(this.view, this.current_value, 0)
        this.current_value = -1
    }
}

class Mutex extends Semaphore {
    constructor(buffer) {
        super(1, buffer)
    }

    static fromSharedBuffer(buffer) {
        return new Mutex(buffer)
    }

    waitOne() {
        this.p()
    }

    releaseMutex() {
        this.v()
    }
}
