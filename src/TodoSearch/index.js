import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){ //ya no se traen por medio de props, sino por React.useContext
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

    return (
      <input 
        placeholder="Cortar cebolla" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value); //función actualizadora del estado
        } }
      />
       
    );
  }

export { TodoSearch }; //aquí exporta el objeto que por dentro tiene el componente que se quiere exportar