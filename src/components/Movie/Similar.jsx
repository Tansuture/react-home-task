import { useEffect,useState } from "react"
import axios  from "axios"
import './aboutmovie.css'

const Similar =({data})=>{
    const [similar,SetSimilarMovies]=useState([])
  
    const SetResemblences =async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${data.id}/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
        SetSimilarMovies(response.data)
        
      }
      useEffect(()=>{
        SetResemblences()
      },[])
      console.log(similar.results)


      if(!data){
        return 'Loading'
      }
    return(
        <>
     
            <h2>Similar Movies</h2>
            <div className="flex-container">
              {similar.results.map(({id,poster_path,title})=>
                <img  className="img" src ={`https://image.tmdb.org/t/p/original${poster_path}`}alt={title}/>
              )}
            </div>
    
        
        </>
    )
}

export default Similar