import React,{useState} from 'react'
import {Addcategory} from './Components/Addcategory';
import {GifGrid} from './Components/GifGrid';
export const GifExpertApp = () => {
	
	 const [categories, setCategories] = useState(['Dragon ball super',] )
	
	return  (
		<div>
		<h2>GifExpertApp</h2>
		<Addcategory  setCategories={setCategories}/>
		<hr/> 
		
			<ol>
			{ 
				categories.map( category =>(
				 <GifGrid
				 key={category} 
				 category={category}
				  />
		  ))
		  }

			

			</ol>
		</div>
		)
	}