import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const fetchGifs = async () => {
        const images = await getGifs(category);
        setGifs(images);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchGifs();
    }, []);

    return { gifs, isLoading };
}
