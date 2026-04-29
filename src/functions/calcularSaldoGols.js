import { times } from '../database/bd.js'

export function calcularSaldoGols(req, res) {
    times.forEach(time => {
        time.saldoGols = time.gm - time.gc;
    });
    res.send(times);
    return times;
}

export function maiorSaldoGols(req, res) {
    const timesComSaldo = times.map(time => {
        return {
            time: time.time,
            saldoGols: time.gm - time.gc
        };
    });
    timesComSaldo.sort((a, b) => b.saldoGols - a.saldoGols);
    res.send(timesComSaldo.slice(0, 4));
    return timesComSaldo.slice(0, 4);
}