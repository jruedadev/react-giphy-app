import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas AddCategory', () => {
    const value = 'Demon Slayer';

    test('Cambiar el valor del input', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value } });

        expect(input.value).toBe(value)
    });

    test('Llamar evento onSubmit', () => {

        const onNewCategory = jest.fn();

        //TODO: ??????
        render(<AddCategory onNewCategory={onNewCategory} />);

        // Sujetos de prueba
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Estímulo
        fireEvent.input(input, { target: { value } });
        fireEvent.submit(form);

        // Aserciones
        expect(input.value).toBe('');

        //Que se llame la función
        expect(onNewCategory).toHaveBeenCalled();
        //Que solo se llame una vez esta función
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Que haya sido enviado el valor del input
        expect(onNewCategory).toHaveBeenCalledWith(value);

        // screen.debug();
    });

    test('No Llamar evento onSubmit si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        // Sujetos de prueba
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Estímulo, dejar vacío el input
        fireEvent.submit(form);
        // Aserciones
        expect(onNewCategory).toHaveBeenCalledTimes(0);


        // Estímulo - input de 1 caracter
        fireEvent.input(input, { target: { value: 'a' } });
        fireEvent.submit(form);
        // Aserciones
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });
});