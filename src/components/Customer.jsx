import React from 'react'
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel'
import { Slide } from '../components/Slide';







const data = [
    {
        image: "https://localhost:7144/Blog/laravel_638551688228170870.jpg",
        title: "ACB Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",

        navlin: "Click here"

    },
    {
        image: "https://localhost:7144/Blog/python_638551689057366661.jpg",
        title: "TP Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",

        navlin: "Click here"
    },
    {
        image: "https://localhost:7144/Blog/C++_638551751092945080.jpg",
        title: "AnBinh Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",

        navlin: "Click here"
    },
    {
        image: "https://localhost:7144/Blog/AI_638551754613333169.jpg",
        title: "NamA Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",

        navlin: "Click here"
    },
    {
        image: "https://localhost:7144/Blog/Asp_638551752858439191.jpg",
        title: "SacomBank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",

        navlin: "Click here"
    }
];

const Customer = () => {

    const ref = React.useRef(StackedCarousel);
    return (
        <div className='container-fluid my-5'>
            <h4 className='text-center my-5'> Top Company</h4>
            <div className="card ">
                <div style={{ width: "100%", position: "relative" }}>
                    <ResponsiveContainer
                        carouselRef={ref}
                        render={(width, carouselRef) => {
                            return (
                                <StackedCarousel
                                    ref={carouselRef}
                                    slideComponent={Slide}
                                    slideWidth={450}
                                    carouselWidth={width}
                                    data={data}
                                    maxVisibleSlide={5}
                                    disableSwipe
                                    customScales={[1, 0.85, 0.7, 0.55]}
                                    transitionTime={450}
                                />
                            );
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Customer
