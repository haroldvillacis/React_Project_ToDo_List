
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter({total, completed}){
  const {
    
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return (
      <h1 className = 'TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TO-DOS      
      </h1>
    );
  }

export { TodoCounter }; //aquí exporta el objeto que por dentro tiene el componente que se quiere exportar