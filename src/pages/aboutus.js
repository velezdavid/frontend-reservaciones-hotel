import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
import CountUp from 'react-countup';

import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import About from "../component/About";
import Feature from "../component/Feature";
import ClientTwo from "../component/Client-two";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import { Facebook, Instagram, Linkedin } from "react-feather";

import Member1 from "../assets/images/client/04.jpg";
import Member2 from "../assets/images/client/05.jpg";
import Member3 from "../assets/images/client/06.jpg";
import Member4 from "../assets/images/client/07.jpg";

class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: "navbar-white"
        };

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <React.Fragment>
                <Navbar navClass={this.state.navClass} />
                {/* <!-- Start Hero --> */}
                <section
                    style={{ backgroundImage: `url(${BackgroudImage})` }}
                    className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>
                        </div>
                    </div>
                </section>
                <div className="relative">
                    <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                {/* <!-- End Hero --> */}
                <section className="relative md:pb-24 pb-16">
                    <About />
                    <Feature />
                </section>
                {/* <!-- Start CTA --> */}
                <section
                    style={{ backgroundImage: `url(${BackgroudImage})` }}
                    className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="container">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="grid md:grid-cols-3 grid-cols-1 items-center">

                                    <div className="counter-box text-center">
                                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                            
                                        <CountUp
                                        start={1010}
                                        className="counter-value"
                                        end={1548}
                                        duration={2.75} />
                                            
                                            +</h1>
                                        <h5 className="counter-head text-white text-lg font-medium">Properties Sell</h5>
                                    </div>

                                    <div className="counter-box text-center">
                                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                                        <CountUp
                                        start={2}
                                        className="counter-value"
                                        end={25}
                                        duration={2.75} />
                                            +</h1>
                                        <h5 className="counter-head text-white text-lg font-medium">Award Gained</h5>
                                    </div>

                                    <div className="counter-box text-center">
                                        <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2"><CountUp
                                        start={0}
                                        className="counter-value"
                                        end={9}
                                        duration={2.75} />
                                            +</h1>
                                        <h5 className="counter-head text-white text-lg font-medium">Years Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End CTA --> */}
               
                <section className="relative md:pb-24 pb-16">
                <div className="container lg:mt-24 mt-16">
                        <div className="grid grid-cols-1 pb-8 text-center">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                            <div className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={Member1} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Facebook className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Instagram className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Linkedin className="h-4 w-4" /></Link2></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link2 to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Jack John</Link2>
                                        <p className="text-slate-400">Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={Member2} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Facebook className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Instagram className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Linkedin className="h-4 w-4" /></Link2></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link2 to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Krista John</Link2>
                                        <p className="text-slate-400">Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={Member3} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Facebook className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Instagram className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Linkedin className="h-4 w-4" /></Link2></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link2 to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Roger Jackson</Link2>
                                        <p className="text-slate-400">Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={Member4} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Facebook className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Instagram className="h-4 w-4" /></Link2></li>
                                            <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><Linkedin className="h-4 w-4" /></Link2></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link2 to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Johnny English</Link2>
                                        <p className="text-slate-400">Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClientTwo />
                
                    <div className="container lg:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="mt-6">
                                <Link2 to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link2>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Switcher />
            </React.Fragment>
        );
    }
}

export default Aboutus;