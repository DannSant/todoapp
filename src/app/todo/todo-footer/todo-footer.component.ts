import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFilterAction } from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { BorrarCompletadosTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtros:filtrosValidos[] = ['todos','completados','pendientes'];
  filtroActual: filtrosValidos;
  pendientes:number;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.filtroActual = state.filter;
      this.contarPendientes(state.todos);
    })
  }

  cambiarFiltro(filtro:filtrosValidos){
    const action = new SetFilterAction(filtro);
    this.store.dispatch(action);
  }

  contarPendientes(todos:Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarCompletados(){
    const action = new BorrarCompletadosTodoAction();
    this.store.dispatch(action);
  }

}
