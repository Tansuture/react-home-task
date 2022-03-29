import './index.css'

const Movies = (props)=>{
    console.log(props.data)
    // const images = props.data.map(({id, urls, description}) => {
    //     return <img key={id} src={urls.small} alt={description} />;
    //   });
      
    //   return <div className="image-list">{images}</div>;
      return(
          <>
          <div className = "image-list">
        
          {props.data.map(({id,poster_path,title,overview})=>
          <div className = "movie"key ={id} >

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