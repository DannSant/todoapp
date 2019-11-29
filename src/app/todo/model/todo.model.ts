export class Todo {
    id:number;
    texto:String;
    completado:Boolean

    constructor(texto: string){
        this.texto=texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        this.id = Math.random();
    }
}