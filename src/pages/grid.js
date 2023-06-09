import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import properties from "../config/grid-data";
import Pagination from "../component/Pagination";
import Switcher from "../component/Switcher";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: properties,
            offset: 0,
            perPage: 10,
            pageCount: 0,
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
                <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-10">
                            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
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
                <div className="container relative -mt-16 z-1">
                    <div className="grid grid-cols-1">
                        <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
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
                </div>

                <section className="relative lg:py-24 py-16">
                    <div className="container">
                        <Pagination itemsPerPage={6} items={this.state.data} gridClass={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]`} />
                    </div>
                </section>
                {/* <!-- End --> */}
                <Footer />
                <Switcher />
            </React.Fragment>
        );
    }
}

export default Grid;
