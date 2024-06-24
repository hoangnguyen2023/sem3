import React, { useState } from 'react'
import JobFullStack from '../components/JobFullStack'
import { useParams } from 'react-router-dom'


const JobOverview = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            
            <JobFullStack id={id}/>

        </div>
        
    )
}

export default JobOverview
