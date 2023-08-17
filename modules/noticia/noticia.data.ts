import { INoticia } from "./noticia.interface";
import { v4 as uuidv4 } from 'uuid'

export const listadoNoticiasDb: INoticia[] = [
	{
		id: uuidv4(),
		titulo: "Elon Musk anuncia que SpaceX viajará a Marte en 2024",
		contenido:
			"Elon Musk, el CEO de SpaceX, anunció el martes que la compañía enviará una misión tripulada a Marte en 2024. Musk dijo que la misión será un hito histórico y que abrirá la puerta a la exploración humana del planeta rojo.",
		fecha: Date.now().toString(),
	},
	{
		id: uuidv4(),
		titulo: "La inteligencia artificial supera a los humanos en el juego de Go",
		contenido:
			"Un programa de inteligencia artificial (IA) desarrollado por Google DeepMind ha vencido a un jugador humano de Go por primera vez. El juego, que se considera uno de los juegos más complejos del mundo, fue ganado por el programa AlphaGo con una puntuación de 5 a 0.",
		fecha: Date.now().toString(),
	},
	{
		id: uuidv4(),
		titulo:
			"Un nuevo estudio encuentra que el cambio climático está acelerando el derretimiento de los glaciares",
		contenido:
			"Un nuevo estudio ha encontrado que el cambio climático está acelerando el derretimiento de los glaciares. El estudio, publicado en la revista Nature, encontró que los glaciares del mundo se están derritiendo a un ritmo 30% más rápido que hace 20 años.",
		fecha: Date.now().toString(),
	},
	{
		id: uuidv4(),
		titulo:
			"Un equipo de científicos descubre un nuevo planeta en la zona habitable de su estrella",
		contenido:
			"Un equipo de científicos ha descubierto un nuevo planeta que está en la zona habitable de su estrella. El planeta, llamado Kepler-186f, se encuentra a unos 500 años luz de la Tierra. El planeta es del tamaño de la Tierra y tiene una atmósfera que podría contener agua líquida.",
		fecha: Date.now().toString(),
	},
];
