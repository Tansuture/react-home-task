
import axios from 'axios';
import React, { useState, useCallback } from 'react'
import './movie.css'



const SearchBox = ({searchValue,setRequest,setSearchValue}) => {


   

	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				placeholder='Type to search...'
              
			></input>
            <button onClick ={setRequest}className='btn'>submit</button>
           
		</div>
	);
};

export default SearchBox;