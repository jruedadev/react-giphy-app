const giphy_api_key = 'sDA4foDMdqlYUBOWBhXK7N1RukYlvEFM';
export const getGifs = async(category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_api_key}&q=${category}`;

	const response = await fetch(url);
	const {data = []} = await response.json();

	const gifs = data.map(gif=>({
		id: gif.id,
		title: gif.title,
		url: gif.images.downsized_medium.url
	}));
    return gifs;
};