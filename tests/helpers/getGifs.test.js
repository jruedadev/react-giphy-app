import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas GetGifs()', () => {

    test('Retornar un array de gifss', async () => {

        const gifs = await getGifs('demon slayer');

        console.log("Fetched: " + gifs.length + " Gifs");

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });

});