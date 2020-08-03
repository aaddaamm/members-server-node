import express from 'express';
import { importApiRoutes } from "./router.js";

const app = express()
const port = 3000

importApiRoutes(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})