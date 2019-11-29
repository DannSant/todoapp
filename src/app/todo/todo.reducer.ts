import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const estadoInicial: Todo[] = [
    new Todo("Vencer a Thanos"),
    new Todo("Salvar al mundo")
];

export function todoReducer(state=estadoInicial, action:fromTodo.Acciones){
    switch(action.type){
        case fromTodo.AGREGAR_TODO:
            const newTodo = new Todo(action.texto);            
            return [...state, newTodo];

        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit =>{
                if(todoEdit.id == action.id){
                    return {...todoEdit,completado: !todoEdit.completado };
                }else {
                    return todoEdit;
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map((todoEdit)=>{
                if(todoEdit.id == action.id){
                    return {...todoEdit,texto: action.texto };
                }else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todoBorrar=>todoBorrar.id!=action.id);
        
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map((todo)=>{
                return {...todo,completado:action.completado}
            });
        
        case fromTodo.BORRAR_COMPLETADOS_TODO:
            return state.filter(todo=>!todo.completado);
            
        default:
            return state;
    }
}