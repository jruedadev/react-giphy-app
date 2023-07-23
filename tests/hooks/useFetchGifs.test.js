import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Hook useFetchGifs', () => {

    const category = 'Demon Slayer';

    test('Initial State', () => {

        const { result } = renderHook(() => useFetchGifs(category));

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })


    test('Check gifs array and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})