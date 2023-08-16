import express from 'express';
import { crearNoticia, obtenerListadoNoticias, obtenerNoticiaPorId } from './noticia.service';

const noticiaRoutes = express.Router();

noticiaRoutes.get('/', obtenerListadoNoticias);
noticiaRoutes.get('/:noticiaId', obtenerNoticiaPorId)
noticiaRoutes.post('/', crearNoticia)


export default noticiaRoutes;