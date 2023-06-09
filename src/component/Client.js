import React, { Component } from "react";
import TinySlider from "tiny-slider-react";

import 'tiny-slider/dist/tiny-slider.css';

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";
import avatar4 from "../assets/images/client/04.jpg";

const settings = {
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
};

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review: [
                {
                    id: '1',
                    profile: avatar1,
                    name: 'Calvin Carlo',
                    designation: "Manager",
                    description: "Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000."
                },
                {
                    id: '2',
                    profile: avatar2,
                    name: 'Christa Smith',
                    designation: "Manager",
                    description: 'I highly recommend Hously as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home.'
                }, {
                    id: '3',
                    profile: avatar3,
                    name: 'Christa Smith',
                    designation: "Manager",
                    description: "My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!"
                }, {
                    id: '4',
                    profile: avatar4,
                    name: 'Christa Smith',
                    designation: "Manager",
                    description: "Great experience all around! Easy to use and efficient."
                }
            ]
        };

    }

    render() {
        return (
            <React.Fragment>
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say ?</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="flex justify-center relative mt-16">
                        <div className="relative lg:w-1/3 md:w-1/2 w-full">
                            <div className="absolute -top-20 md:-start-24 -start-0">
                                <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                            </div>

                            <div className="absolute bottom-28 md:-end-24 -end-0">
                                <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                            </div>

                            <div className="tiny-single-item">
                                <TinySlider settings={settings} >
                                    {this.state.review.map((el, index) => (
                                        <div className="tiny-slide" key={index}>
                                            <div className="text-center">
                                                <p className="text-xl text-slate-400 italic"> " {el.description} " </p>

                                                <div className="text-center mt-5">
                                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    </ul>

                                                    <img src={el.profile} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="" />
                                                    <h6 className="mt-2 fw-semibold">{el.name}</h6>
                                                    <span className="text-slate-400 text-sm">{el.designation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Client;

