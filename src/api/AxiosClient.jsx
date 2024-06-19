import axios from 'axios'
import React, { useEffect,useState  } from 'react'

const AxiosClient = (url) => {
    const [state,setState]=useState([])
    const [data,setdata]=useState('');
    const getApi=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('https://localhost:7144/api/Blog');
            const data=await response.json();
            setdata(data);
        }catch(error){
            console.error('not found data',error);
        }
    }
    return({
        
    })
  
}

export default AxiosClient
