import React from 'react';


function useLocalStorage(itemName, initialValue) { //cuando la función empieza por use es un custom hook
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    
    React.useEffect(()=> {
        setTimeout(() => { //quiero que esto se ejecute una vez después de cierto tiempo
            try {
                const localStorageItem = localStorage.getItem(itemName);
      
                let parsedItem; //creo la variable vacía
                
                if (!localStorageItem) {  //si localStorageTodos es null o string vacío
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;// se asigna un array vacío
                  } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                  }
        
                setLoading(false); 
            } catch (error){
                setLoading(false);
                setError(true);
            }  
        }, 2000);
        
    }, []);


  

    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };


    return {
        item, 
        saveItem,
        loading,
        error,
    };
} 

export { useLocalStorage }