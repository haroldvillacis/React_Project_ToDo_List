import './TodoList.css';
function TodoList({children}){
    return (
      <ul className = 'TodoList'>
        {children}
      </ul>
    );
}

export { TodoList }; //aquí exporta el objeto que por dentro tiene el componente que se quiere exportar