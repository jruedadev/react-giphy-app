import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('GifGridComponent', () => {

    const category = 'Demon Slayer';
    
    test("Debe mostrar la precarga y el término de búsqueda al iniciar el componente", () => {
        useFetchGifs.mockReturnValue({
            gifs: [], isLoading: true
        });
        

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));

        // screen.debug();
    });

    test('Mostrar las imágenes cargadas con el custom Hook', () => {
        //Sujeto de pruebas
        const gifs = [
            {id: '', title: 'Demon Slayer Example', url: 'http://localhost/test.png'}
        ];
        useFetchGifs.mockReturnValue({
            gifs, isLoading: false
        });
        render(<GifGrid category={category} />);

        // Aserciones
        expect(screen.getAllByRole('img').length).toBe(gifs.length)
        // screen.debug();
    });
});