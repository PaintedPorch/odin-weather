export async function getGiphy(giphyPrompt) {
    try {
        const data = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Hq2ADG5d8WmslUabLULYIpbos1GmuZH4&s=${giphyPrompt}`);
        const jsonData = await data.json();
        return jsonData.data.images.original.url;
    } catch(error) {
        console.log(error);
    }
}