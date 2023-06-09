import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";
// import 'choices.js/public/assets/styles/choices.min.css';

import Navbar from "../component/Navbar";
import BackgroundImage from "../assets/images/bg/01.jpg";
import Client from "../component/Client";
import Property from "../component/Properties/property";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
        };
    }

    handleTabClick = (tabIndex) => {
        this.setState({
            activeTabIndex: tabIndex,
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { activeTabIndex } = this.state;

        return (
            <React.Fragment>
                <Navbar />
                {/* Hero Start  */}
                <section className="relative mt-20">
                    <div className="container-fluid md:mx-4 mx-2">
                        <div style={{ backgroundImage: `url(${BackgroundImage})` }} className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover" id="home">
                            <div className="absolute inset-0 bg-black/60"></div>

                            <div className="container">
                                <div className="grid grid-cols-1">
                                    <div className="ltr:md:text-left rtl:md:text-right text-center">
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">We will help you find <br /> your <span className="text-green-600">Wonderful</span> home</h1>
                                        <p className="text-white/70 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Hero End */}

                <section className="relative md:pb-24 pb-16">
                    <div className="container">
                        <div className="grid grid-cols-1 justify-center">
                            <div className="relative -mt-32">
                                <div className="grid grid-cols-1">
                                    <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => this.handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => this.handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => this.handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rent</button>
                                        </li>
                                    </ul>

                                    <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                                        {activeTabIndex === 0 && (
                                            <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                                <form action="#">
                                                    <div className="registration-form text-dark text-start">
                                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                            <div>
                                                                <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-search icons"></i>
                                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keaywords" />
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-estate icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-catagory" id="choices-catagory-buy" aria-label="Default select example" >
                                                                        <option>Houses</option>
                                                                        <option>Apartment</option>
                                                                        <option>Offices</option>
                                                                        <option>Townhome</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-min-price" id="choices-min-price-buy" aria-label="Default select example">
                                                                        <option>Min Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-max-price" id="choices-max-price-buy" aria-label="Default select example">
                                                                        <option>Max Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="lg:mt-6">
                                                                <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                        {activeTabIndex === 1 && (
                                            <div id="sell-home" role="tabpanel" aria-labelledby="sell-home-tab">
                                                <form action="#">
                                                    <div className="registration-form text-dark text-start">
                                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                            <div>
                                                                <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-search icons"></i>
                                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keaywords" />
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-estate icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-catagory" id="choices-catagory-sell" aria-label="Default select example">
                                                                        <option>Houses</option>
                                                                        <option>Apartment</option>
                                                                        <option>Offices</option>
                                                                        <option>Townhome</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-min-price" id="choices-min-price-sell" aria-label="Default select example">
                                                                        <option>Min Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-max-price" id="choices-max-price-sell" aria-label="Default select example">
                                                                        <option>Max Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="lg:mt-6">
                                                                <input type="submit" id="search-sell" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                        {activeTabIndex === 2 && (
                                            <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
                                                <form action="#">
                                                    <div className="registration-form text-dark text-start">
                                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                            <div>
                                                                <label className="form-label text-slate-900 dark:text-white font-medium">Search : <span className="text-red-600">*</span></label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-search icons"></i>
                                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keaywords" />
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Select Categories:</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-estate icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-catagory" id="choices-catagory-rent" aria-label="Default select example">
                                                                        <option>Houses</option>
                                                                        <option>Apartment</option>
                                                                        <option>Offices</option>
                                                                        <option>Townhome</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 filter-border mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-min-price" id="choices-min-price-rent" aria-label="Default select example">
                                                                        <option>Min Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col">
                                                                <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price :</label>
                                                                <div className="filter-search-form relative flex flex-1 text-gray-400 mt-2">
                                                                    <i className="uil uil-usd-circle icons"></i>
                                                                    <select className="form-select flex-1 bg-gray-50 dark:bg-slate-800" data-trigger name="choices-max-price" id="choices-max-price-rent" aria-label="Default select example">
                                                                        <option>Max Price</option>
                                                                        <option>500</option>
                                                                        <option>1000</option>
                                                                        <option>2000</option>
                                                                        <option>3000</option>
                                                                        <option>4000</option>
                                                                        <option>5000</option>
                                                                        <option>6000</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="lg:mt-6">
                                                                <input type="submit" id="search-rent" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <About />
                    <Feature />
                    <Property />
                    <Client />
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
                {/* <!-- End --> */}
            </React.Fragment>
        );
    }
}

export default Index;