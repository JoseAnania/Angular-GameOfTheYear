/* Interface para definir los tipados de datos */

// definimos el tipado de los Juegos
export interface Game {
    id: string;
    name: string;
    url: string;
    votos: number;
}