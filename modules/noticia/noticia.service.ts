import { Request, Response } from "express";
import { listadoNoticiasDb } from "./noticia.data";
import { INoticia } from "./noticia.interface";

let contadorId = 5;

export const obtenerListadoNoticias = (req: Request, res: Response) => {
    try{
        res.json({message: 'Se cargaron las noticias.', data: { listadoNoticiasDb}})
    }
    catch (error){
        res.status(500).json({message: `${error}`})
    }
}

export const crearNoticia = (req: Request, res:Response) => {
    try{
        const data: INoticia = req.body;
        
        const nuevaNoticia: INoticia = {
            id: contadorId++,
            titulo: data.titulo,
            contenido: data.contenido,
            fecha: Date.now().toString()
        }

        listadoNoticiasDb.push(nuevaNoticia)

        res.json({message: 'Se creó la noticia.'})
    }
    catch(error){
        res.status(500).json({message: 'No se pudo guardar la noticia'})
    }
}

export const obtenerNoticiaPorId = (req: Request, res: Response) => {
    const u = listadoNoticiasDb.filter((u) => u.id === Number(req.params.noticiaId))
    res.json(u)
}