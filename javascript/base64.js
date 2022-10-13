class Base64 {
    constructor() {

    }

    encode(str) {
        return Buffer.from(str).toString('base64')
    }

    decode(base64) {
        return Buffer.from(base64, 'base64').toString('utf-8')
    }
}

console.log(new Base64().decode('YW5qYXkgc2x1cg==')); // anjay slur