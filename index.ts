import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { obtenerListadoNoticias } from './modules/noticia/noticia.service';
import noticiaRoutes from './modules/noticia/noticia.routes';

const app: Express = express();



app.use(bodyParser.json());

app.use("/noticias", noticiaRoutes)



app.listen(1000, () => {
	console.log(`⚡️ SERVER API IS RUNNING http://localhost:1000`);
});