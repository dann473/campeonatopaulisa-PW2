import express, { Router } from 'express'
import cors from 'cors'
import { times } from './src/database/bd.js'
import { classificacaoGeral, melhores8Times } from './src/functions/melhoresTimes.js'
import { calcularSaldoGols, maiorSaldoGols } from './src/functions/calcularSaldoGols.js'
import { apresentarTime } from './src/functions/apresentarTime.js'
import { percentualDesempenho } from './src/functions/percentualDesempenho.js'

const app = express()
const router = express.Router()

app.use(cors({
    origin: ['http://127.0.0.1:5500']
}));

app.get('/', (req, res) => {
  res.send('Hello World')
}) 

app.get('/melhores8', melhores8Times)
app.get('/classificacaoGeral', classificacaoGeral)
app.get('/calcularSaldoGols', calcularSaldoGols)
app.get('/maiorSaldoGols', maiorSaldoGols)
app.get('/apresentarTime/:time', (req, res) => {
    const time = req.params.time;
    apresentarTime(req, res, time);
})

app.get('/percentualDesempenho', percentualDesempenho)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

