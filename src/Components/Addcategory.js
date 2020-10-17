import React ,{useState}from 'react'
import PropTypes from 'prop-types';


export const Addcategory = ({setCategories}) => {
 const [inputValue, setInputValue] = useState('');
	const handelInputChage= (e)=>{
    setInputValue(e.target.value);
	}
	const handeleSumit=(e)=>{
		e.preventDefault();
		if(inputValue.trim().length > 2){
			setCategories(cats =>[ inputValue,...cats,]);
			setInputValue(''); 
		}
		//console.log('submit hecho ')
		

	}
	return (
	
		<form onSubmit={handeleSumit}> 

		<input 
		type="text" 
		value={inputValue} 
	  onChange={handelInputChage}

		/>
	</ form>

	)
}
Addcategory.propTypes={
	setCategories:PropTypes.func.isRequired

}