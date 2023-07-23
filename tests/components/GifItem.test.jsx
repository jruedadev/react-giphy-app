import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItemComponent', () => {

    const title = "Título";
    const url = "https://example.com/";
    
    test("debe hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    
    test('Mostrar imagen con url y alt', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        
        const {src, alt} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test('Mostrar el título en el componente', () => { 
        
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

     })
});