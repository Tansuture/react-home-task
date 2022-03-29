
import './App.css';


import Movies from './components/Movies/Movies';
import axios from 'axios';
import { useState,useEffect} from 'react';

function App() {


  const [data,setData]=useState([])
  const[loading,setLoading]=useState(false)


  const loadData = async ()=>{
    setLoading(true)

const response= await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
 
    setData(response.data)
  
    setLoading(false)
}

useEffect(() => {
  loadData();
}, []);



  
  return (
    
    <div className="App">
      {loading ? ('errror'):  (<Movies   data = {data.results}/>) }
   
    </div>
  );
}

export default App;
