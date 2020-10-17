import React from 'react' ;
import {GifGriditem} from './GifGriditem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {


	 const { data,loading} =useFetchGifs( category ); 
	 
 
	return (
		<>
		<h3 className="animate__animated animate__bounce animate__delay-2s">{category }</h3>

		{loading&& <p className="animate__animated animate__bounce animate__delay-2s"> Loading</p>}

		
		<div className="card-grid">
			

	    {
	   	 data.map( img =>(
	   	 <GifGriditem 
           key={img.id} 
	   	    { ... img }
	   	    />

	   	 ))
	   }
	    
	  
		</div>  
		</>
	)
}

