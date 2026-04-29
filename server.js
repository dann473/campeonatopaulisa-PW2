import express from 'express'
import cors from 'cors'
import { times } from './bd.js'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
}) 

app.get('/times', (req, res) => {
  res.json(times)
}) 

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

