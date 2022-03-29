
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {styled} from "@mui/material";
import { getStartsByRating } from '../../getStars'
import Similar from './Similar';
// import './aboutmovie.css'



const AboutMovie = ()=>{
    
    const params = useParams()
    const [data,setData]=useState()
    const[loading,setLoading]=useState(false)
    
    const loadData = async ()=>{
        setLoading(true)
        
        const response= await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU`)
        console.log(response.data)
        
        setData(response.data)
        setLoading(false)
    }
    
    
    useEffect(() => {
        loadData();
    }, []);
    
    if (!data) {
        return 'Loading...'
    }
    


    const Container = styled('div')`
  
    background-image: ${() => `url("https://image.tmdb.org/t/p/original${data.backdrop_path}");`}
    background-size: cover;
    
    

    `
    const Title = styled('h1')`
    color:white;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 64px;

    `
    const Overview = styled('p')`
     font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color:white;
    `
    const Stars = styled('div')`
  z-index: 1;
  font-size: 12px;
  margin-bottom: 16px;
  
`
const NextBox = styled('div')`
max-width:632px;
margin:0 auto;
padding-top:100px;
margin-left:200px;
margin-bottom:200px;
`
const Small = styled('small')`
width:49px;
background: rgba(29, 29, 29, 0.5);
border-radius: 0px 8px;
color: #0FEFFD;
margin-left:23px;
padding:5px;
&:hover{
    color:orange;
    border:2px solid  orange;
}
`


    return(
        <>
     <Container>
         <NextBox>
             {data.genres.map(genre => (
                 <Small>{genre.name}</Small>
             ))}
            <Title>{data.title}</Title>
            <Stars>
                    {getStartsByRating(data.vote_average)}
            </Stars>
            <Overview>{data.overview}</Overview>

         </NextBox>
     </Container>
     <Similar data={data} />
        </>
    )
}

export default AboutMovie