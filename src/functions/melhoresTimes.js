import { times } from '../database/bd.js'

export function melhores8Times(req, res) {
    const melhores = times;
    melhores.sort((a, b) => b.pts - a.pts);
    res.send(melhores.slice(0, 9));
    return melhores.slice(0, 9);
}

export function classificacaoGeral(req, res) {
    const classificacao = times;
    classificacao.sort((a, b) => b.pts - a.pts);
    res.send(classificacao.slice(0, 17));
    return classificacao.slice(0, 17);
}
