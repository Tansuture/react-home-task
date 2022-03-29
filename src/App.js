
import './App.css';



import axios from 'axios';
import { useState,useEffect} from 'react';

import { Route,Routes} from 'react-router-dom';

import SearchBox from './components/Movie/Search';
import Movies from './components/Movie/Movies';
import AboutMovie from './components/Movie/AboutMovie';


function App() {
  const [searchValue, setSearchValue] = useState('');
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
   
 
      const setRequest = async (e)=>{
        console.log('render request')
        e.preventDefault()
          const response= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=1&include_adult=false&query=${searchValue}`)
    
          setData(response.data)
        setSearchValue('')
      }
 


  const loadData = async ()=>{
    setLoading(true)

    const response= await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
 
    setData(response.data)
  
    setLoading(false)
}

useEffect(() => {
  loadData();
}, []);


console.log(data.results)
const props={
  searchValue:searchValue,
  data:data.results,
  setSearchValue:setSearchValue,
  setRequest:setRequest,
}

console.log(props)


  if(!props.data){
    return "Loading"
  }
  return (
    
    
    <div className="App">
  
      <Routes>
      {loading ? ('errror'):  (  <Route  exact path='*' element={<Movies {...props}/>}></Route>) }
      <Route path={`/:id`} element={<AboutMovie/>}/>
       
      </Routes> 
   
    </div>
  );
}

export default App;
