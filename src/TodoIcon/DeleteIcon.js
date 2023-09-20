import React from 'react';
import { TodoIcon } from './'; //se puede poner también index.js

function DeleteIcon({ onDelete }){
    return (
        <TodoIcon 
        type="delete"
        color="gray"
        onClick={onDelete}
    />
    );
}

export { DeleteIcon };