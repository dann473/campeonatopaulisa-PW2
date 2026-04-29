import { times } from '../database/bd.js'

export function percentualDesempenho(req, res, time) {
    if (time.pj === 0) {
        res.send(0);
        return 0;
    } else {
        times.forEach(time => {
            time.percentual = Number(((time.pts / (time.pj * 3)) * 100).toFixed(2));
        });
    }
    res.send(times);
    return times;
}