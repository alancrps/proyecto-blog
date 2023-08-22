import { Request, Response } from "express";
import { listadoNoticiasDb } from "./noticia.data";
import { INoticia } from "./noticia.interface";
import { v4 as uuidv4 } from 'uuid'

let noticiasdb = listadoNoticiasDb;

export const obtenerListadoNoticias = (req: Request, res: Response) => {
    try{
        res.json({message: 'Se cargaron las noticias.', data: { noticiasdb }})
    }
    catch (error){
        res.status(500).json({message: `${error}`})
    }
}

export const crearNoticia = (req: Request, res:Response) => {
    try{
        const data: INoticia = req.body;
        const nuevaNoticia: INoticia = {
            id: uuidv4(),
            titulo: data.titulo,
            contenido: data.contenido,
            fecha: new Date().toLocaleDateString()
        }
        noticiasdb.push(nuevaNoticia)
        res.json({message: 'Se creó la noticia.'})
    }
    catch(error){
        res.status(500).json({message: 'No se pudo guardar la noticia'})
    }
}

export const obtenerNoticiaPorId = (req: Request, res: Response) => {
    const u = listadoNoticiasDb.filter((u) => u.id === req.params.noticiaId)
    res.json(u)
}

export const eliminarNoticia = (req:Request, res:Response) => {
    try{
        noticiasdb = listadoNoticiasDb.filter((u) => u.id !== req.params.noticiaId)
        res.json({message: `Se eliminó la noticia`})
    }
    catch(error){
        res.status(500).json({message: 'No se pudo eliminar la noticia'})
    }
}