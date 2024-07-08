import React from 'react'
import BlogAsp from '../components/BlogAsp'
import Banner from '../components/Banner'

const Blog = () => {
    return (
        <>
        <Banner/>
        
            <div className='container-fluid'>
                
                <BlogAsp />
            </div>

        </>

    )
}

export default Blog
