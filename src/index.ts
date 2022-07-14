import express from 'express';
import router from './routes';
import { dbConn } from './helpers/db';
const app = express()
app.use(express.json())
app.use(router)
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
dbConn.connect();
