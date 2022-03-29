import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom";
import './movie.css'
import SearchBox from './Search';
import { useState,useEffect} from 'react';

const Movies = (props)=>{
  console.log(props)
  const navigate = useNavigate()
  
  if (!props.data) {
    return 'Loading...'
}
      return(
          <>
      <SearchBox  setRequest = {props.setRequest}searchValue={props.searchValue} setSearchValue={props.setSearchValue}/> 
          <div className = "image-list">
          
        
             {props.data.map(({id,poster_path,title,overview})=>
            <div onClick={() => navigate('/' + id)} className = "movie"key ={id} >
            
                <img  className="img" src ={`https://image.tmdb.org/t/p/original${poster_path}`}alt={title}/>
                  <p className='title'>{title}</p>
                  <div className='movie-overview'>
                    <p>{overview}</p>
                  </div>
            </div>
          
            )} 
          </div>
          </>
      )
    
    
 
   
}

export default Movies