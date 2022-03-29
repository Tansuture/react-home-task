
import { useState,useEffect} from 'react';

const Factorial =()=>{

    const [data,setData]=useState()
    useEffect(()=>{
        function factorial (n){
            if (n === 0) {
                return 1;
            }
        
          
            return n * factorial(n - 1);
        }
        
   

    setData(factorial(5))
    },[])

    return(<>
    <div>
        {data}
    </div>
    </>)
}

export default Factorial