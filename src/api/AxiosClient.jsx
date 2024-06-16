import axios from 'axios'
import React, { useEffect,useState  } from 'react'

const AxiosClient = (url) => {
    const [state,setState]=useState([])
    const getApi=async()=>{
        const res=await axios({
            url:"",
            method:'GET'
        });
        //lay du lieu ve tu api state=setState(res.data.content)

    }
    useEffect(()=>{
        getApi()
    } ,[])
    return state
  
}

export default AxiosClient
