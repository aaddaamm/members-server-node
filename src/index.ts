import express from 'express';
import { importApiRoutes } from "./router";

const app = express()
const port = 3000

importApiRoutes(app);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`app listening at http://localhost:${port}`)
})