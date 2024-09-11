export function toMoney (s) {
    let res = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (((s.length - i) % 3) === 0) {
            res = '.' + s.slice(i, i + 3) + res;
        }
    }
    res = s.slice(0, s.length % 3) + res;
    if (res[0] === '.') res = res.slice(1, res.length);
    return res + '₫';
}