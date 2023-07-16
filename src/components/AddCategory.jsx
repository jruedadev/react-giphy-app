import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Prueba');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const value = inputValue.trim();
        if (value.length < 2) return ;

        onNewCategory( value );
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"  
            placeholder="Buscar Gif's" 
            value={ inputValue } 
            onChange={ onInputChange } 
        />
        <button type="submit" >Agregar</button>
    </form>
  )

}

AddCategory.propTypes = {
//    setCategories: PropTypes.Function.isRequired,
}