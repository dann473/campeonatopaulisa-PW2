import { times } from '../database/bd.js'

export function apresentarTime(req, res, time) {
    const timeEncontrado = times.find(t => t.time === time);
    if (timeEncontrado) {
        res.send(timeEncontrado);
        return timeEncontrado;
    } else {
        res.send('Time não encontrado');
        return 'Time não encontrado';
    }
}