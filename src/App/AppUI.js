import { TodoCounter } from '../TodoCounter'; 
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
        //Se puede colocar en vez de ReactFragment solo los corchetes <> y </>
        <React.Fragment> 
    
          <TodoCounter 
            //completed={completedTodos} 
            //total={totalTodos} 
            />
        
          <TodoSearch 
            //searchValue = {searchValue} //creo la propiedad searchvalue, que es igual al estado const searchvalue
            //setSearchValue={setSearchValue}
          />
    
            {/*text se convierte en el identificador unico de cada TodoItem*/}

          
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}           
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)} //encapsulación de la función
                    onDelete={() => deleteTodo(todo.text)} //encapsulación de la función
                /> 
                ))}
        
            </TodoList>
                 

          <CreateTodoButton 
            setOpenModal={setOpenModal}/> {/*No tiene contenido interno que nosotros vayamos a manejar*/}
    
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

        </React.Fragment> 
      );
}

export { AppUI };