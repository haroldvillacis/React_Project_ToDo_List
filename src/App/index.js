import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar curso de React', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'otra........', completed: false},
//   {text: 'LALALA........', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));




function App() {
  
  

  
  return (

    <TodoProvider>
      <AppUI
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}

    />

    </TodoProvider>
    
  );
}


export default App;
