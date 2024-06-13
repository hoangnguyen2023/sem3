import React from 'react'

const Find = () => {
    return (
        <div className='m-5'>

            <form className='container-fluid' >
            
              
                <div className='row  justify-content-center'>
                <h4 className='text-center'>Fast Search</h4>
                    <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 '>
              
                        
                        <button className='card-title btn btn-outline-success m-3'>php</button>
                        <button className='card-title btn btn-outline-success m-3'>Laravel</button>
                        <button className='card-title btn btn-outline-success m-3'>C++</button>
                        <button className='card-title btn btn-outline-success m-3'>Python</button>
                        <button className='card-title btn btn-outline-success m-3'>JavaScript</button>
                        <button className='card-title btn btn-outline-success m-3'>Asp.Net</button>
                        <button className='card-title btn btn-outline-success m-3'>Node Js</button>

                    </div>

                </div>
            </form>

        </div>

    )
}

export default Find
