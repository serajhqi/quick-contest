import express from 'express';
import { dbConn } from './helpers/db';
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
dbConn.connect();
