
 export const getGifs=async( category )=>{
  	const url=`https://api.giphy.com/v1/gifs/search?api_key=vFTeHQXbZ559HQg0udM17eSC71g40pzd&q=${encodeURI(category ) } ry&limit=10`
    const resp = await fetch(url);
    const {data}= await resp.json();
    const gifs = data.map ( img =>{
    	return {
    	id: img.id,
    	title: img.title,
      url:img.images?.downsized_medium.url
    }
    })

    return gifs;
    
  }