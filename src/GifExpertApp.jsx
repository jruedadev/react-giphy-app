import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import './assets/css/general.css';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }
    return (
        <>
            <h1>Gif Expert APP</h1>

            <AddCategory onNewCategory={onAddCategory}></AddCategory>

            {
                categories.map(category => (<GifGrid key={category} category={category}></GifGrid>))
            }
        </>
    )
}
