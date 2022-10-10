/**
 * masking an string // string = st**ng
 * @param {string} str 
 * @returns 
 */
function maskString(str) {
    const splited = str.split(/\s/g)
    let masked = []
    for (let st of splited) {
        const len = st.length
        const first = st.substring(0, len <= 5 ? len / 2 : (len / Math.PI) >= 3 ? 2 : len / Math.PI);
        const last = st.substring(len <= 5 ? len - 1 : (len - 2));
        const mask = st.substring(len <= 5 ? len - 1 : (len / Math.PI), len - 2).replace(/\w|\d|\s/g, '*');
        masked.push({
            first,
            mask,
            last,
        })
    }
    return masked.map(x => x.first + x.mask + x.last).join(' ')
}

console.log(maskString('raden mas soeprapto 00 nomer 123 kusumo mangkunegoro string joyoendomangunkusumonegoro'))