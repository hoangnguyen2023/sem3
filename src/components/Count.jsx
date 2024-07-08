import React from 'react'
import CountUp from "react-countup";
import '../scss/Header.css'


const Count = () => {

    return (
        <div>
            <section id="count" className="py-3">
                <div className="container">
                    <div className="count_content d-flex justify-content-center  text-center ">
                        <div className="content_item stylecount  mx-2 px-5">
                            <p className="counter">
                                <CountUp
                                    className="account-balance fw-lighter fs-1"
                                    start={100}
                                    decimal=","
                                    end={5000}
                                    duration={10}
                                    useEasing={true}
                                    separator=","
                                />
                            </p>
                            <h4>Project Complete </h4>
                            <div className='over_lay'>
                            </div>
                        </div>
                        <div className="content_item stylecount  mx-2 px-5">
                            <p className="counter"> <CountUp
                                className="account-balance fw-lighter fs-1"
                                start={0}
                                decimal=""
                                end={600}
                                duration={10}
                                useEasing={true}
                                separator=","
                            /></p>
                            <h4>Active Clients</h4>
                            <div className='over_lay'>

                            </div>
                        </div>
                        <div className="content_item stylecount  mx-2 px-5">
                            <p className="counter"> <CountUp
                                className="account-balance fw-lighter fs-1"
                                start={0}
                                decimal=","
                                end={500}
                                duration={10}
                                useEasing={true}
                                separator=","
                            /></p>
                            <h4>Good Career</h4>
                            <div className='over_lay'>

                            </div>
                        </div>
                        <div className="content_item stylecount  mx-2 px-5">
                            <p className="counter"> <CountUp
                                className="account-balance fw-lighter fs-1"
                                start={0}
                                decimal=","
                                end={800}
                                duration={10}
                                useEasing={false}
                                separator=","
                            /></p>
                            <h4>Happy Clients</h4>
                            <div className='over_lay'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
           




        </div>
    )
}

export default Count
