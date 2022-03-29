import { useEffect, useState } from "react";

const Fibonacci = ()=>{
    const [data,setData]=useState()
    useEffect(()=>{
        const isFibonacci =(n)=>{
            var a = 1,
            b = 1
           let result = a + ' ' + b + ' ';
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
            result += c + ' ';
        }
        
        return result;
    }
   

    setData(isFibonacci(5))
    },[])
    console.log(data)
    
return(

    <>
    <div>{data}</div>
    </>
)
}

export default Fibonacci