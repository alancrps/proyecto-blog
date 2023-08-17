import express from 'express';
import { crearNoticia, eliminarNoticia, obtenerListadoNoticias, obtenerNoticiaPorId } from './noticia.service';

const noticiaRoutes = express.Router();

noticiaRoutes.get('/', obtenerListadoNoticias);
noticiaRoutes.get('/:noticiaId', obtenerNoticiaPorId)
noticiaRoutes.post('/', crearNoticia)
noticiaRoutes.delete('/:noticiaId', eliminarNoticia)

export default noticiaRoutes;